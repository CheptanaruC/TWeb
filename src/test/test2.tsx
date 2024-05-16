import './data.css';
import React, { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../storage/LocalStorage';

interface User {
  email: string;
  password: string;
}

const StoredUserInfo: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = getFromLocalStorage('user');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <div>
      {user ? (
        <div className="data">
          <p className="p1">User: {user.email}</p>
          <p className="p2">Password: {user.password}</p>
          <br />
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default StoredUserInfo;