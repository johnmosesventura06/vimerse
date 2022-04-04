const jwt = require('jsonwebtoken');
const fs = require('fs');

const requireAuth = (req, _res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return _res.status(401).send({ error: 'Missing authorization header' });
  }

  const authorizationHeaderSplit = authorizationHeader.split(' ');
  const authenticationScheme = authorizationHeaderSplit[0];
  const token = authorizationHeaderSplit[1];

  if (authenticationScheme !== 'Bearer') {
    return _res.status(401).send({ error: 'Invalid Authorization header' });
  }

  const publicKey = fs.readFileSync(process.env.PUBLIC_KEY_PATH);

  try {
    const { type } = jwt.verify(token, publicKey);
    req.userType = type;
  } catch (error) {
    return _res.status(401).send({ error: 'Invalid JWT' });
  }

  return next();
};

module.exports = requireAuth;
