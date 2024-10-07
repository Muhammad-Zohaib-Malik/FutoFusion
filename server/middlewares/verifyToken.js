import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      // Check if the token exists after splitting the authorization header
      if (!token) {
        return res.status(401).json({ success: false, message: "unauthorized." });
      }

      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.id = decoded._id
      req.author = decoded.author
      req.accountType = decoded.accountType

      next();
    } else {
      return res.status(401).json({ success: false, message: "Access denied. No token provided." });
    }
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(403).json({ success: false, message: "Invalid or expired token" });
  }
};

export default verifyToken;
