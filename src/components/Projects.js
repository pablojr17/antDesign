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
  
    
    <Content className="content">
    <h2>Projects</h2>
    <Row>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column'}} span={12} >
          <Image
          preview={false}
            style={{marginLeft: 50}}
            width={250}
            src={P1}
            />

        <Button 
            style={{width: 50, borderRadius: 25, marginLeft: 50, marginTop: 10}} 
            type="primary">
              <a href="https://pablogomes.netlify.app/" 
                 target="_blank"
                 rel="noopener noreferrer">Ver</a>
        </Button>
        </Col>

      <Col style={{ display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column'}} span={12} >
      <Image
          preview={false}
            width={250}
            src={P2}
            />
            <Button 
            style={{width: 50, borderRadius: 25, marginLeft: 50, marginTop: 10}} 
            type="primary">
              <a href="https://git-hub-explorer.netlify.app/" 
                 target="_blank"
                 rel="noopener noreferrer"
                 >Ver</a>
        </Button>
      </Col>
      </Row>
   
    <Row style={{marginTop: 40, textAlign: "center"}} >
    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column'}} span={8} >

      <Image
          preview={false}
            style={{marginLeft: 50}}
            width={250}
            height={250}

            src={P3}
            />
        <Button 
            style={{width: 50, borderRadius: 25, marginLeft: 50, marginBottom: 20}} 
            type="primary">
              <a href="https://doe-doe.netlify.app/" 
                 target="_blank"
                 rel="noopener noreferrer">Ver</a>
        </Button>

      </Col>
      
      <Col style={{ display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column'}} span={8} >
      <Image
          preview={false}
            style={{marginLeft: 50}}
            width={250}
            height={250}
            src={P4}
            />
 <Button 
            style={{width: 50, borderRadius: 25, marginLeft: 50, marginBottom: 20}} 
            type="primary">
              <a href="https://covid19dio.netlify.app/" 
                 target="_blank"
                 rel="noopener noreferrer">Ver</a>
        </Button>
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column'}} span={8} >

      <Image
          preview={false}
            style={{marginLeft: 50}}
            width={250}
            height={250}
            src={P5}
            />

        <Button 
            style={{width: 50, borderRadius: 25, marginLeft: 50, marginBottom: 20}} 
            type="primary">
              <a href="https://mata-corona.netlify.app/" 
                 target="_blank" 
                 rel="noopener noreferrer">Ver</a>
        </Button>
      </Col>
    </Row>
        </Content>
      
          
  );
}

export default Projects;