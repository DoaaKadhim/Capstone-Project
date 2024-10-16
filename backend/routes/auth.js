// routes/auth.js
import express from 'express';
import User from '../models/User.js'; // Ensure you use the correct extension for the model
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            name,
            email,
            password,
        });

        // Save user
        await user.save();

        const payload = { userId: user._id };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = { userId: user._id };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Export the router
export default router;