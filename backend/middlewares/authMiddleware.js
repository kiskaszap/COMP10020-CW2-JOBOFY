const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    console.log("No token not found");
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }
  console.log("Token found:", token);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token." });
    }
    req.user = user; // Attach the user payload to the request
    console.log("User authenticated:", user);
    next();
  });
};

module.exports = { authenticateToken };
