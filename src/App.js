import React, {useState, useEffect} from 'react';
import api from './services/api';

import './App.css';
// import backGroundImage from './assets/lobo.jpeg';

import Header from './components/Header';

function App(){
  // const projects = ['Desenvolvimento de app', 'Front-end web'];
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response =>{
      setProjects(response.data);
    });
  },[]);

  async function handleAppProject(){
    // projects.push(`Novo Projeto ${Date.now()}`);
    // setProjects([...projects,`Novo Projeto ${Date.now()}`]);
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`, 
      owner:'Leylanne'
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects"/>
         
         {/* <img width={300} src={backGroundImage}/> */}

      <ul>
        {projects.map(project =><li key={project.id}>{project.title} {project.owner}</li>)}
      </ul>
      <button type="button" onClick={handleAppProject}>Adicionar projeto</button> 
    </>
  
  );
}

export default App;