import { Button } from '@chakra-ui/react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
import { useEffect } from 'react';
function App() {
  
  return (
  
    <div className="App">

<Switch>
          <Route path="/chats">
            <ChatPage></ChatPage>
          </Route>
          <Route path="/">
          <HomePage></HomePage>
          </Route>
        
        </Switch>
      
    </div>
  );
}

export default App;
