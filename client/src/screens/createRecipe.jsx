import React, { useState } from 'react';
import Nav from '../components/nav';

const CreateRecipe = () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here
    };

    return (
        
        
          

<section class="bg-gray-300 dark:bg-gray-900">
<Nav />
<div class="flex flex-col justify-center text-center pt-4" >
<h1 class="mb-4 text-6xl font-extrabold leading-none tracking-tight text-[#24140b] md:text-6xl lg:text-7xl dark:text-white">Create your recipes!</h1>
<p class="mb-6 text-lg font-bold  lg:text-2xl sm:px-16 xl:px-48 dark:text-gray-400">
    Create your recipes and save them to your account!
</p>
</div>
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16 bg-[#0F0F0F] border rounded-2xl pb-1 ">
      <h2 class="mb-4 text-2xl font-bold text-[#C5A880] dark:text-white">Add a new recipe...</h2>
      <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-1">
                  <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white"> Name</label>
                  <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
              </div>
              <div class="sm:col-span-1">
                  <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white"> Cooking Time (Minutes)</label>
                  <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
              </div>
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white"> Image URL</label>
                  <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter the image URL" required=""/>
              </div>
 
            
              <div>
                  <label for="item-weight" class="block mb-2 text-sm font-medium text-white dark:text-white">Ingredients</label>
                  <input type="text" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""/>
              </div> 
                <button type="button" class="inline-flex items-center justify-center px-5 py-2.5 mt-4 sm:mt-6 text-sm  w-40 font-extrabold text-center text-[#24140b] bg-yellow-200 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-[#C5A880]">
              Add Ingredient +
          </button>
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-white dark:text-white">Cooking Instructions</label>
                  <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Add the cooking instructions"></textarea>
              </div>
          </div>
          <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-extrabold text-center text-[#24140b] bg-yellow-200 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-[#C5A880]">
              Add Recipe
          </button>
      </form>
  </div>
</section>
        
    );
};

export default CreateRecipe;

