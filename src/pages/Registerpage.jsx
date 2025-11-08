

import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { signup } from "../services/authServices"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    async function authLogin(data) {
        const res = await signup(data)
        if (res.success) {
            localStorage.setItem("token", res.data.accessToken)
            navigate("/profile")
        } else {
            setError(true)
        }
    }
    return (
        <div className="Register-page" style={{ width: "100%", height: "100vh", padding: "20px", }} >
            <div style={{ gap: '20px', alignItems: "center", display: "flex", background: "white", width: "60%", height: "70%", boxShadow: "10px 10px 10px 10px black", borderRadius: "10px", margin: '100px auto' }} >
                <div className="Register-left" style={{ width: "65%", height: "100%" }} ></div>
                <form onSubmit={handleSubmit(authLogin)} style={{ background: "white", opacity: "0.8", width: "35%", height: "100%", padding: "50px 60px", margin: '160px auto' }} >
                    <input {...register("email",{required:"Enter your email address"})} type="email" id="first_name" className="register-input" placeholder="Enter your email address" />
                    <input {...register("username",{required:"Enter your valid username"})} type="text" id="first_name" className="register-input" placeholder="Enter your username" />
                    <input {...register("firstName",{required:"Enter your valid first name"})} type="text" id="first_name" className="register-input" placeholder="Enter your First Name" />
                    <input {...register("lastName",{required:"Enter your last name"})} type="text" id="first_name" className="register-input" placeholder="Enter your Last Name" />
                    <input {...register("password",{required:"Enter your password"})} type="password" id="first_name" className="register-input" placeholder="Enter your Password" />
                
                    <input {...register("phone",{required:"Enter your phone number"})} type="phone" id="first_name" className="register-input" placeholder="Enter your Phone number" />
                    <button type="submit" class="text-white bg-green-700 hover:bg-green-800 w-full focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl mt-10 mr-5 text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Register</button>
                    <div className="flex gap-8 ml-4 items-center mt-10 " >
                        <img style={{ width: "55px", height: "55px", cursor: "pointer" }} src="/icons8-google-60.png" alt="" />
                        <img style={{ width: "50px", height: "50px", cursor: "pointer" }} src="/icons8-github-96.png" alt="" />
                        <img style={{ width: "55px", height: "55px", cursor: "pointer" }} src="/icons8-apple-inc-64.png" alt="" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register
