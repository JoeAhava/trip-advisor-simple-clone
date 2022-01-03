function decorator(handler) {
	return async function errorWrapper(req, res, next) {
		try {
			const result = await handler(req, res);
		} catch (err) {
			req.error = err;
			res.status(500);
			next(err);
		}
	};
}
export const passError = (handler) => decorator(handler);
export const handleError = (err, req, res, next) => {
	res.json({ reqError: req.error ? req.error.message : {}, err: err.message });
};
