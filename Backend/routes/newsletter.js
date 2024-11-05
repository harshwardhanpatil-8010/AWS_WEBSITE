import express from 'express';
import Newsletter from '../models/newsletterSchema.js';

const router = express.Router();

router.get('/newsletters', async (req, res) => {
    try {
        const newsletters = await Newsletter.find().sort({ updatedAt: -1 });
        res.json(newsletters);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving newsletters' });
    }
});

export default router;