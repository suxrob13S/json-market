import { useEffect, useState } from "react";
import { profile } from "../services/authServices";
import { useNavigate } from "react-router-dom";



function Profile() {
    const [userman, setUserman] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getUser()
    }, [])
    async function getUser() {
        const res = await profile()
        setUserman(res.data.user)

    }

    // function logout() {
    //     localStorage.removeItem("token")
    //     navigate("/")
    // }
    return (
        <div  style={{padding:"0% 30%",width:"100%",height:"100%"}} className=" Profile-page flex items-center justify-center min-h-screen  p-5">
            <div style={{boxShadow:"3px 6px 10px 10px black",width:"65%",height:"65%"}} className="bg-white rounded-2xl shadow-lg p-10  ">
                <div className="flex flex-col items-center">
                  <img style={{width:"100px",height:"100px",borderRadius:"50%",border:"1px solid"}} src="" alt="Here is a photo" />
                    <h2 className="mt-4 text-xl font-semibold text-gray-800">{userman.username}</h2>
                    <p className="text-gray-500 text-sm">{userman.email}</p>
                </div>

                <div className="mt-6">
                    <div className="flex justify-between text-gray-600">
                        <span className="font-medium">First Name</span>
                        <span className="font-semibold">{userman.firstName}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 mt-2">
                        <span className="font-medium">Last Name</span>
                        <span className="font-semibold">{userman.lastName}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 mt-2">
                        <span className="font-medium">Phone Number</span>
                        <span className="font-semibold">{userman.phone}</span>
                    </div>
                </div>

                <div className="mt-6 flex justify-around">
                    <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
                        Edit Profile
                    </button>
                    <button  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
                        Logout 
                    </button>
                </div>

                <div className="mt-6 border-t pt-4 text-gray-600 text-sm text-center">
                    <p>“Passionate about creating modern web applications with clean UI/UX.”</p>
                </div>
            </div>
        </div>

    )
}
export default Profile;
