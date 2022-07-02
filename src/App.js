import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {
  
  const times =  [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Deisgn',
    'Mobile',
    'Inovação e Gestão'
  ];
  
  const [colaboradores, setColaboradores] = useState('');
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Form times={times} aoColaboradorCadastrado={colaborador  => aoNovoColaboradorAdicionado(colaborador)} />
    </div>
  );
}

export default App;
