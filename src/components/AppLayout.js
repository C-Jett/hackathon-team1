import React from 'react';
import { Layout } from 'antd';
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

export default ({ header, footer, children}) => {
  return (
    <Layout>
      <Header>header</Header>
      <Layout>
        <Content>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {children}
          </div>
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
};
