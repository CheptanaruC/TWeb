import React, { useState } from 'react';
import './form.css';
import { getFromLocalStorage, saveToLocalStorage } from '../storage/LocalStorage';

interface RegistrationFormProps {
  switchToLogin: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert('All fields are required!');
      return;
    }
    if (password !== confirmPassword) {
      alert('Password and confirm password do not match!');
      return;
    }
    const users = getFromLocalStorage('users') || [];
    const userExists = users.some((user: any) => user.email === email);
    if (userExists) {
      alert('User already exists!');
      return;
    }
    const newUser = { email, password };
    users.push(newUser);
    saveToLocalStorage('users', users);
    alert('Registration successful!');
    switchToLogin();
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <h1>Create a New Account</h1>
      <input
        type="email"
        className="form-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="form-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        className="form-input"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <div className="form-actions">
        <p className="paragraph">Already have an account?</p>
        <button type="button" className="form-button" onClick={switchToLogin}>
          Login
        </button>
      </div>
      <button type="submit" className="form-submit">
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;