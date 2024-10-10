import './App.css';
import { useState } from 'react';

const CadastroEstilizado = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log({ nome, email, senha });
  };

  return (
    <div className="App">
      <div>
      <h1></h1>
      </div>
      <div className="main">
        <div className="center">
          <div className="menu">
            <form onSubmit={handleSubmit}>
              <div className="item_menu">
                <input 
                  type="text" 
                  placeholder="Nome Completo" 
                  value={nome} 
                  onChange={(e) => setNome(e.target.value)} 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                <input 
                  type="password" 
                  placeholder="Senha" 
                  value={senha} 
                  onChange={(e) => setSenha(e.target.value)} 
                  required 
                />
                <input 
                  type="password" 
                  placeholder="Confirmar Senha" 
                  value={confirmarSenha} 
                  onChange={(e) => setConfirmarSenha(e.target.value)} 
                  required 
                />
                <button type="submit">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <p>© 2024</p>
      </footer>
    </div>
  );
};

export default CadastroEstilizado;
