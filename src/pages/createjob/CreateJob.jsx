import { useState } from "react";
import axios from "axios";
import "./CreateJob.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const CreateJob = () => {
  const [jobData, setJobData] = useState({
    nome: "",
    cargo: "",
    nivel: "",
    empresa: "",
    quantidade: "",
    salario: "",
    localizacao: "",
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://m5backend-322f.onrender.com/jobs",
        jobData
      );
      console.log("Vaga criada com sucesso:", response.data);
      setJobData({
        nome: "",
        cargo: "",
        nivel: "",
        empresa: "",
        quantidade: "",
        salario: "",
        localizacao: "",
        descricao: "",
      });
    } catch (error) {
      console.error("Erro ao criar a vaga:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container-context">
        <div className="container-create-job">
          <h1>Criar Nova Vaga</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="text"
                name="nome"
                value={jobData.nome}
                onChange={handleChange}
                placeholder="Nome da Vaga"
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="cargo"
                value={jobData.cargo}
                onChange={handleChange}
                placeholder="Cargo"
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="nivel"
                value={jobData.nivel}
                onChange={handleChange}
                placeholder="Nível"
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="empresa"
                value={jobData.empresa}
                onChange={handleChange}
                placeholder="Empresa"
                required
              />
            </div>
            <div className="input-field">
              <input
                type="number"
                name="quantidade"
                value={jobData.quantidade}
                onChange={handleChange}
                placeholder="Quantidade"
                required
              />
            </div>
            <div className="input-field">
              <input
                type="number"
                name="salario"
                value={jobData.salario}
                onChange={handleChange}
                placeholder="Salário"
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="localizacao"
                value={jobData.localizacao}
                onChange={handleChange}
                placeholder="Localização"
                required
              />
            </div>
            <div className="input-field">
              <textarea
                name="descricao"
                value={jobData.descricao}
                onChange={handleChange}
                placeholder="Descrição"
                required
              ></textarea>
            </div>
            <button type="submit">Criar Vaga</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateJob;
