import './formstyle.css';
import React from 'react';
import ExtendedUser from '../Component/User';

const user: ExtendedUser = {
  name: 'Cristian Cheptanaru',
  email: 'cristian.cheptanaru@iis.utm.md',
  phone: '+37369341411',
  age: 21,
  gender: 'Male',
};

const UserProfile = () => {
  return (
    <div className="user-info">
      <div>
        <h1>User Profile</h1>
        <p className="user-details">Name: {user.name}</p>
        <p className="user-details">Email: {user.email}</p>
        <p className="user-details">Phone: {user.phone}</p>
        <p className="user-details">Age: {user.age}</p>
        <p className="user-details">Gender: {user.gender}</p>
      </div>
    </div>
  );
};

export default UserProfile;