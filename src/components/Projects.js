import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import P1 from '../assets/p1.png'
import P2 from '../assets/p2.png'
import P3 from '../assets/p3.png'
import P4 from '../assets/p4.png'
import P5 from '../assets/p5.png'
import { Layout, Row, Col, Image, Button} from 'antd';

const { Content } = Layout;

const Projects = () => {
  return(
      <Content>
          <h2>Projects</h2>

      <Row style={{textAlign: 'center'}} >
        <Col span={12} >
          <Image
          preview={false}
            style={{marginLeft: 20}}
            width={250}
            src={P1}
            />
        </Col>
      <Col span={12}>
      <Image
          preview={false}
            width={250}
            src={P2}
            />
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} >
      <Col span={12} >
        <Button 
            style={{width: 50, borderRadius: 25}} 
            type="primary">
              <a href="https://pablogomes.netlify.app/" 
                 target="_blank">Ver</a>
        </Button>
      </Col>
      <Col span={12}>
      <Button 
            style={{width: 50, borderRadius: 25}} 
            type="primary">
              <a href="https://git-hub-explorer.netlify.app/" 
                 target="_blank">Ver</a>
        </Button>
      </Col>
    </Row>


    <Row style={{textAlign: 'center', marginTop: 40}} >
      <Col span={8}>
      <Image
          preview={false}
            style={{marginLeft: 20}}
            width={250}
            src={P3}
            />
      </Col>
      <Col span={8}>
      <Image
          preview={false}
            style={{marginLeft: 20}}
            width={250}
            src={P4}
            />
      </Col>
      <Col span={8}>
      <Image
          preview={false}
            style={{marginLeft: 20}}
            width={250}
            src={P5}
            />
      </Col>
    </Row>
    <Row style={{textAlign: 'center', marginBottom: 40}} >
      <Col span={8}>
      <Button 
            style={{width: 50, borderRadius: 25}} 
            type="primary">
              <a href="https://doe-doe.netlify.app/" 
                 target="_blank">Ver</a>
        </Button>
      </Col>
      <Col span={8}>
      <Button 
            style={{width: 50, borderRadius: 25}} 
            type="primary">
              <a href="https://covid19dio.netlify.app/" 
                 target="_blank">Ver</a>
        </Button>
      </Col>
      <Col span={8}>
      <Button 
            style={{width: 50, borderRadius: 25}} 
            type="primary">
              <a href="https://mata-corona.netlify.app/" 
                 target="_blank">Ver</a>
        </Button>
      </Col>
    </Row>
        </Content>
            
          
  );
}

export default Projects;