import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/others/authentication2.png'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    // Redirect to the Home Page
    const navigate = useNavigate();

    // Use useContext
    const { createUser, updateUserProfile } = useContext(AuthContext)

    // Use react-hook-form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('User profile info updated');
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User Created Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            })
    };

    return (

        <>
            {/* React Helmet */}

            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>

            <div className="bg-[url('/src/assets/others/authentication.png')]">
                <div className='flex flex-wrap lg:flex-nowrap items-center justify-center lg:gap-48 lg:h-lvh'>
                    <div>
                        <h1 className='text-4xl font-bold text-center'>Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>

                            <h1 className='text-sm font-semibold'>Name</h1>

                            {/* ------------ Name Field --------- */}

                            <input
                                className='rounded-lg w-full h-11 p-3'
                                type="text"
                                {...register("name", { required: true })}
                                name='name'
                                placeholder='Type here' />

                            <div>
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>

                            <h1 className='text-sm font-semibold'>Photo URL</h1>

                            {/* ------------ Photo URL Field --------- */}

                            <input
                                className='rounded-lg w-full h-11 p-3'
                                type="text"
                                {...register("photoURL", { required: true })}
                                name='photoURL'
                                placeholder='Type here' />

                            <div>
                                {errors.photoURL && <span className='text-red-600'>This field is required</span>}
                            </div>

                            <h1 className='text-sm font-semibold'>Email</h1>

                            {/* ---------------- Email Field ------------ */}

                            <input
                                className='rounded-lg w-full h-11 p-3'
                                type="email"
                                {...register("email", { required: true })}
                                name='email'
                                placeholder='Type here' />

                            <div>
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>

                            <h1 className='text-sm font-semibold'>Password</h1>

                            {/* ------------ Password Field --------------- */}

                            <input
                                className='rounded-lg w-full h-11 p-3'
                                type="password"
                                {...register("password", {
                                    required: true,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    minLength: 6,
                                    maxLength: 20
                                })}
                                name='password'
                                placeholder='Enter your password' />

                            <div>
                                {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                            </div>

                            <div>
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters</span>}
                            </div>

                            {/* --------------- Pattern related ------------- */}

                            <div>
                                {errors.password?.type === 'pattern' && <span className='text-red-600'>
                                    Password: Upper, lower, number, special.
                                </span>}
                            </div>

                            <button className='btn w-full mt-[31px] bg-[#D1A054B2] text-white'>
                                Sign Up
                            </button>
                        </form>
                        <div className='text-center mt-4'>
                            <p><span className='text-[#D1A054] font-medium'>Already registered?</span>
                                <Link to={'/login'}> <span className='text-[#D1A054] font-bold'>
                                    Go to log in</span></Link></p>
                            <p className='mt-4'>Or sign up with</p>
                        </div>
                    </div>

                    <div>
                        <img src={loginImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;