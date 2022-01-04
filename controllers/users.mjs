import { passError } from "../middlewares/errorHandler.mjs";
import User from "../models/User.mjs";
export const createUser = passError(async (req, res) => {
	const { username, email, password } = req.body;
	const newUser = new User();
	newUser.email = email;
	newUser.username = username;
	newUser.password = password;
	try {
		const createdUser = await newUser.save();
		res.status(201).json(createUser);
	} catch (err) {
		res.statusCode = 400;
		throw err;
	}
});
