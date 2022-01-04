import express from "express";
import { connect } from "./config/db.mjs";
import { handleError, passError } from "./middlewares/errorHandler.mjs";
import usersRouter from "./routes/users.mjs";
import authRouter from "./routes/auth.mjs";
import { protect } from "./middlewares/auth.mjs";
const app = express();

connect();
app.use(express.json());

app.get(
	"/",
	protect,
	passError(async (req, res) => {
		res.statusCode = 404;
		throw new Error("OOps");
		res.json({
			message: "Welcome to Trip ",
		});
	}),
);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use(handleError);

app.listen(process.env.PORT || 9000, () =>
	console.info(`Server started on ${process.env.PORT || 9000}`),
);
