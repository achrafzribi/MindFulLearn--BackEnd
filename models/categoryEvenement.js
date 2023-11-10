import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categoryEvenementSchema = new Schema(
    {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model('categoryEvenement', categoryEvenementSchema);