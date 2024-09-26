import '../styles/register.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './login';

function Register() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({});
    const passwordValue = watch('password', '');
    const navigate = useNavigate();
    const registerUser = (formData) => {
        axios.post('https//localhost:3001/v1/users/register', formData).then(response =>{
            console.log(response);
            navigate('/login')
        }).catch(error => {
            console.log(error);
        });
    };
    const hasUpperCase = (value) => /[A-Z]/.test(value);
    const hasLowerCase = (value) => /[a-z]/.test(value);

    return (
        <div className="outer-wrapper text-center">
            <div class="wrapper">
                <form noValidate onSubmit={handleSubmit(registerUser)}>
                    <h1>Register</h1>
                    <div class="input-box">
                        <input type="text" placeholder="Firstname" id="firstName" {...register("firstName", { required: true, minLength: 3 })}/>
                        {errors.firstName?.type === 'required' && <p className="error-msg">Firstname is mandatory</p>}
                        {errors.firstName?.type === 'minLength' && <p className="error-msg">Minimum 3 characters</p>}
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder="Lastname" id="lastName" {...register("lastName", { required: true })}/>
                        {errors.lastName?.type === 'required' && <p className="error-msg">Lastname is mandatory</p>}
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="email" placeholder="Email" id="email" {...register("email", {required: true, pattern: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,})+$/})} />
                        {errors.email?.type === 'required' && <p className="error-msg">Email is mandatory</p>}
                        {errors.email?.type === 'pattern' && <p className="error-msg">Incorrect email format</p>}
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Password" id="password" {...register("password", {required: true, validate: {
                            hasUpperCase: (value) => hasUpperCase(value) || 'Password must contain atleast one capital letter',
                            hasLowerCase: (value) => hasLowerCase(value) || 'Password must contain atleast one lower letter'
                         }})}/>
                        {errors.password?.type === 'required' && <p className="error-msg">Password is mandatory</p>}
                        {<p className='error-msg'>{errors.password?.message}</p>}
                        <i class='bx bxs-lock-alt'></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Repeat Password" id="password" {...register("repeatPassword", {required: true, validate: (value) => value === passwordValue })}/>
                        {errors.repeatPassword?.type === 'required' && <p className="error-msg">Repeat Password is mandatory</p>}
                        {errors.repeatPassword?.type === 'validate' && <p className='error-msg'>Password and Repeat Password must be similar</p>}
                        <i class='bx bxs-lock-alt'></i>
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder="Mobile No" id="mobile" {...register("mobile", {required: true})}/>
                        {errors.mobile?.type === 'required' && <p className="error-msg">Mobile no is mandatory</p>}
                        <i class='bx bxs-user'></i>
                    </div>
                    <button type="submit" class="btn">Register</button>
                    <div className="register-link">
                        <p>Already have an account?  
                            <a href="login.js">
                            Login
                        </a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register