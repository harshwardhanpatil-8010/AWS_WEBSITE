import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', (req,res)=>{
    const { username, password } = req.body;

    if (username !== process.env.ADMIN_USERNAME) {
        return res.status(401).json({ message: "Invalid username" });
    }

    const isPasswordValid = bcrypt.compareSync(password, process.env.ADMIN_PASSWORD);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
        { id:  process.env.ADMIN_USERNAME }, 
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
        );
    
    const options = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "none",
        secure: true,
        };

    res.status(200).cookie("admin_token", token, options).json({
        success: true,
        message: "Admin logged in successfully",
        auth: token,
        });

})

router.get('/logout', (req, res) => {
    res.clearCookie("admin_token").json({ message: "Admin logged out successfully" });
});

export default router;