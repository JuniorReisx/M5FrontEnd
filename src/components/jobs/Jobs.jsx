import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Jobs.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://m5backend-322f.onrender.com/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Erro ao buscar vagas:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="jobs-container">
      <h1>Vagas Disponíveis</h1>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <h2 className="job-title">{job.nome}</h2>
              <h3 className="job-company">{job.empresa}</h3>
              <p className="job-location">{job.localizacao}</p>
            </div>
            <div className="job-body">
              <p className="job-description">{job.descricao}</p>
            </div>
            <button className="job-apply-btn">Se candidate!</button>
          </div>
        ))
      ) : (
        <p>Carregando vagas...</p>
      )}
    </div>
  );
};

export default Jobs;