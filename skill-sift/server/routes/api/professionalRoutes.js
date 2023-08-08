const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Professional = require('../models/professionals');

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingPro = await Professional.findOne({ username });
        if (existingPro) {
            return res.status(400).json({ message: 'Username already taken' });
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newProfessional = new Professional({ username, password: hashedPassword });
        await newProfessional.save();

        res.status(201).json({ message: 'Professional registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error - Could not register' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const professional = await Professional.findOne({ username });
        if (!professional) {
            return res.status(401).json({ message: 'Could not find Professional' });
        }

        const isPasswordValid = await bcrypt.compare(password, professional.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const token = jwt.sign({ professionalId: professional._id}, 'your_secret_key_here');

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server Error - Could not login'})
    }
});

module.exports = router;