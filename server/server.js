import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import  {userRouter}  from "./src/routes/users.js"
import { recipeRouter } from "./src/routes/recipes.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);



const uri = 'mongodb+srv://alfonsocotto5b12:Pa$$w0rd@recipecluster.aogk9zl.mongodb.net/recipeCluster?retryWrites=true&w=majority';

async function connect (){

    try {
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database connected');
    }
    catch (error) {
        console.error(error);
    }
}

connect();

app.listen(3002, () => console.log('Server Running'));


