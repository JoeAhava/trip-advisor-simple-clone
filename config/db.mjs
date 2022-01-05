import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		console.info(
			`MongoDB Connected: `.cyan +
				`${conn.connection.host} - DB - ${conn.connection.name}`.green.underline
					.bold,
		);
	} catch (error) {
		console.error(`Error: `.red + `${error.message}`.red.underline.bold);
		process.exit(1);
	}
};

export default connectDB;
