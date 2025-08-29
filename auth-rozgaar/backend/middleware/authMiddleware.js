
// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   const token = req.header("Authorization")?.replace("Bearer ", "");
//   if (!token) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret");
//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };

// export default authMiddleware;




import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret");
    req.user = decoded; // 👈 store whole decoded payload
    next();
  } catch (err) {
    console.error("JWT error:", err.message);
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
