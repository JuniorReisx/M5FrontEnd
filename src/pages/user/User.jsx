import { useState } from "react";
import axios from "axios";
import "./User.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const User = () => {
  const [formData, setFormData] = useState({
    nome: "",
    formacao: "",
    endereco: "",
    pretensaoSalarial: "",
    contato: "",
    dataDeNascimento: "",
    email: "",
    password: "",
    userType: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://m5backend-322f.onrender.com/users",
        {
          nome: formData.nome,
          formacao: formData.formacao,
          endereco: formData.endereco,
          pretensaoSalarial: formData.pretensaoSalarial,
          contato: formData.contato,
          dataDeNascimento: formData.dataDeNascimento,
          tipo: formData.userType,
        }
      );
      console.log("Cadastro realizado com sucesso:", response.data);
      setFormData({
        nome: "",
        formacao: "",
        endereco: "",
        pretensaoSalarial: "",
        contato: "",
        dataDeNascimento: "",
        userType: "user",
      });
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="register-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Cadastro Usuário</h2>
            <div className="form-group">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Insira seu nome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formacao">Formação</label>
              <input
                type="text"
                name="formacao"
                value={formData.formacao}
                onChange={handleChange}
                required
                placeholder="Insira sua formação"
              />
            </div>
            <div className="form-group">
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                required
                placeholder="Insira seu endereço"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pretensaoSalarial">Pretensão Salarial</label>
              <input
                type="number"
                name="pretensaoSalarial"
                value={formData.pretensaoSalarial}
                onChange={handleChange}
                required
                placeholder="Insira sua pretensão salarial"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contato">Contato</label>
              <input
                type="text"
                name="contato"
                value={formData.contato}
                onChange={handleChange}
                required
                placeholder="Insira seu contato"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dataDeNascimento">Data de Nascimento</label>
              <input
                type="date"
                name="dataDeNascimento"
                value={formData.dataDeNascimento}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="register-btn">
              Cadastrar
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default User;
