import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import F1 from '../assets/f1.png'
import F2 from '../assets/f2.png'

import { Layout, Image, Row, Col} from 'antd';

const { Content } = Layout;

const HardSkills = () => {
  return(
      <Content className="content">
        <Row>
          <Col span={12}>
            <h2>Formação</h2>
              <Image
              preview={false}
              width={500}
                style={{marginLeft: 10}}
                src={F1}
                />

          </Col>
          <Col span={12}>
          <h2>Licenças e certificados</h2>
              <Image
              preview={false}
              width={400}
                style={{marginLeft: 50}}
                src={F2}
                />

          </Col>
        </Row>

        </Content>
  );
}

export default HardSkills;