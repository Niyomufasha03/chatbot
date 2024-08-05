import React, { useEffect, useState } from "react";
import ConversationList from "./conversationlist";
import NewConversation from "./newConverstaion";
import ChatWindow from "./chatwindow";
import axios from "axios";
import { create_conversation, handleMessageSend, handleSelection, getConversations } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";



const ChatRoom = ()=>{
    const api_url = "http://127.0.0.1:8000/"
    const dispatch = useDispatch()
    const conversations = useSelector((store) =>{
        return store.conversation.conversations
    })

    const get_conversations = ()=>{
        const conversationsRetrieve = getConversations()
        conversationsRetrieve(dispatch)
    }

    useEffect(()=>{
        get_conversations()
    }, [])


    const messages = useSelector((store)=>{
        return store.conversation.messages;
    })

    const [currentConversationIndex, setCurrentConverstaionIndex] = useState(0)
    const [showNewConversation, setShowNewConversation] = useState(false)
    const conversationKey = useSelector((store)=>{
        return store.conversation.conversationKey
    })

    const handleSelectConvesation = (conversationKey)=>{
        const handleKeySelection = handleSelection(conversationKey)
        handleKeySelection(dispatch)
    }


    const handleSendMessage = (message)=>{
        console.log(conversationKey)
        const handleMessage  = handleMessageSend(conversationKey, message)
        handleMessage(dispatch)
    }

    return(
        <div className="flex h-full bg-white font-verdana text-xs">
            <div className="flex flex-row w-full m-0">
                <ConversationList
                conversations = {conversations}
                onSelect={handleSelectConvesation}
                active = {conversationKey}/>
                <ChatWindow messages = {messages}
            onSend = {handleSendMessage}/>
            </div>
        </div>
    )
}

export default ChatRoom;