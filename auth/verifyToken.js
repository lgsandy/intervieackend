import jwt from "jsonwebtoken"
export default  function(req, res, next) {
	//check token in heder
	const token = req.header('auth-token');
	if (!token) return res.status(401).send('Access Denied');
	// invalid token - synchronous
	try {
		const verifiedToken = jwt.verify(token, "dsjfdsfsdhfgfhdsgfhdsgf");
		req.user = verifiedToken;
		next();
	} catch (err) {
		res.status(400).send('Invalid Token');
	}
};