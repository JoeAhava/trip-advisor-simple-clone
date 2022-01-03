import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to Trip ",
	});
});

app.listen(process.env.PORT || 9000, () =>
	console.info(`Server started on ${process.env.PORT || 9000}`),
);
