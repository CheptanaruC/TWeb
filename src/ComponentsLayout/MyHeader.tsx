import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const generateRandomCardNumber = () => {
  let cardNumber = '';
  for (let i = 0; i < 16; i++) {
    cardNumber += Math.floor(Math.random() * 10);
    if ((i + 1) % 4 === 0 && i !== 15) {
      cardNumber += ' ';
    }
  }
  return cardNumber;
};

const generateRandomExpirationDate = () => {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const year = String(Math.floor(Math.random() * 5) + 2023).slice(-2);
  return `${month}/${year}`;
};

const generateRandomCVV = () => {
  return String(Math.floor(Math.random() * 900) + 100);
};

const cardholderNames = [
  'John Doe',
  'Jane Smith',
  'Michael Johnson',
  'Emily Davis',
];

export const menuItems = new Array(3).fill(null).map((_, index) => ({
  data: {
    CardNumber: generateRandomCardNumber(),
    ExpirationDate: generateRandomExpirationDate(),
    CardholderName:
      cardholderNames[Math.floor(Math.random() * cardholderNames.length)],
    CVV: generateRandomCVV(),
  },
  key: index + 1,
  label: `Card ${index + 1}`,
}));

interface MyHeaderProps {
  selectedMenuItem: string;
  setSelectedMenuItem: (item: string) => void;
}

export const MyHeader = ({
  selectedMenuItem,
  setSelectedMenuItem,
}: MyHeaderProps) => {
  const handleMenuItemClick = (item: any) => {
    setSelectedMenuItem(item.key);
  };

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        selectedKeys={[selectedMenuItem]}
        onClick={handleMenuItemClick}
        style={{ flex: 1, minWidth: 0 }}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key}>
            <Link to={`/card/${item.key}`}>{item.label}</Link>
          </Menu.Item>
        ))}
        <Menu.Item key="form">
          <Link to="/form">Create Account</Link>
        </Menu.Item>
        <Menu.Item key="user">
          <Link to="/user">User Profile</Link>
        </Menu.Item>
        <Menu.Item key="storage">
          <Link to="/storage">Stored Users</Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to="/profile">Update Profile</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default MyHeader;