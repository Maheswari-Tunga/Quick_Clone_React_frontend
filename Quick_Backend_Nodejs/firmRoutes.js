import express from 'express';
import path from 'path';
import firmController from '../controllers/firmController.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/add-firm', verifyToken, firmController.addFirm);

router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.header('Content-Type', 'image/jpeg');
    res.sendFile(path.join(process.cwd(), 'uploads', imageName));
});

router.delete('/:firmId', firmController.deleteFirmById);

export default router;
