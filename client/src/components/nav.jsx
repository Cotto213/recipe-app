import React from 'react';
import "tailwindcss/tailwind.css"



const Nav = () => {
    return (
        <nav class="text-gray-600 body-font bg-[#191717] w-full z-20 top-0 left-0 border-b border-gray-200 ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href='#' class="flex items-center text-5xl font-extrabold text-white">Recipe
                    <span class="
          bg-yellow-200 text-black text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2"> App</span>
                </a>

                <div class="flex md:order-2">
                    <button onClick={() => window.location.href='/auth'} type="button" class="text-[#1B1A17] bg-yellow-200 hover:bg-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-extrabold rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2">
                        Log In

                    </button>

                </div>


                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">

                    <ul class="flex flex-col font-medium  p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        <li>
                            <a class="block py-2 pl-3 pr-4 text-2xl text-[#F3E9DD] rounded hover:bg-gray-100 md:hover:bg-transparent hover:cursor-pointer md:hover:text-[#EEC373] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Recipes
                            </a>
                        </li>

                        <li>
                            <a class="block py-2 pl-3 pr-4 text-2xl text-[#F3E9DD] rounded hover:bg-gray-100 md:hover:bg-transparent hover:cursor-pointer md:hover:text-[#EEC373] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Add Recipes
                            </a>
                        </li>

                        <li>
                            <a class="block py-2 pl-3 pr-4 text-2xl text-[#F3E9DD] rounded hover:bg-gray-100 md:hover:bg-transparent hover:cursor-pointer md:hover:text-[#EEC373] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Saved Recipes
                            </a>
                        </li>


                    </ul>
                </div>

            </div>
        </nav>

    );


};

export default Nav;
