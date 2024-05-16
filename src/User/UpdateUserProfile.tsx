import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import "./change.css"
import { getFromLocalStorage, saveToLocalStorage } from '../storage/LocalStorage';

const UpdateUserProfile: React.FC = observer(() => {
  const [targetEmail, setTargetEmail] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [deleteEmail, setDeleteEmail] = useState('');

  const handleUpdate = () => {
    const users = getFromLocalStorage('users') || [];
    const targetIndex = users.findIndex((user: any) => user.email === targetEmail);
    if (targetIndex !== -1) {
      const updatedUser = { ...users[targetIndex] };
      if (email) updatedUser.email = email;
      if (password) updatedUser.password = password;
      users[targetIndex] = updatedUser;
      saveToLocalStorage('users', users);
      alert('User updated successfully!');
    } else {
      alert('User not found!');
    }
  };

  const handleDelete = () => {
    const users = getFromLocalStorage('users') || [];
    const updatedUsers = users.filter((user: any) => user.email !== deleteEmail);
    saveToLocalStorage('users', updatedUsers);
    setDeleteEmail('');
    alert('User deleted successfully!');
  };

  return (
    <div className="user-profile">
      <h1>Update User Profile</h1>
      <input
        type="email"
        className="input-field"
        value={targetEmail}
        onChange={(e) => setTargetEmail(e.target.value)}
        placeholder="Enter email to update"
      />
      <input
        type="email"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter new email"
      />
      <input
        type="password"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter new password"
      />
      <button className="update-button" onClick={handleUpdate}>
        Update User
      </button>
      <h1>Delete User</h1>
      <input
        type="email"
        className="input-field"
        value={deleteEmail}
        onChange={(e) => setDeleteEmail(e.target.value)}
        placeholder="Enter email to delete"
      />
      <button className="update-button" onClick={handleDelete}>
        Delete User
      </button>
    </div>
  );
});

export default UpdateUserProfile;