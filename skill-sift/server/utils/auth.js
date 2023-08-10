const jwt = require('jsonwebtoken');
const secret = 'supersecretpassword';
const expiration = '1h';

module.exports = {
    authMiddleware: function ({req}) {
        let token = req.query.token || req.headers.authorization || req.body.token;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid Token')
        }
    },

    signToken: function ({ username, _id }) {
        const payload = { username, _id };
        return jwt.sign({ data: payload }, secret, {expiresIn: expiration });
    },
};