import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://m5backend-322f.onrender.com/login', {
        username,
        password
      });
      console.log("Login bem-sucedido:", response.data);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="container-login">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <button type="submit">Login</button>
        <div className="signup-link">
          <p>
            Não tem uma conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;