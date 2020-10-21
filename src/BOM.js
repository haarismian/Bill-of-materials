import React from 'react';

//ant design

import { Typography, Layout } from 'antd';
const { Title } = Typography;
const { Header, Content, Footer } = Layout;

let data = require('./mock_bom_data.json');

export default class BOM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // First API call here
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">Content</div>
        </Content>
        <div>
          <Title>Bill of Materials</Title>
          <Title>{data[0].model}</Title>
        </div>
      </Layout>
    );
  }
}
