import '../styles/register.css';
import { useForm } from 'react-hook-form';


function Login() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({});
    const passwordValue = watch('password', '');
    const registerUser = (formData) => {
        console.log(formData);
    };
    const hasUpperCase = (value) => /[A-Z]/.test(value);
    const hasLowerCase = (value) => /[a-z]/.test(value);

    return (
        <div className="outer-wrapper text-center">
            <div class="wrapper">
                <form noValidate onSubmit={handleSubmit(registerUser)}>
                    <h1>Login</h1>
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
                    <button type="submit" class="btn" >Login</button>
                    <div class="register-link">
                        <p>Dont't have an account? <a href="#">
                            Register
                        </a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;