import axios from "axios";
// import dotenv from "dotenv"
import React, { useState } from "react";
const base_url = "http://127.0.0.1:8000/chatbot/"
import Button from "../LittleCompoenents/button";
import Input from "../LittleCompoenents/input";
import { authenticate_user } from "../../actions/actions";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { create_user } from "../../actions/actions";
// dotenv.config({silent : true}) // call only when needed

const Login = () =>{

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // This has login and crate account
    
    const [email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[rendered, setRendered] = useState("Register")
    const[renderLogin, setRenderLogin] = useState(true)
    const [first_name, setFirstName] = useState("")
    const[last_name, setLastName] = useState("")

    function authentication_request(event, type){
        if (type == "Login"){
            const authenticate = authenticate_user(email, password, navigate)
            authenticate(dispatch)
        }else{
            const authenticate = create_user(first_name, last_name, email, password, navigate)
            authenticate(dispatch)
        }
    }


    function handleFirstName(event){
        setFirstName(event.target.value)
    }
    
    function handleLastName(event){
        setLastName(event.target.value)
    }

    function handleEmail(event){
        setEmail(event.target.value)
    }

    function handlePassword(event){
        setPassword(event.target.value)
    }
    

    const changeRender = () =>{
        (rendered === "Login")? setRendered("Register") : setRendered("Login")
        setRenderLogin(!renderLogin)
    }

    return (
        <div className="w-[400px] h-[500px] m-auto bg-white relative top-[5%] text-xs shadow-md">
                <div className="flex flex-col">
                    {renderLogin? <div className="mt-28"></div> : (
                            <div className="flex flex-col justify-center mt-20">
                                <input onChange={handleFirstName} placeholder= "First name" className="p-2 m-4 w-[70%] h-8 ml-16 border focus:outline-none focus:rind focus:ring-blue-300"/>
                                <input onChange={handleLastName} placeholder= "Last name" className="p-2 h-8 w-[70%] m-4 ml-16 border focus:outline-none focus:rind focus:ring-blue-300"/>
                            </div>
                    )}
                    <div className="flex flex-col justify-center">
                        <input onChange={handleEmail} placeholder= "PPG email address" className="p-2 w-[70%] m-4 h-8 ml-16 border focus:outline-none focus:rind focus:ring-blue-300"/>
                        <input type="password" onChange={handlePassword} placeholder= "Password" className="p-2 m-4 w-[70%] h-8 ml-16 border focus:outline-none focus:rind focus:ring-blue-300"/>
                    </div>
                    <button onClick={(event)=>{authentication_request(event, (rendered == 'Login' ? 'Register' : 'Login'))}} className="bg-blue-500 w-28 justify-center ml-16 h-8 text-white">{(rendered == 'Login' ? 'Register': 'Login')}</button>
                </div>
                <div className="flex flex-row bottom-[5%] right-0 left-0 justify-center absolute mr-auto ml-auto">
                    <p className="mt-1">{(rendered == "Login") ? "If you have an account already" : "If you don't have an account yet"}</p>
                    <button className="bg-blue-500 w-28 ml-2 h-6 text-white" onClick={changeRender}>{rendered}</button>
                </div>
        </div>
    );
}

export default Login;