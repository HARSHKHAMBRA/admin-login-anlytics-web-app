import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Login from './components/Login'; // Assuming Login.js is in components folder
import Register from './components/Register'; // Assuming Register.js is in components folder

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(false); // Reset register form visibility
  };

  const handleRegisterButtonClick = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowLoginForm(false); // Reset login form visibility
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Your Brand</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={handleLoginButtonClick}>
                {showLoginForm ? 'Login' : 'Login'}
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleRegisterButtonClick}>
                {showRegisterForm ? 'Register' : 'Register'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {showLoginForm && <Login onLogin={() => setShowLoginForm(false)} />}
      {showRegisterForm && <Register />}
    </div>
  );
}

export default App;
