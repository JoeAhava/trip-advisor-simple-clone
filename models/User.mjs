import { Schema, model, SchemaTypes } from "mongoose";

const UserSchema = Schema({
	username: {
		type: SchemaTypes.String,
		required: true,
	},
	avatar: {
		type: SchemaTypes.String,
	},
});

const User = model("User", UserSchema);

export default User;
