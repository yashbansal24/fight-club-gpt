import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Typography } from 'antd';
import { GiMountaintop, GiBoxingRing } from 'react-icons/gi';
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: <GiBoxingRing style={{color: "white"}}/>,
  style: { height: '30px', color: "white" },
  label: `Club ${index + 1}`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          background: 'green',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{ margin: "30px 0", color: 'white', display: "flex", justifyContent: "center" }}>
          <GiMountaintop style={{color: "white"}} size={'5em'}/>
        </div>
        <Title style={{ margin: "10px 0", color: 'white', display: "flex", justifyContent: "center" }} level={4}>Fight Club GPT</Title>
        <Menu theme="dark" style={{ background: 'green'}} mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
            <p>The quick brown fox jumps over lazy little dog</p>
            {
              // indicates very long content
              Array.from({ length: 10 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 10 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Yash Bansal ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default App;