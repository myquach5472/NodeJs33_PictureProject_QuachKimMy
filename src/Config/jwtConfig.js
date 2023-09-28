import jwt from 'jsonwebtoken';

const checkToken = (req, res, next) => {

    try {
        let { token } = req.headers;

        if (verifyToken(token)) {
            let checkRole = decodeToken(token);
            next()
        }

    } catch (ex) {
        res.status(403).send("not authorized");

    }
}

const taoToken = (data) => {
    return jwt.sign({ data }, "KEYTOSUCCESS", { expiresIn: "30d" })
}

const verifyToken = (token) => {
    return jwt.verify(token, "KEYTOSUCCESS");
}
const decodeToken = (token) => {
    return jwt.decode(token);
}

export { checkToken, taoToken, verifyToken, decodeToken }