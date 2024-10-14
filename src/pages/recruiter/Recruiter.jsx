import { useState } from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import axios from "axios";
import "./Recruiter.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const Recruiter = () => {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    contato: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://m5backend-322f.onrender.com/recruiters",
        formData
      );
      console.log("Cadastro bem-sucedido:", response.data);
      // Res
      setFormData({
        nome: "",
        empresa: "",
        contato: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <main>
      <Header />

      <section className="section-login">
        <div className="container-login">
          <form onSubmit={handleSubmit}>
            <h1>Cadastro Recrutador</h1>
            <div className="input-field">
              <input
                type="text"
                name="nome" 
                placeholder="Nome"
                required
                value={formData.nome}
                onChange={handleChange}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                required
                value={formData.empresa}
                onChange={handleChange}
              />
              <MdFactory className="icon" />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="contato" 
                placeholder="Contato"
                required
                value={formData.contato}
                onChange={handleChange}
              />
              <FaPhone className="icon" />
            </div>
            <div className="container-button">
              <button className="btn-login" type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Recruiter;
