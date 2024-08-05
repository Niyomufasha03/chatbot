import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./authentication/login";
import ChatRoom from "./chat/chatroom";
import RequireAuth from "./authentication/auth_component";


const App = () => {
  return (
    <BrowserRouter>
    <div style={{height : '100vh', padding  :'-20px', margin : '0', boxSizing :'border-box'}}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chatroom" element = {<RequireAuth><ChatRoom /></RequireAuth>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
