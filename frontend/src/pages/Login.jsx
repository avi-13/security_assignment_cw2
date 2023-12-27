import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { loginUserApi } from '../apis/api';
import '../style/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);

        const data = {
            email: email,
            password: password
        }

        loginUserApi(data).then((res) => {
            if (res.data.success == false) {
                toast.error(res.data.message)
            } else {
                toast.success(res.data.message)
                localStorage.setItem('token', res.data.userData);

                const jsonDecode = JSON.stringify(res.data.userData)
                localStorage.setItem('users', jsonDecode);

            }

        }).catch((err) => {
            toast.error("Server Error")
            console.log(err.message)
        })
    }

    return (
        <>
            <div className='secondBody'>
                <div class="container">
                    <div class="form login">
                        <header>Login</header>
                        <form>
                            <div class="inputBox">
                                <i class="fas fa-envelope"></i>
                                <input onChange={changeEmail} type="text" required />
                                <label>Email</label>
                            </div>
                            <div class="inputBox">
                                <i class="fas fa-lock"></i>
                                <input onChange={changePassword} type="password" maxlength="26" required />
                                <label>Password</label>
                            </div>
                            <div class="link">
                                <a href="#">Forgot Password</a>
                            </div>
                            <button onClick={handleSubmit}>Login</button>
                            <div class="link">
                                <p>Don't have an account? <Link to={"/register"}>Signup</Link></p>
                            </div>
                            <div class="line"></div>
                            <div class="social-login">
                                <a href="#" class="apple"><i class="fab fa-apple"></i> <span>Login with apple</span></a>
                                <a href="#" class="facebook"><i class="fab fa-facebook"></i> <span>Login with facebook</span></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login;
