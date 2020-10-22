import React from 'react';
import axios from 'axios';

//ant design

import { Typography, Layout, InputNumber, Table } from 'antd';
const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

let data = require('./mock_bom_data.json');

export default class BOM extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: data };
    this.bom_id = 1001;
    this.columns = [
      {
        title: 'Part Number',
        dataIndex: ['fields', 'specific_part'],
        key: 'specific_part',
      },
      {
        title: 'Unit Price',
        dataIndex: ['fields', 'item_unit_cost'],
        key: 'item_unit_cost',
      },
      {
        title: 'Quantity',
        dataIndex: ['fields', 'quantity'],
        key: 'quantity',
      },
    ];
  }

  // Because this is a fake API call that breaks the code, I have commented it out
  // componentDidMount() {
  //   axios
  //     .get(`https://www.mobiusmaterials.com/api/v1/bom/`, this.bom_id)
  //     .then((res) => {
  //       this.setState({ data: data });
  //     });
  // }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Title type={'success'}>Bill of Materials</Title>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Table
            columns={this.columns}
            expandable={{
              expandedRowRender: (record) => (
                <p style={{ margin: 0 }}>{record.description}</p>
              ),
              rowExpandable: (record) => record.name !== 'Not Expandable',
            }}
            dataSource={this.state.data}
          />
        </Content>
      </Layout>
    );
  }
}
