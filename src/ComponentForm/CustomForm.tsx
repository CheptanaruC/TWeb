import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const CustomForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  return isLoginForm ? (
    <LoginForm switchToRegistration={() => setIsLoginForm(false)} />
  ) : (
    <RegistrationForm switchToLogin={() => setIsLoginForm(true)} />
  );
};

export default CustomForm;