import React from "react";

const ConversationHandler = (props)=>{
    return  <div onClick = {props.onSelect(props.conversation.conversation_id)} 
    style={{
        padding : '8px 0px 8px 0px',
        width  : "100%",
        marginBottom :'8px',
        borderRadius : '4px',
        boxShadow : '0 1px rgba(0,0,0,0.1)',
        cursor : 'pointer',
        display : 'flex'
    }}>
        {props.conversation_name}
        <button></button>
    </div>
}

