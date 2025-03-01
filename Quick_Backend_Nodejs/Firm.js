import mongoose from 'mongoose';

const firmSchema = new mongoose.Schema({
    firmName: {
        type: String,
        required: true,
        unique: true
    },
    area: {
        type: String,
        required: true,
    },
    category: {
        type: [{
            type: String,
            enum: ['veg', 'non-veg']
        }]
    },
    region: {
        type: [{
            type: String,
            enum: ['chinese']
        }]
    },
    offer: {
        type: String,
    },
    image: {
        type: String
    },
    vendor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    }],
    products: [{
        type: String,
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
    }]
});

const Firm = mongoose.model('Firm', firmSchema);

export default Firm;
