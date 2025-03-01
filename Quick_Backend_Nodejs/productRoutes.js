import express from 'express';
import path from 'path';
import productController from "../controllers/productController.js";

const router = express.Router();

router.post('/add-product/:firmId', productController.addProduct);
router.get('/:firmId/products', productController.getProductByFirm);

router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.header('Content-Type', 'image/jpeg');
    res.sendFile(path.join(process.cwd(), 'uploads', imageName));
});

router.delete('/:productId', productController.deleteProductById);

export default router;
