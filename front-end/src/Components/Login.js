import React from 'react'
import { useState } from 'react'
import FLogin from '../Function/F_Login'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
// import bg from '../images/loginbg.jpg'

const Login = () => {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate = useNavigate()
    return (
        <section className="Login bg-[url('/public/images/bglogin.jpg')] bg-cover">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 justify-center ">
                        <img className="w-14 mr-5 " src={logo} alt="images" />
                        RestoBite
                    </a>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-orange-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet? <Link to='/signup' className="font-medium text-primary-600 hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        // <div >
        //     <label>Enter Email</label><br />
        //     <input name='email' type='email' onChange={(e) => { setEmail(e.target.value) }} value={Email} />
        //     <br />
        //     <br />
        //     <label>Enter Password</label><br />
        //     <input name='password' type='password' onChange={(e) => { setPassword(e.target.value) }} value={Password} />
        //     <br />
        //     <br />
        //     <button onClick={async(e) => {
        //         e.preventDefault()
        //         const res =await FLogin(Email, Password)

        //         if(res.success){
        //             localStorage.setItem('myToken' , res.authtoken);
        //             navigate('/home');
        //         }else{
        //             alert(res.message)
        //         }

        //     }}> Login</button>
        //     <br/>
        //     <Link to='/signup'>Add new User</Link> 
        // </div>
    );
}

export default Login;
