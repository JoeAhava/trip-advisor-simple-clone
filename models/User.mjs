import mongoose from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = mongoose.Schema({
	username: {
		type: mongoose.SchemaTypes.String,
		required: true,
	},
	email: {
		type: mongoose.SchemaTypes.String,
		required: true,
	},
	password: {
		type: mongoose.SchemaTypes.String,
		required: true,
	},
	avatar: {
		type: mongoose.SchemaTypes.String,
	},
	isAdmin: {
		type: mongoose.SchemaTypes.Boolean,
		required: true,
		default: false,
	},
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserSchema);

export default User;
