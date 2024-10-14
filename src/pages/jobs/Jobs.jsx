import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Jobs.css';
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const Jobs = ({ isRecruiter }) => {
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

  const deleteJob = async (id) => {
    try {
      await axios.delete(`https://m5backend-322f.onrender.com/jobs/${id}`);
      setJobs(jobs.filter((job) => job.id !== id)); 
    } catch (error) {
      console.error('Erro ao deletar vaga:', error);
    }
  };

  return (
    <>
      <div className="jobs-container">
        <Header />
        <div className="jobs-context">
          <h1 className="jobs-title">Vagas Disponíveis</h1>
          {isRecruiter && (
            <div className="create-job-btn-container">
              <Link to="/create-job">
                <button className="create-job-btn">Cadastrar Nova Vaga</button>
              </Link>
            </div>
          )}
          <div className="container-grid">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h2 className="job-title">{job.nome}</h2>
                    <h3 className="job-company">{job.empresa}</h3>
                    <p className="job-location">{job.localizacao}</p>
                    <p className="job-salary">Salário: R${job.salario}</p>
                    <p className="job-level">Nível: {job.nivel}</p>
                    <p className="job-quantity">Quantidade de vagas: {job.quantidade}</p>
                  </div>
                  <div className="job-body">
                    <p className="job-description">{job.descricao}</p>
                  </div>
                  <div className="job-actions">
                    <button className="job-apply-btn">Se candidate!</button>
                    {isRecruiter && (
                      <button
                        className="job-apply-btn"
                        onClick={() => deleteJob(job.id)}
                      >
                        Deletar
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>Carregando vagas...</p>
            )}
          </div>
        </div>
      </div>
     
     <section className='section-footer'>
     <Footer/>
     </section>
    
      </>
    
  );
};

Jobs.propTypes = {
  isRecruiter: PropTypes.bool.isRequired,
};

export default Jobs;
