import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        enum: [
            'Burger king',
            'Cheese garlic bread',
            'Cheese burger',
            'Chicken nuggets',
            'Fried chicken',
            'Fries',
            'KFC',
            'Margherita pizza',
            'Mashed potatoes',
            'Pizza hut',
            'Veggie pasta',
            'Zinger burger'
        ]
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: [{
            type: String,
            enum: ['veg', 'non-veg']
        }]
    },
    image: {
        type: String
    },
    bestSeller: {
        type: Boolean
    },
    description: {
        type: String
    },
    firm: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm'
    }]
});

const Product = mongoose.model('Product', productSchema);

export default Product;
