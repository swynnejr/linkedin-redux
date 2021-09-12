import React from 'react';
import './App.css';
import Header from './Header';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
        <Sidebar />
        <Feed />
      {/* Widgets */}

      </div>
        )}
    </div>
  );
}

export default App;
