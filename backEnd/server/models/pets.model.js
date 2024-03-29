const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const PetShelterSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name must be at least 3 characters"],
            minlength: [3, "Name must be at least 3 characters"],
            maxlength: [14, "Name can not exceed 14 characters"],
            unique: [true, "this name is already taken"]
        },
        type: {
            type: String,
            required: [true, "Type must be at least 3 characters"],
            minlength: [3, "Type must be at least 3 characters"],
            maxlength: [14, "Type can not exceed 14 characters"]
        },
        description: {
            type: String,
            required: [true, "Description must be at least 3 characters"],
            minlength: [3, "Description must be at least 3 characters"]
        },
        skillOne: { type: String },
        skillTwo: { type: String },
        skillThree: { type: String },
        image: {
            type: String,
            default:""
        },
    
        cloudinary_id: {
            type: String,
            default:""
        },
    },
    { timestamps: true }
)

PetShelterSchema.plugin(uniqueValidator, { message: 'This name is already taken' });
module.exports.Pets = mongoose.model('Pets', PetShelterSchema);