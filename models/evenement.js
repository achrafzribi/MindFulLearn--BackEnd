import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const evenementSchema = new Schema(
    {
        index: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        adress: {
            type: String,
            required: true
        },
        id_category: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model('Evenement', evenementSchema);