import React from 'react';
import './Jobs.css';

const Job = ({ title, company, location, description }) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <h2 className="job-title">{title}</h2>
        <h3 className="job-company">{company}</h3>
        <p className="job-location">{location}</p>
      </div>
      <div className="job-body">
        <p className="job-description">{description}</p>
      </div>
      <button className="job-apply-btn">Se candidate!</button>
    </div>
  );
};

export default Job;