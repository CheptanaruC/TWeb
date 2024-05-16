import { Layout } from 'antd';

const { Footer } = Layout;

const MyFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Custom Design ©{new Date().getFullYear()} Created by Company
    </Footer>
  );
};

export default MyFooter;