import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import googleLogo from "../assets/googlelogo.png";

const Login = () => {
    const { login, loginwithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate(); 
    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // login(email, password).then((userCredential) =>{
        //     const user = userCredential.user;
        //     alert("Login Successfully! ")
        //     navigate(from, {replace:true})
            
        // })

        try {
            await login(email, password);
            alert('Login Successful!');
            navigate(from, { replace: true });
        } catch (error) {
            setError(error.message);
        }

    };

    const handleRegister = () => {
        loginwithGoogle().then((result) => {
            const user = result.user;
            alert("Sign up successful!");
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Login Form</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleLogin}>
                                <div className="relative">
                                    <input autoComplete="off" id="email" name="email" type="text" className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
                                </div>
                                <div className="relative">
                                    <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
                                </div>
                                <p>If you haven't an account. Please <Link to="/sign-up" className="text-green-700 underline">Sign Up</Link> here</p>
                                <div className="relative">
                                    <button type="submit" className="bg-green-500 text-white rounded-md px-2 py-1">Login</button>
                                </div>
                                {error && <p className="text-red-500">{error}</p>}
                            </form>
                        </div>

                        <hr/>
                        {/* Login with Google */}
                        <div className='flex w-full item-center flex-col mt-5 gap-3'>
                           <button onClick={handleRegister} className='block'> <img src={googleLogo} alt="google" className='w-12 h-12 inline-block' />Login with Google</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login