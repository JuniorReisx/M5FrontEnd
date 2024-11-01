import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src="./icon.png" alt="logo" />
        <div className="navbar-links">
          <div className="dot" style={{ left: "26.225px" }}></div>
          <ul>
            <li>
              <a href="/#start">Início</a>
            </li>
            <li>
              <a href="/#about">Sobre</a>
 
            </li>
            <li>
              <a href="/#novelties">Detalhes</a>
            </li>
            <li>
              <Link to="/jobs">Vagas</Link>
            </li>
            <li>
              <Link to="/recruiter">Recrutador</Link>
            </li>
            <li>
              <Link to="/user">Usuário</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
