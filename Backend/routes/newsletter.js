import express from 'express';
import Newsletter from '../models/newsletterSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const newsletters = await Newsletter.find();
        res.json(newsletters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving newsletters' });
    }
});

router.post('/add', async (req, res) => {
    try {
        const { title, content, imageUrl } = req.body;
        const newNewsletter = new Newsletter({
            title,
            content,
            imageUrl,
            updatedAt: new Date(),
        });
        const savedNewsletter = await newNewsletter.save();
        res.status(201).json(savedNewsletter);
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: 'Error adding newsletter', error: error.message });
    }
});

export default router;
