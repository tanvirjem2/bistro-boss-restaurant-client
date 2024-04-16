import { useContext, useEffect, useState } from 'react';
import loginImage from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {

    // Redirect to the Home page

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    // Num - 3

    const [disabled, setDisabled] = useState(true)

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    // Num - 4

    const { signIn } = useContext(AuthContext);

    // Num - 2

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    // Num - 1

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Login Successful",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <>
            {/* React Helmet */}

            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>

            <div className="bg-[url('/src/assets/others/authentication.png')]">
                <div className='flex flex-wrap lg:flex-nowrap items-center justify-center lg:gap-48 lg:h-lvh'>
                    <div>
                        <img src={loginImage} alt="" />
                    </div>
                    <div className='pl-10 lg:pl-0'>
                        <h1 className='text-4xl font-bold text-center'>Login</h1>
                        <form onSubmit={handleLogin} className='space-y-4'>
                            <h1 className='text-sm font-semibold'>Email</h1>
                            <input
                                className='rounded-lg w-[90%] h-11 p-3'
                                type="email"
                                name='email'
                                placeholder='Type here' />
                            <h1 className='text-sm font-semibold'>Password</h1>
                            <input
                                className='rounded-lg w-[90%] h-11 p-3'
                                type="password"
                                name='password'
                                placeholder='Enter your password' />

                            <div>
                                <LoadCanvasTemplate />
                            </div>
                            <input
                                onBlur={handleValidateCaptcha}
                                className='rounded-lg w-[90%] h-11 p-3'
                                type="text"
                                name='captcha'
                                placeholder='Type here' />
                            <button
                                disabled={disabled}
                                className='btn w-[90%] mt-[31px] bg-[#D1A054B2] text-white'>Sign In
                            </button>
                        </form>
                        <div className='text-center mt-4'>
                            <p><span className='text-[#D1A054] font-medium'>New here?</span>
                                <Link to={'/signUp'}> <span className='text-[#D1A054] font-bold'>
                                    Create a New Account</span></Link></p>
                            <p className='mt-4'>Or sign in with</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;