import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {

    const [isRegistering, setIsRegistering] = useState(false);





    return (


        <section class=" bg-cover bg-gray-500 bg-blend-multiply  mx-auto max-h-full 
        bg-[url('https://media.istockphoto.com/id/1081422898/es/foto/pan-frito-pato.jpg?s=1024x1024&w=is&k=20&c=krZG-R3vws2mdzee5z2GCeXdt9uDrsTE36HWHUJKTO0=')]">
            <div class=" px-6 py-8 my-auto mx-auto md:h-screen lg:py-0" >
                <a class="flex  items-center justify-center  pt-10  text-9xl font-extrabold text-[#1A120B]">
                    Recipe
                    <span class="bg-yellow-200 text-gray-900 text-5xl font-extrabold mr-3 px-2.5 pb-3 rounded ml-2">
                        App
                    </span>
                </a>
                <div class="flex flex-col-2 items-center justify-evenly px-4 py-8 mt-8 md:col-span-1 ">
                    <Login/>
                    <Register/>
                </div>
            </div>
        </section>


    );
};


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    const onSubmit = async (e) => {

        e.preventDefault();
        try  {
            await axios.post("http://localhost:3002/auth/login", { email, password});
            alert("Login successful!");
        }   
        catch(err){
            console.log(err);
        }
    
    }






    return (

        <div class="w-full bg-[#0F0F0F]  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-[#C5A880] md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6 "onSubmit={onSubmit} >
                    <div>
                        <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                        <input onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            name="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-[#E3D18A] focus:border-[#E3D18A]" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-[#E3D18A] focus:border-[#E3D18A]" required="" />
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class=
                                    "checked:bg-[#1A120B] focus:border-[#E3D18A]  w-4 h-4 border border-[#E3D18A] rounded  focus:ring-1 focus:ring-[#E3D18A]  ring-offset-[#E3D18A]" required="" />
                            </div>
                           
                        </div>
                    </div>
                    <button 
                    onClick={() => window.location.href='/'}
                    type="submit"
                     class="w-full text-[#1A120B] bg-[#E3D18A] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p class="text-sm font-light text-[#E3D18A] dark:text-gray-400">
                        Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>

    );


}


const Register = () => {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {

        e.preventDefault();
        try  {
            await axios.post("http://localhost:3002/auth/register", {userName, email, password});
            alert("User created! You can Login now");
        }   
        catch(err){
            console.log(err);
        }
    
    }

    return (
        <div class="w-full bg-[#0F0F0F] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-[#C5A880] md:text-2xl dark:text-white">
                    Create an account
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label 
                        
                        for="username" 
                        class="block mb-2 text-sm font-medium text-white dark:text-white">Your username</label>
                        <input 
                        onChange={(e) => setUsername(e.target.value)}
                        value={userName}
                        type="text" 
                        name="username" 
                        id="username" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-[#E3D18A] focus:border-[#E3D18A]" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label 
                        for="email" 
                        class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                        <input 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email" 
                        name="email" 
                        id="email" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-[#E3D18A] focus:border-[#E3D18A]" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label 
                        for="password" 
                        class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                        <input 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-[#E3D18A] focus:border-[#E3D18A]" required="" />
                    </div>
                 
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="  
                checked:bg-[#1A120B] focus:border-[#E3D18A]  w-4 h-4 border border-[#E3D18A] rounded  focus:ring-1 focus:ring-[#E3D18A]  ring-offset-[#E3D18A]" required="" />
                            </div>
                           
                        </div>
                    </div>
                    <button 
                    type="submit" 
                    class="w-full text-[#1A120B] font-bold bg-[#E3D18A] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Sign in
                        </button>
                </form>
            </div>
        </div>

    );
};




export default Auth;
