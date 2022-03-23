import logo from './logo.svg';
import './App.css';
import JoinRoom from './components/JoinRoom';
import ChatRoom from './components/ChatRoom';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App" style={{maxWidth:'800px',margin:'auto'}}>
      <Routes>
        <Route path='/' element={<JoinRoom/>}/>
        <Route path='room' element={<ChatRoom/>}/>
      </Routes>
    </div>
  );
}

export default App;
