import React, { useState, useEffect, useRef } from 'react';
import ProjectBox from './ProjectBox';

// ── Project images ─────────────────────────────────────────────
import CustomerBehaviourImg from '../images/customer_behaviour.jpeg';
import IplImg               from '../images/ipl.jpeg';
import SalesImg             from '../images/sales.jpeg';
import SmsImg               from '../images/sms.jpeg';
import TossImg              from '../images/toss.jpeg';
import MovieImg             from '../images/movie.jpeg';
import BorewellImg          from '../images/borewell.jpeg';
import HouseImg             from '../images/house.jpeg';
import CustomerChurnImg     from '../images/customer_churn.jpeg';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Data Analyst');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = ['Data Analyst', 'Data Science'];

  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, []);

  // ── Data Analyst Projects ──────────────────────────────────────
  const dataAnalystProjects = [
    {
      name: 'Customer Shopping Behaviour',
      github: 'https://github.com/sanchitsatpaise/customer_shopping_analysis',
      demo: 'https://github.com/sanchitsatpaise/customer_shopping_analysis',
      desc: 'Complete end-to-end Data Analysis of Customer Shopping Trends from Retail Data using SQL, Python and Power BI with interactive dashboards.',
      tags: ['SQL', 'Python', 'Power BI'],
      image: CustomerBehaviourImg,
    },
    {
      name: 'IPL 2025 Performance Dashboard',
      github: 'https://github.com/sanchitsatpaise/IPL_2025_Dashboard',
      demo: 'https://github.com/sanchitsatpaise/IPL_2025_Dashboard',
      desc: 'Interactive Power BI dashboard providing deep-dive analytics into the IPL 2025 season — team standings and individual performances.',
      tags: ['Power BI', 'Data Viz'],
      image: IplImg,
    },
    {
      name: 'Online Book Store Database',
      github: 'https://github.com/sanchitsatpaise/PostgreSQL_Assignment',
      demo: 'https://github.com/sanchitsatpaise/PostgreSQL_Assignment',
      desc: 'Fully normalized relational database for books, customers and orders with 20+ analytical SQL queries for genre-wise sales and revenue insights.',
      tags: ['PostgreSQL', 'SQL'],
      // no image — placeholder will show
    },
    {
      name: 'Multi-Region Sales Dashboard',
      github: 'https://github.com/sanchitsatpaise/excel_work',
      demo: 'https://github.com/sanchitsatpaise/excel_work',
      desc: 'End-to-end Excel-based Sales Analytics Dashboard tracking multi-region retail performance with dynamic KPIs and interactive visualizations.',
      tags: ['Excel', 'Analytics'],
      image: SalesImg,
    },
    {
      name: 'Ride Booking EDA',
      github: 'https://github.com/sanchitsatpaise/EDA_project',
      demo: 'https://github.com/sanchitsatpaise/EDA_project',
      desc: 'Comprehensive Exploratory Data Analysis of 10,000 ride bookings across major Indian cities uncovering demand patterns and key insights.',
      tags: ['Python', 'EDA', 'Pandas'],
      // no image — placeholder will show
    },
  ];

  // ── Data Science Projects ──────────────────────────────────────
  const dataScienceProjects = [
    {
      name: 'SMS Spam Detector',
      github: 'https://github.com/sanchitsatpaise/SMS_spam_detector',
      demo: 'https://github.com/sanchitsatpaise/SMS_spam_detector',
      desc: 'NLP-based text classification system that identifies messages as Spam or Ham using Multinomial Naive Bayes for accurate message classification.',
      tags: ['NLP', 'Python', 'Scikit-Learn'],
      image: SmsImg,
    },
    {
      name: 'IPL Toss Outcome Predictor',
      github: 'https://github.com/sanchitsatpaise/ipl_toss_predictor',
      demo: 'https://github.com/sanchitsatpaise/ipl_toss_predictor',
      desc: 'End-to-end IPL Toss Prediction app using Random Forest on historical IPL data (2008–2025) with venue analysis and confidence scoring via Streamlit.',
      tags: ['ML', 'Random Forest', 'Streamlit'],
      image: TossImg,
    },
    {
      name: 'Movie Recommendation Engine',
      github: 'https://github.com/sanchitsatpaise/movie_recommendation',
      demo: 'https://github.com/sanchitsatpaise/movie_recommendation',
      desc: 'Content-based filtering system using cosine similarity on movie metadata to recommend similar movies. Deployed on Streamlit with no external API dependency.',
      tags: ['Python', 'Cosine Similarity', 'Streamlit'],
      image: MovieImg,
    },
    {
      name: 'Borewell Success Predictor',
      github: 'https://github.com/sanchitsatpaise/borewell_pred',
      demo: 'https://github.com/sanchitsatpaise/borewell_pred',
      desc: 'ML-powered web app predicting borewell water depth, success probability and soil suitability using village-level data for data-driven drilling decisions.',
      tags: ['ML', 'Python', 'Streamlit'],
      image: BorewellImg,
    },
    {
      name: 'House Price Predictor',
      github: 'https://github.com/sanchitsatpaise/House_price_prediction',
      demo: 'https://github.com/sanchitsatpaise/House_price_prediction',
      desc: 'Streamlit app predicting house prices using ML. Users input bedrooms, bathrooms, living area, condition and nearby schools for instant price estimates.',
      tags: ['ML', 'Regression', 'Streamlit'],
      image: HouseImg,
    },
    {
      name: 'Customer Churn Predictor',
      github: 'https://github.com/sanchitsatpaise/Customer_churn_pred',
      demo: 'https://github.com/sanchitsatpaise/Customer_churn_pred',
      desc: 'Churn prediction model using demographic, account and service usage data to identify at-risk customers and enable proactive retention strategies.',
      tags: ['ML', 'Classification', 'Python'],
      image: CustomerChurnImg,
    },
  ];

  const projectsToShow =
    activeCategory === 'Data Analyst' ? dataAnalystProjects : dataScienceProjects;

  return (
    <section className="projects-section">

      {/* ── Header ── */}
      <div className="projects-header">
        <h1 className="projectHeading">My <b>Projects</b></h1>

        <div className="projects-controls">
          <div className="dropdown-wrapper" ref={dropdownRef}>
            <button
              className="dropdown-toggle"
              onClick={() => setDropdownOpen(o => !o)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              {activeCategory}
              <span className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}>▾</span>
            </button>

            {dropdownOpen && (
              <ul className="dropdown-menu" role="listbox">
                {categories.map(cat => (
                  <li
                    key={cat}
                    role="option"
                    aria-selected={activeCategory === cat}
                    className={`dropdown-item ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => {
                      setActiveCategory(cat);
                      setDropdownOpen(false);
                    }}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* ── Category label ── */}
      <h2 className="category-label">{activeCategory} Projects</h2>

      {/* ── Grid ── */}
      <div className="project-grid">
        {projectsToShow.map(proj => (
          <ProjectBox key={proj.name} project={proj} />
        ))}
      </div>

    </section>
  );
};

export default Projects;