import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Protected({ children, authentication = true }) {
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state)=>state.auth.status)
    const navigate = useNavigate()
    useEffect(()=>{
        if(authentication && authStatus!==authentication)
        {
            navigate("/login")
        }
        else if(!authentication && authStatus!==authentication)
        {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus,navigate, authentication])
    return !loader?(<>{children}</>):(<h1>Loading...</h1>)
}

export default Protected