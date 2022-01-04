import jsonwebtoken from "jsonwebtoken";

export const protect = (req, res, next) => {
	if (
		!req.headers.authorization ||
		!req.headers.authorization.startsWith("Bearer")
	) {
		res.statusCode = 401;
		throw new Error("Invalid Token");
	}
	const authorization = req.headers.authorization.split(" ");
	const token = authorization[1];
	if (!token) {
		res.statusCode = 401;
		throw new Error("UnAuthorized access");
	}
	try {
		const user = jsonwebtoken.verify(token, process.env.SECRET_HASH_KEY);
		req.user = user;
		next();
	} catch (err) {
		res.statusCode = 401;
		throw new Error("Invalid Token");
	}
};

export const adminProtect = (req, res, next) => {
	if (!req.user) {
		res.statusCode = 401;
		throw new Error("UnAuthorized access");
	}
	if (!req.user.isAdmin) {
		res.statusCode = 401;
		throw new Error("UnAuthorized access");
	}
	next();
};
