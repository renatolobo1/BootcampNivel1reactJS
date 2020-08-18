import React, {useState} from 'react';

import Header from './components/Header';

function App(){
  // const projects = ['Desenvolvimento de app', 'Front-end web'];
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAppProject(){
    // projects.push(`Novo Projeto ${Date.now()}`);
    setProjects([...projects,`Novo Projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects"/>
         
      <ul>
        {projects.map(project =><li key={project}>{project}</li>)}
      </ul>
      <button type="button" onClick={handleAppProject}>Adicionar projeto</button> 
    </>
  
  );
}

export default App;