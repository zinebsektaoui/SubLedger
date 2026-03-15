const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
  try {
      const authHeader = req.headers.authorization;
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return res.status(401).json({ message: "Token manquant ou format invalide" });
      }
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);// Vérifier et décoder le token
      
      req.user = {
          id: decoded.id,
          email: decoded.email,
          role: decoded.role
      };
      
      console.log("Utilisateur authentifié:", req.user);
      next();
      
  } catch (error) {        
      return res.status(401).json({ message: "Erreur d'authentification" });
  }
};

module.exports = { authMiddleware };