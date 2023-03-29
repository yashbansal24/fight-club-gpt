import React from 'react';
import { QRCode, Space, theme } from 'antd';

const { useToken } = theme;

const App: React.FC = () => {
  const { token } = useToken();
  return (
    <Space>
      <QRCode
        value="https://www.theyashbansal.com/"
        color={token.colorInfoText}
        style={{ marginBottom: 16, backgroundColor: token.colorBgLayout }}
      />
    </Space>
  );
};

export default App;