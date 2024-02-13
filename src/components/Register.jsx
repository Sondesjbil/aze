import React, { useState } from 'react';
import './RegisterForm.css'; // Importez le fichier CSS pour le style

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationKey, setConfirmationKey] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleRegister = () => {
    // Fonction appelée lors de la soumission du formulaire pour traiter l'inscription
    // Vous pouvez ajouter ici la logique de validation et de traitement de l'inscription
    console.log('Nom d\'utilisateur:', username);
    console.log('Mot de passe:', password);
    console.log('Clé d\'inscription:', confirmationKey);
    console.log('Courriel:', email);
    console.log('Prénom:', firstName);
    console.log('Nom de famille:', lastName);
    console.log('Ville:', city);
    console.log('Pays:', country);
  };

  const handleCancel = () => {
    // Fonction appelée lors du clic sur le bouton "Annuler" pour réinitialiser les champs
    setUsername('');
    setPassword('');
    setConfirmationKey('');
    setEmail('');
    setConfirmEmail('');
    setFirstName('');
    setLastName('');
    setCity('');
    setCountry('');
  };

  return (
    <div className="register-container">
      <h2 className="register-heading">Nouveau compte</h2>
      <h6>Have an account?<a href='Login'>Login</a></h6>
      <form>
        <div>
          <label className="register-label">Nom d'utilisateur:</label>
          <input
            className="register-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="register-label">Mot de passe:</label>
          <input
            className="register-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="register-label">Clé d'inscription:</label>
          <input
            className="register-input"
            type="text"
            value={confirmationKey}
            onChange={(e) => setConfirmationKey(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="register-label">Adresse de courriel:</label>
          <input
            className="register-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="register-label">Confirmation de courriel:</label>
          <input
            className="register-input"
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="register-label">Prénom:</label>
          <input
            className="register-input"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="register-label">Nom de famille:</label>
          <input
            className="register-input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="register-label">Ville:</label>
          <input
            className="register-input"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
  <label className="register-label">Pays:</label>
  <select
    className="register-input"
    value={country}
    onChange={(e) => setCountry(e.target.value)}
    required
  >
    <option value="">Sélectionnez votre pays</option>
    <option value="France">France</option>
    <option value="Canada">Canada</option>
    <option value="États-Unis">Tunisie</option>
  </select>
</div>

        <button className="register-button" type="button" onClick={handleRegister}>Créer mon compte</button>
        <button className="cancel-button" type="button" onClick={handleCancel}>Annuler</button>

        <p className="p">
        <span className="small-text">Instituts Supérieurs des Etudes Technologiques : Iset Tunisie</span>

        </p>

      </form>
    </div>
  );
};

export default RegisterForm;
