import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({

    name :{ type: String, required: true },

    imageURL :{ type: String, required: true },


    ingredients :[{ type: String, required: true }],

    instructions :{ type: String, required: true },

    cookTime :{ type: String, required: true },

    recipeUser :{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'users' },


});

export const RecipeModel = mongoose.model('recipes', RecipeSchema);