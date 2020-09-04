import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import HardSkills from './components/HardSkills';

import { Layout, Avatar, Menu, Row, Col, Switch } from 'antd';
import { 
  GithubOutlined, 
  HomeTwoTone,
  ProjectTwoTone,
  RocketTwoTone,
  TrophyTwoTone,
  ThunderboltTwoTone,
  VideoCameraTwoTone,
  ToolTwoTone,
  LinkedinOutlined, 
  InstagramOutlined, 
  TwitterOutlined,
  HeartTwoTone,
  StarTwoTone,
 } from '@ant-design/icons';

const { Header, Footer} = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [theme, setTheme] = useState({theme: 'light'});
  const [mode, setMode] = useState({mode: 'inline'});
  const [home, setHome] = useState({mostrarComponente: true});
  const [projects, setProjects] = useState({mostrarComponente: false});
  const [hardSkills, setHardSkilles] = useState({mostrarComponente: false});

  const handleHome = () => {
    setHome({
        mostrarComponente: true
    });
    setProjects({
      mostrarComponente: false
  });
  setHardSkilles({
    mostrarComponente: false
});
}
const handleProjects = () => {
  setHome({
    mostrarComponente: false
});
  setProjects({
      mostrarComponente: true
  });
  setHardSkilles({
    mostrarComponente: false
});
}

const handleHardSkills = () => {
  setHardSkilles({
    mostrarComponente: true
});
  setProjects({
      mostrarComponente: false
  });
  setHome({
    mostrarComponente: false
});
}
  
  const changeTheme = value => {
    setTheme({
      theme: value ? 'dark' : 'light',
    });
  };

  const changeMode = value => {
    setMode({
      mode: value ? 'vertical' : 'inline',
    });
  };


  return(
    <>
    <Layout className="layout">
    <Header className="header" >
    <Row>
      <Col span={8} className="icone">
          <Switch 
              onChange={changeMode} 
              checkedChildren="Inline" 
              unCheckedChildren="Vertical" 
              style={{width: 70, marginTop: 18 }} 
          />
     
          <a  href="https://www.linkedin.com/in/pablo-r-gomes/" 
              target="blank">
              <LinkedinOutlined />
              
          </a>
          <a  href="https://github.com/pablojr17" 
              target="blank">
              <GithubOutlined />
          </a>
      </Col>

      <Col span={8} className="icone" >
        <Avatar 
            className="avatar" 
            src="https://raw.githubusercontent.com/pablojr17/FlexBox/master/images/avatar.png" />
            <h1>Pablo Gomes</h1>
      </Col>

      <Col span={8} className="icone">
          <a  href="https://www.instagram.com/pablo___gomes/?hl=pt-br" 
              target="blank">
              <InstagramOutlined />
          </a>
          <a  href="https://twitter.com/PabloGomesDev" 
              target="blank">
              <TwitterOutlined  />
          </a>
          <Switch 
              onChange={changeTheme} 
              checkedChildren="Dark" 
              unCheckedChildren="Light" 
              style={{width: 70, marginTop: 18 }} 
          /> 
          
      </Col>
    </Row>
    </Header> 
    </Layout>
    <Row>
      <Col>
      <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={mode.mode}
          theme={theme.theme}
        >
          <Menu.Item onClick={handleHome} key="1" icon={<HomeTwoTone twoToneColor="#4890FF" />}>
            Home
          </Menu.Item>
          <Menu.Item onClick={handleProjects} key="2" icon={<ProjectTwoTone twoToneColor="#4890FF"/>}>
            Projects
          </Menu.Item>
          
          <SubMenu icon={<StarTwoTone twoToneColor="#4890FF" />} title="Skills">
          <Menu.Item onClick={handleHardSkills} key="3" icon={<RocketTwoTone twoToneColor="#4890FF" />}>
            Hard Skills
          </Menu.Item>
          <Menu.Item key="4" icon={<ThunderboltTwoTone twoToneColor="#4890FF"/>}>
            Soft Skills
          </Menu.Item>
            </SubMenu>
         
          <Menu.Item key="5" icon={<TrophyTwoTone twoToneColor="#4890FF" />}>
          Experience
          </Menu.Item>
          <Menu.Item key="6" icon={<HeartTwoTone twoToneColor="#4890FF" />}>
          Passion
          </Menu.Item>
          <Menu.Item key="link" icon={<VideoCameraTwoTone twoToneColor="#4890FF" />}>
            <a href="https://www.youtube.com/channel/UCrtsXqKMFh7CNxmvv1vpiyg?view_as=subscriber" target="_blank" rel="noopener noreferrer">
             Channel
            </a>
          </Menu.Item>
          
          <Menu.Item key="link2" icon={<ToolTwoTone /> }>
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Ant Design
            </a>
          </Menu.Item>
        </Menu>
      </Col>
      <Col flex="auto">
      { home.mostrarComponente && <Home /> }
      { projects.mostrarComponente && <Projects/> }
      { hardSkills.mostrarComponente && <HardSkills/> }
      </Col>
    </Row>
    <Row>

    <Col span={6} pull={18}>
        
        </Col>
        <Col span={18} push={6}>
        
        </Col>
        </Row>
  
    <Footer style={{ textAlign: 'center' }}>Created by Pablo Gomes - Ant Design ©2020</Footer>
  </>
  );
}

export default App;