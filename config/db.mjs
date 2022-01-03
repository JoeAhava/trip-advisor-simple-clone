import mongoose from "mongoose";

export const URI = `mongodb+srv://root:c9kehhPrtGvpCVP7@trip-advisor-simple-clo.mlsef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

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
