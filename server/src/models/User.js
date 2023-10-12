import mongoose from "mongoose";


// Importing the mongoose library for creating the User schema.

const UserSchema = new mongoose.Schema({

    userName: { type: String, required: true, unique: true },
    // Defining the username field in the User schema. It is a required field and must be unique.

    email:{ type: String, required: true, unique: true },
    // Defining the email field in the User schema. It is a required field and must be unique.

    password:{ type: String, required: true },
    // Defining the password field in the User schema. It is a required field.

    savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'recipes' }],

});



//
export const UserModel = mongoose.model('users', UserSchema);// Creating a User model using the User schema. The model is named 'users' and is exported for use in other files.

