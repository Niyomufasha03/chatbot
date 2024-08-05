import React from "react";
import { useSelector, useStore } from "react-redux";
import { Navigate } from "react-router";
 
const RequireAuth = ({children}) => {
    console.log("reached here");
    const authenticated = useSelector((store)=>{
        return store.authentication.authenticated
    })
    console.log(authenticated)
    if(!authenticated){
        return <Navigate to= "/login" />
    }else{
        return children
    }
}

export default RequireAuth