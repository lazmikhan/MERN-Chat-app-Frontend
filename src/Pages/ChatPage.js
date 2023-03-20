import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChatPage = () => {
    const [chats, setChats]= useState([]);
    const  fetchChats=async ()=>{
        const {data} = await axios.get('http://localhost:5000/api/chats/');
       setChats(data);
      
    };
    useEffect(()=>{
  fetchChats();

    },[]);
    console.log(chats)
    return (
        <div>
            
            {
                chats.map(chat=>
                    <div>{chat.chatName}</div>
                )
            }
        </div>
    );
};

export default ChatPage;