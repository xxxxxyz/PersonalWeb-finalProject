import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './styles.scss';

import FilmpirePage from '../FilmpirePage/FilmpirePage';

const projectList = [
  {
    id:"1",
    type:"Website",
    projectName:"Filmpire",
  },
  {
    id:"2",
    type:"Website",
    projectName:"Filmpire",
  },
  {
    id:"1",
    type:"Website",
    projectName:"Filmpire",
  },
  {
    id:"1",
    type:"Website",
    projectName:"Filmpire",
  },
  {
    id:"1",
    type:"Website",
    projectName:"Filmpire",
  },

];
  

const ProjectsPage = () => {
  
  return (
    <div className='projects-content'>
      <div className='projects-container'>
        <div className='title-group'>
          <h3 className='projects-title'>Projects</h3>
          <svg  className="back-btn" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.488818 1.30082C0.415478 1.47768 0.375 1.67162 0.375 1.875V53.125C0.375 53.9534 1.04657 54.625 1.875 54.625C2.70343 54.625 3.375 53.9534 3.375 53.125V5.49632L52.0643 54.1857C52.6501 54.7714 53.5999 54.7714 54.1857 54.1857C54.7714 53.5999 54.7714 52.6501 54.1857 52.0643L5.49632 3.375H53.125C53.9534 3.375 54.625 2.70343 54.625 1.875C54.625 1.04657 53.9534 0.375 53.125 0.375H1.875C1.4624 0.375 1.08872 0.541584 0.817526 0.811164C0.815399 0.813278 0.813278 0.815399 0.811164 0.817526C0.668926 0.9606 0.561478 1.12521 0.488818 1.30082Z" fill="#cfcfcf"/>
          </svg>
        </div>
        
        <div className='projects-list'>
            <NavLink className='project-name' to="/filmpire"><span className='title-s'>Website</span><span>Filmpire</span></NavLink>
            <NavLink className='project-name' to="/"><span className='title-s'>Website</span><span>Portfolio</span></NavLink>
            <NavLink className='project-name' to="/"><span className='title-s'>Design</span><span>B & T Online</span></NavLink>
            <NavLink className='project-name' to="/"><span className='title-s'>Design-APP</span><span>Event-host</span></NavLink>
            <NavLink className='project-name' to="/"><span className='title-s'>Brand</span><span>ULA</span></NavLink>
        </div>        
      </div>
    </div>
  )
}

export default ProjectsPage;