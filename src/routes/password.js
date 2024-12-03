const express = require('express');
const router = express.Router();
const mailService = require('../services/mailService');

// POST route for forgot password
router.post('/forgotpassword', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required!' });
    }

    try {
        // Send dummy email to the user
        await mailService.sendDummyEmail(email);
        return res.status(202).json({ message: 'Mail successfully sent!' });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to send email.', error: error.message });
    }
});

module.exports = router;
