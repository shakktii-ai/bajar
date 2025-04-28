// pages/signup.js

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const SignUp = () => {
    const router = useRouter()
 
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [designation, setDesignation] = useState("");
    const [techStack, setTechStack] = useState("");
    const [department, setDepartment] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [profileImg, setProfileImg] = useState("");

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handlePasswordToggle = (e, fieldId) => {
        const field = document.getElementById(fieldId);
        const type = field.type === "password" ? "text" : "password";
        field.type = type;
        e.target.textContent = type === "password" ? "👁️" : "🙈";
    };

    
    const handleChange = (e) => {
        if (e.target.name == 'firstName') {
            setFirstName(e.target.value)
        }
        else if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
        else if (e.target.name == 'lastName') {
            setLastName(e.target.value)
         } else if (e.target.name == 'companyName') {
            setCompanyName(e.target.value)
        }
        else if (e.target.name == 'designation') {
            setDesignation(e.target.value)
        }
        else if (e.target.name == 'department') {
            setDepartment(e.target.value)
        }
        else if (e.target.name == 'techStack') {
            setTechStack(e.target.value)
        }else if (e.target.name == "profileImg") {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setProfileImg(reader.result);
              };
              reader.readAsDataURL(file);
            }
          }
    }

const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        setPasswordError("Passwords do not match!");
        return;
    } else {
        setPasswordError("");
    }

    const data = { profileImg, firstName, email,companyName, password, lastName, designation, techStack, department };

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Check if response is not OK
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData?.error || "Something went wrong. Please try again.");
        }

        const response = await res.json();
        if (response.success) {
            setProfileImg('');
            setLastName('');
            setCompanyName('');
            setConfirmPassword('');
            setDesignation('');
            setTechStack('');
            setDepartment('');
            setEmail('');
            setFirstName('');
            setPassword('');

            toast.success('Employee account has been created!', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    } catch (error) {
        toast.error(`Error: ${error.message}`, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
};


    return (<> 
    <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
        <div className="relative flex flex-col items-center justify-center min-h-screen ">
            
            <img
                src="/Logoo.png"
                alt="Shakti AI Logo"
                className="absolute top-4 right-8 w-20 mb-5"
            />

                <h1 className="text-2xl ml-28 mb-4">
                    Create Employee <span className="text-pink-400">Account!</span>
                </h1>
            <div className=" p-4  rounded-lg">

                <form onSubmit={handleSubmit} className="flex flex-col ml-44 gap-4">
                    <div className='grid grid-cols-2  gap-4'>
                    <input
                        type="text"
                        name='firstName'
                        value={firstName}
                        onChange={handleChange}
                        placeholder="firstName"
                      required
                        className="p-3 bg-[#6c57ec] bg-opacity-20 rounded-full placeholder-gray-400 focus:ring-2 focus:ring-pink-400"
                    />
                    <input
                        type="text"
                        name='lastName'
                        value={lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                        className="p-3 rounded-full bg-[#6c57ec] bg-opacity-20  placeholder-gray-400 focus:ring-2 focus:ring-pink-400"
                    />
                    <input
                        type="email"
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="p-3 rounded-full bg-[#6c57ec] bg-opacity-20  placeholder-gray-400 focus:ring-2 focus:ring-pink-400"
                    />
                    <input
                        type="text"
                        name='companyName'
                        value={companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                        required
                        className="p-3 rounded-full bg-[#6c57ec] bg-opacity-20  placeholder-gray-400 focus:ring-2 focus:ring-pink-400"
                    />
                    <input
                        type="text"
                        name='designation'
                        value={designation}
                        onChange={handleChange}
                        placeholder="designation"
                        required
                        className="p-3 rounded-full bg-[#6c57ec] bg-opacity-20  placeholder-gray-400 focus:ring-2 focus:ring-pink-400"
                    />
                   
                    <input
                        type="text"
                        name='techStack'
                        value={techStack}
                        onChange={handleChange}
                        placeholder="tech Stack"
                        required
                        className="p-3 rounded-full bg-[#6c57ec] bg-opacity-20  placeholder-gray-400 focus:ring-2 focus:ring-pink-400"
                    />
                    <input
                        type="text"
                        name='department'
                        value={department}
                        onChange={handleChange}
                        placeholder="Department"
                        required
                        className="p-3 rounded-full bg-[#6c57ec] bg-opacity-20  placeholder-gray-400 focus:ring-2 focus:ring-pink-400"
                    />

                    <div className="relative">
                        <input
                            type="password"
                            id="password"
                            name='password'
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="🔒 Password"
                            required
                            className="w-full p-3 rounded-full bg-[#6c57ec] bg-opacity-20  placeholder-gray-400 focus:ring-2 focus:ring-pink-400"
                        />
                        <span
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer "
                            onClick={(e) => handlePasswordToggle(e, "password")}
                        >
                            👁️
                        </span>
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            placeholder="🔒 Confirm Password"
                            required
                            className="w-full p-3 rounded-full bg-[#6c57ec] bg-opacity-20  placeholder-gray-400 focus:ring-2 focus:ring-pink-400"
                        />
                        <span
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer "
                            onClick={(e) => handlePasswordToggle(e, "confirm-password")}
                        >
                            👁️
                        </span>
                    </div>

                    {passwordError && (
                        <p className="text-red-500 mt-2">{passwordError}</p>
                    )}
</div>
                    <button
                        type="submit"
                        className="p-3 text-white w-1/4 m-auto  bg-pink-400 rounded-full hover:bg-pink-500 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                {/* <div className="mt-4  text-center">
                    Already have an account?{" "}
                    <a href="/login" className="text-pink-400 font-bold hover:underline">
                        Sign in
                    </a>
                </div> */}
            </div>
        </div>
        </>
    );
};

export default SignUp;
