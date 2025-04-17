// App.js
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    // App.js (updated return statement)
 (
  <div className="app">
    {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
    <Outlet context={login} />
  </div>
)

   
  );
}

export default App;
