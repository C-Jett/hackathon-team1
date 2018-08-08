import React from 'react';
import { Layout, Icon } from 'antd';
import styles from './AppLayout.css';
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

export default ({ header, footer, children}) => {
  return (
    <Layout>
      <Header onClick={() => window.location = '/#/'} className={styles.header}>
        <h1 className={styles.header__h1}></h1>
      </Header>
      <Layout>
        <Content>
          <div style={{ background: '#fff', padding: 24, minHeight: 400 }}>
            {children}
          </div>
        </Content>
      </Layout>
      <Footer>
        <div className={styles.madeWith}>Made with ☕️ by</div>
        <div className={styles.bbva}></div>
        <div className={styles.plus}><Icon type="plus" /></div>
        <div className={styles.uab}></div>
      </Footer>
    </Layout>
  );
};
