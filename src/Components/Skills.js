import React from 'react';

import {
  SiPython, SiPlotly, SiGit, SiGithub, SiJupyter,
  SiGooglecloud, SiPostgresql, SiAmazonwebservices,
  SiTensorflow, SiStreamlit,
} from 'react-icons/si';

import {
  FaChartBar, FaChartLine, FaTable,
  FaDatabase, FaMicrosoft,
} from 'react-icons/fa';

import { BsBarChartFill, BsGraphUp } from 'react-icons/bs';

const iconMap = {
  Python:      { icon: <SiPython />,            color: '#3776AB' },
  Pandas:      { icon: <FaTable />,              color: '#7A4FBB' },
  NumPy:       { icon: <BsBarChartFill />,       color: '#4DABCF' },
  Matplotlib:  { icon: <BsGraphUp />,            color: '#11557c' },
  Seaborn:     { icon: <FaChartLine />,          color: '#4c72b0' },
  Plotly:      { icon: <SiPlotly />,             color: '#3D4E9E' },
  ScikitLearn: { icon: <FaChartBar />,           color: '#F7931E' },
  TensorFlow:  { icon: <SiTensorflow />,         color: '#FF6F00' },
  NLTK:        { icon: <FaDatabase />,           color: '#3B8E3B' },
  Streamlit:   { icon: <SiStreamlit />,          color: '#FF4B4B' },
  PostgreSQL:  { icon: <SiPostgresql />,         color: '#336791' },
  PowerBI:     { icon: <FaMicrosoft />,          color: '#F2C811' },
  MSExcel:     { icon: <FaMicrosoft />,          color: '#217346' },
  Jupyter:     { icon: <SiJupyter />,            color: '#F37626' },
  Git:         { icon: <SiGit />,                color: '#F05032' },
  GitHub:      { icon: <SiGithub />,             color: '#E7E7E7' },
  AWS:         { icon: <SiAmazonwebservices />,  color: '#FF9900' },
  GCP:         { icon: <SiGooglecloud />,        color: '#4285F4' },
  Azure:       { icon: <FaMicrosoft />,          color: '#0078D4' },
};

const labelMap = {
  ScikitLearn: 'Scikit-Learn',
  MSExcel:     'MS Excel',
  PowerBI:     'Power BI',
};

const Skills = ({ skill }) => {
  const entry = iconMap[skill];
  if (!entry) return null;

  return (
    <div
      className='SkillBox'
      title={skill}
      style={{ '--skill-color': entry.color }}
    >
      <span className='skill-icon' style={{ color: entry.color }}>
        {entry.icon}
      </span>
      <span className='skill-label'>{labelMap[skill] || skill}</span>
    </div>
  );
};

export default Skills;