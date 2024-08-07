import React, { useState } from "react";
import Button from "../LittleCompoenents/button";
import NewConversation from "./newConverstaion";
import { create_conversation } from "../../actions/actions";
import { useDispatch } from "react-redux";
import { action_types } from "../../actions/actions";

const ConversationList = ({conversations, onSelect, active}) =>{

    const [showNewConversation, setShowNewConversation] = useState(false)
    const dispatch = useDispatch()
    // the server should return another conversation
    const handleNewConversation = (name)=>{
        console.log("reached here");
        const createConversation = create_conversation(name)
        setShowNewConversation(false)
        createConversation(dispatch)
    }

    const Logout = ()=>{
        localStorage.setItem('token', undefined)
        dispatch({
            type : action_types.DE_AUTHENTICATE_USER
        })
    }

    return(
        <div className="w-1/5 bg-[#e2e8f0] h-full p-4">
            {
                (showNewConversation) ? <NewConversation onCreate={handleNewConversation} /> : 
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold align-middle">Conversations</h2>
                    <button className="w-12 h-6 text-xs bg-blue-500 ml-2 text-white rounded-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 " onClick={()=>{setShowNewConversation(true)}}>new</button>
                </div>
            }
            <ul style={{
                listStyleType : "none"
            }}>
                {conversations.map((conversation)=>{
                    return(
                        <li key={conversation.key} onClick={()=> onSelect(conversation.conversation_id)}
                        className={`p-2 hover:bg-gray-100 mb-2 rounded-md cursor-pointer ${conversation.conversation_id === active ? 'bg-white' : 'transparent'} `}>
                            {conversation.conversation_name}
                        </li>
                    )
                })}
            </ul>
            <button onClick={Logout} className="bg-red-400 rounded-sm w-28 ml-2 h-6 absolute text-white bottom-3">Log out</button>
        </div>
    )
}


export default ConversationList;