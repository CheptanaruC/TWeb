import { Layout } from 'antd';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MyHeader from './ComponentsLayout/MyHeader';
import MyContent from './ComponentsLayout/MyContent';
import MyFooter from './ComponentsLayout/MyFooter';
import { MyComponent } from './storage/StoreProvider';
import CustomForm from './ComponentForm/CustomForm';
import UserProfile from './User/UserProfile';
import StoredUserInfo from './User/StoredUserInfo';
import UpdateUserProfile from './User/UpdateUserProfile';

const App: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');

  return (
    <MyComponent>
      <Layout>
        <MyHeader
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        />
        <Routes>
          <Route
            path="/"
            element={<MyContent selectedMenuItem={selectedMenuItem} />}
          />
          <Route
            path="/card/:id"
            element={<MyContent selectedMenuItem={selectedMenuItem} />}
          />
          <Route path="/form" element={<CustomForm />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/storage" element={<StoredUserInfo />} />
          <Route path="/profile" element={<UpdateUserProfile />} />
        </Routes>
        <MyFooter />
      </Layout>
    </MyComponent>
  );
};

export default App;