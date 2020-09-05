import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';

import { Layout} from 'antd';

const { Content } = Layout;

const SoftSkills = () => {
  return(
      <Content className="content">
        <h2>Habilidades comportamentais</h2>
          <li>Capacidade de engajar as pessoas</li>
          <li>Motivado</li>
          <li>Comunicativo</li>
          <li>Empatico</li>
          <li>Equilíbrado</li>
          <li>Resiliente</li>
          <li>Bem humorado</li>
          <li>Autocrítico</li>
          <li>Determinado</li>
        </Content>
  );
}

export default SoftSkills;