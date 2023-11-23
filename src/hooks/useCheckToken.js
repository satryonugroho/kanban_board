import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts";
import { isTokenValid } from "../utils";

const useCheckToken = () =>{
    const navigate = useNavigate()
    const {appContext} = useContext(AppContext)
    
    useEffect(()=>{
        if(!isTokenValid(appContext.token)){
            navigate('/login')
        }
    },[appContext, navigate])

}

export default useCheckToken;