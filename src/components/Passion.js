import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import G0 from '../assets/g0.png'
import G1 from '../assets/g1.jpg'
import G2 from '../assets/g2.png'
import G3 from '../assets/g3.png'
import G4 from '../assets/g4.png'
import G5 from '../assets/g5.png'
import G6 from '../assets/g6.png'
import G7 from '../assets/g7.png'


import { Layout, Image, Row, Col} from 'antd';

const { Content } = Layout;

const Passion = () => {
  return(
      <Content className="content">
        <Row justify="space-around">
          <Col span={4}>
              <Image
              width={250}
                style={{marginLeft: 10}}
                src={G0}
                />

          </Col>
          <Col span={4}>
              <Image
              width={250}
                style={{marginLeft: 10}}
                src={G1}
                />

          </Col>
          <Col span={4}>
              <Image
              width={250}
                style={{marginLeft: 10}}
                src={G2}
                />

          </Col>
          <Col span={4}>
              <Image
              width={250}
                style={{marginLeft: 10}}
                src={G3}
                />

          </Col>
        </Row>

        <Row justify="space-around">
          <Col span={4}>
              <Image
              width={250}
                style={{marginLeft: 10}}
                src={G4}
                />

          </Col>
          <Col span={4}>
              <Image
              width={250}
                style={{marginLeft: 10}}
                src={G5}
                />

          </Col>
          <Col span={4}>
              <Image
              width={250}
                style={{marginLeft: 10}}
                src={G6}
                />

          </Col>
          <Col span={4}>
              <Image
              width={250}
                style={{marginLeft: 10}}
                src={G7}
                />

          </Col>
        </Row>
        </Content>
  );
}

export default Passion;