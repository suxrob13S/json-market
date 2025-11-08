import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { login } from "../services/authServices"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    async function authLogin(data) {
        const res = await login(data)
        if (res.success) {
            localStorage.setItem("token", res.data.accessToken)
            navigate("/profile")
        } else {
            setError(true)
        }
    }
    return (
        <div className="Login-page" style={{ width: "100%", height: "100vh", padding: "20px", }} >
            <div style={{ gap: '20px', alignItems: "center", display: "flex", background: "white", width: "60%", height: "70%", boxShadow: "10px 10px 10px 10px black", borderRadius: "10px", margin: '100px auto' }} >
                <div className="Login-left" style={{ width: "65%", height: "100%" }} ></div>
                <form onSubmit={handleSubmit(authLogin)} style={{ background: "white", opacity: "0.8", width: "35%", height: "100%", padding: "50px 60px", margin: '160px auto' }} >
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email Addres</label>
                    <input {...register("email",{required:"Enter your email address"})} type="email" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address" />
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                    <input {...register("password",{required:"Enter your valid password"})} type="Password" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Password" />
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl mt-5 mr-5 text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    <h2 className="mt-10 ml-7">Dont't have an account ?<Link className="text-blue-500" to={"/register"}>Sign-up</Link></h2>
                    <div className="flex gap-8 ml-7 items-center mt-10 " >
                        <img style={{ width: "55px", height: "55px", cursor: "pointer" }} src="/icons8-google-60.png" alt="" />
                        <img style={{ width: "50px", height: "50px", cursor: "pointer" }} src="/icons8-github-96.png" alt="" />
                        <img style={{ width: "55px", height: "55px", cursor: "pointer" }} src="/icons8-apple-inc-64.png" alt="" />
                    </div>
                    <img className="mt-10 ml-24" src="/icons8-grinning-face-94.png" alt="" />
                </form>
            </div>
        </div>
    )
}
export default Login
