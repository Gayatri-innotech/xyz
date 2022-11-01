import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Store from './redux/store';
import { Provider } from 'react-redux';
import Home from './components/adminHome';
import Forms from './components/forms'
import UpdateDetails from './components/updateDetails';
import Users from './components/users';
import UserPoll from './components/userPoll';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/reg' element={<Register/>}/>
            <Route excat path='/homes' element={<adminHome />} />
            <Route excat path='/form' element={<Forms />} />
            <Route excat path='/user' element={<Users />} />
            <Route excat path='/userPoll' element={<UserPoll />} />
            <Route excat path='/edit/:id' element={<UpdateDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;