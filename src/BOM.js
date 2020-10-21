import React from 'react';

//ant design

import { Typography } from 'antd';
const { Title } = Typography;

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
      <div>
        <Title>Bill of Materials</Title>
        <Title>{data}</Title>
      </div>
    );
  }
}
