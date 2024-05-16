import React, { useState } from 'react';
import { getFromLocalStorage } from '../storage/LocalStorage';

interface LoginFormProps {
  switchToRegistration: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ switchToRegistration }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const users = getFromLocalStorage('users');
    const user = users.find(
      (user: any) => user.email === email && user.password === password
    );
    if (user) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid email or password!');
    }
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        className="form-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="form-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="form-actions">
        <p className="paragraph">Don't have an account?</p>
        <button
          type="button"
          className="form-button"
          onClick={switchToRegistration}
        >
          Register
        </button>
      </div>
      <button type="submit" className="form-submit">
        Submit
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default LoginForm;