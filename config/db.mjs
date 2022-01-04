import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const URI = process.env.MONGO_URI;

export const connect = (cb = null) =>
	mongoose.connect(
		URI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		cb
			? cb
			: (err) => {
					if (err) throw err;
					console.log(`Database connected`);
			  },
	);
