import { passError } from "../middlewares/errorHandler.mjs";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/User.mjs";

export const login = passError(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		res.statusCode = 401;
		throw new Error("Wrong email or password");
	}
	const match = await user.matchPassword(password);
	if (!match) {
		res.statusCode = 401;
		throw new Error("Wrong email or password");
	}
	const token = await jsonwebtoken.sign(
		{
			username: user.username,
			email: user.email,
			isAdmin: user.isAdmin,
		},
		process.env.SECRET_HASH_KEY,
	);
	res.json({ token });
});
