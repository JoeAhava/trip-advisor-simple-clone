function decorator(handler) {
	return async function errorWrapper(req, res, next) {
		try {
			await handler(req, res);
		} catch (err) {
			req.error = err;
			res.status(res.statusCode || 500);
			next(err);
		}
	};
}
export const passError = (handler) => decorator(handler);
export const handleError = (err, req, res, next) => {
	res.json({ error: err.message });
};
