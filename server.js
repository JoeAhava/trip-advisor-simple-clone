import express from "express";
import { connect } from "./config/db.js";
import { handleError, passError } from "./middlewares/errorHandler.js";
const app = express();

connect();
app.use(express.json());

app.get(
	"/",
	passError(async (req, res) => {
		throw new Error("OOps");
		res.json({
			message: "Welcome to Trip ",
		});
	}),
);

app.use(handleError);

app.listen(process.env.PORT || 9000, () =>
	console.info(`Server started on ${process.env.PORT || 9000}`),
);
