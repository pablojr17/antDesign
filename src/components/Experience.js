import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import E1 from '../assets/e1.png'
import E2 from '../assets/e2.png'

import { Layout, Image, Row, Col} from 'antd';

const { Content } = Layout;

const Experience = () => {
  return(
      <Content className="content">
        <Row>
          <Col span={12}>
              <Image
              preview={false}
              width={700}
                style={{marginLeft: 10}}
                src={E1}
                />

          </Col>
        </Row>

        <Row>
          <Col span={12}>
              <Image
              preview={false}
              width={700}
                style={{marginLeft: 10}}
                src={E2}
                />

          </Col>
        </Row>

        </Content>
  );
}

export default Experience;