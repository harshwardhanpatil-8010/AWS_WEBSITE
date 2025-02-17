
import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.admin_token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized! Please login to continue" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.id !== process.env.ADMIN_USERNAME) {
            return res.status(403).json({ message: "Forbidden! Admin access required." });
        }
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token. Please log in again." });
    }
};
