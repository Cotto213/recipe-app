import express from "express";
import { RecipeModel } from "../models/Recipe.js";
import mongoose from "mongoose";
import { UserModel } from "../models/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await RecipeModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
// Route for adding a new recipe to the database
//
router.post("/", async (req, res) => {
  const recipe = new RecipeModel({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients,
    imageURL: req.body.imageURL,
    cookTime: req.body.cookTime,
    recipeUser: req.body.recipeUser,
  });

  try {
    const response = await recipe.save();
    res.status(201).json({
      createdRecipe: {
        name: response.name,
        instructions: response.instructions,
        ingredients: response.ingredients,
        imageURL: response.imageURL,
        cookTime: response.cookTime,
        _id: response._id,
      },
    });
  } catch (error) {
    res.json(error);
  }
});

router.put("/", async (req, res) => {
  try {
    const recipe = await RecipeModel.findById(req.body.recipeId);
    const user = await UserModel.findById(req.body.userId);
    user.savedRecipes.push(recipe);
    await user.save();

    res.json({ savedRecipes: user.savedRecipes });
  } catch (error) {
    res.json(error);
  }
});

router.get("/savedRecipes/id", async (req, res) => {

try{
const user = await UserModel.findById(req.body.userId);
res.json({savedRecipes: user?.savedRecipes});
}catch(error){

}

});
router.get("/savedRecipes", async (req, res) => {

try{
const user = await UserModel.findById(req.body.userId);
const savedRecipes = await RecipeModel.find({_id: {$in: user?.savedRecipes},
});
res.json({savedRecipes});
}catch(error){

}

});


export const recipeRouter = router;
