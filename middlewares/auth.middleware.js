const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
  // Jib token men header
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token manquant !" });
  }
  const token = authHeader.split(" ")[1]; // Bearer TOKEN
  try {
    //  Vérifie token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //  Mets user decoded f req.user pour routes
    req.user = decoded;

    next();
  }catch (error) {
    return res.status(401).json({ message: "Token invalide" });
  }
};

module.exports = {authMiddleware}