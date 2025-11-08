import {  useEffect, useState } from "react";
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

    function logout(){
        localStorage.removeItem("token")
        navigate("/")
    }
    return (
        <div className="Profile-page =" >
            {userman.email}
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default Profile;