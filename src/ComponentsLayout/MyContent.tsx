import { Breadcrumb, theme } from 'antd';
import { Layout } from 'antd';
import React from 'react';
import { menuItems } from './MyHeader';
import CustomForm from '../ComponentForm/CustomForm';
import UserProfile from '../User/UserProfile';

const { Content } = Layout;

interface MyContentProps {
  selectedMenuItem: string;
}

const MyContent = ({ selectedMenuItem }: MyContentProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const selectedCard = menuItems.find(
    (item) => item.key.toString() === selectedMenuItem
  );

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'profile':
        const UpdateUserProfile = require('../User/UpdateUserProfile').default;
        return <UpdateUserProfile />;
      case 'storage':
        const StoredUserInfo = require('../User/StoredUserInfo').default;
        return <StoredUserInfo />;
      case 'user':
        return <UserProfile />;
      case 'form':
        return <CustomForm />;
      default:
        return (
          <>
            <h2>Card Number: {selectedCard?.data.CardNumber}</h2>
            <p>Expiration Date: {selectedCard?.data.ExpirationDate}</p>
            <p>Cardholder Name: {selectedCard?.data.CardholderName}</p>
            <p>CVV: {selectedCard?.data.CVV}</p>
          </>
        );
    }
  };

  return (
    <Content style={{ padding: '0 48px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>info</Breadcrumb.Item>
        <Breadcrumb.Item>site</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        {renderContent()}
      </div>
    </Content>
  );
};

export default MyContent;