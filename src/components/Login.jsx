import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file
import logo from './logo.png'; // Importez votre image

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validation logic
    if (username && password) {
      // Perform login operation
      alert('Login successful!');
    } else {
      alert('Please enter your username and password.');
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" /> {/* Insérer l'image */}
      <h1 className="login-heading">Login to your account</h1>
      <div>
        <input
          className="login-input"
          type="text"
          placeholder="Nom d'utilisateur ou courriel"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a className="login-link" href="/Register">Créer un comptet</a>
        <button className="login-button" onClick={handleLogin}>Connexion</button>
        <p className="p">
        <span className="small-text">Instituts Supérieurs des Etudes Technologiques : Iset Tunisie</span>

        </p>

      </div>
    </div>
  );
};

export default LoginForm;
