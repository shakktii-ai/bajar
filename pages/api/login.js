import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            let user = await User.findOne({ email: req.body.email });

            if (!user) {
                return res.status(401).json({
                    success: false,
                    error: "No user found with this email. Please check your credentials."
                });
            }

            // Decrypt stored password
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET || "secret123");
            const decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

            // Validate password
            if (req.body.password !== decryptedPass) {
                return res.status(401).json({
                    success: false,
                    error: "Invalid Credentials. Please check your password."
                });
            }

            // Generate JWT token with user data
            const token = jwt.sign(
                {
                    id: user._id,

                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    profileImg: user.profileImg,
                    department: user.department,
                    designation: user.designation,
                    techStack: user.techStack,
                },
                process.env.JWT_SECRET || "jwtsecret",
                { expiresIn: "1h" }
            );

            // Send user data and token in response
            return res.status(200).json({
                success: true,
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    profileImg: user.profileImg,
                    department: user.department,
                    designation: user.designation,
                    techStack: user.techStack,
                },
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                error: "An error occurred on the server. Please try again later."
            });
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
};

export default connectDb(handler);

