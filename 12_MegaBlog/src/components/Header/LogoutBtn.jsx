import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'
function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = async () => {
        try {
            await authService.logout();       
            dispatch(logout());                              
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };
    return (
        <button
         className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
         onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn