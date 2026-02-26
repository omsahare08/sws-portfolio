import React, { useState } from 'react';

const resumes = {
  analyst: {
    label: 'Data Analyst',
    preview: '/Sanchit_Satpaise_9373478347_page-0001.jpg',
    pdf: '/Sanchit_Satpaise_9373478347.pdf',
    download: 'Sanchit_Satpaise_DataAnalyst.pdf',
  },
  science: {
    label: 'Data Science',
    preview: '/Sanchit_Satpaise_DS_9373478347_page-0001.jpg',
    pdf: '/Sanchit_Satpaise_DS_9373478347.pdf',
    download: 'Sanchit_Satpaise_DataScience.pdf',
  },
};

const Resume = () => {
  const [active, setActive] = useState('analyst');
  const current = resumes[active];

  return (
    <div className='ResumePage'>
      <h1 className='resumeHeading'>My <b>Resume</b></h1>

      {/* ── Toggle Tabs ── */}
      <div className='resumeTabs'>
        {Object.entries(resumes).map(([key, val]) => (
          <button
            key={key}
            className={`resumeTab ${active === key ? 'activeTab' : ''}`}
            onClick={() => setActive(key)}
          >
            {val.label}
          </button>
        ))}
      </div>

      {/* ── Resume Image Preview ── */}
      <div className='resumeWrapper'>
        <img
          key={current.preview}
          src={current.preview}
          alt={`${current.label} Resume`}
          className='resumeImg'
        />
      </div>

      {/* ── Download PDF Button ── */}
      <a href={current.pdf} download={current.download}>
        <button className='downloadCV'>
          ⬇ Download {current.label} Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;