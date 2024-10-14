import "./header.css";

function Header() {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src="./iconct.png" alt="logo" />
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
              <a href="/jobs">Vagas</a>
            </li>
            <li>
              <a href="/recruiter">Recrutador</a>
            </li>
            <li>
              <a href="/user">Usuario</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
