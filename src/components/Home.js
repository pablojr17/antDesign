import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import { Layout, Row, Col, Divider, Image} from 'antd';

const { Content } = Layout;

const Home = () => {
  return(
      <Content className="content">
        <h2>Quem sou eu</h2>
        <Divider  orientation="left"><h3>Pablo José Rocha Gomes</h3></Divider>
        <Row>
      <Col style={{maxWidth: 350}} flex={2}>
      <Image
          preview={false}

          style={{marginLeft: 20}}
          width={300}
          src="https://avatars2.githubusercontent.com/u/47211806?s=460&u=38f26b994d8a53b35eeb226ed16893d1a9b659f2&v=4"
            />
      </Col>
      <Col style={{maxWidth: 700, alignItems: 'start'}} flex={3}>
        <p> - Web Developer</p>
        <p>Tenho 26 anos, sou pai, filho e marido.</p>
        <p>Estudante nato, atualmente com foco em NodeJS, ReactJS e React Native. Constantemente expandindo meu conhecimento e tentando acompanhar este mercado cheio de mudança.</p>
        </Col>
    </Row>
      

        
        
    </Content>
  );
}

export default Home;