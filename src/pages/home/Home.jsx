import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="start" id="start">
        <div className="content">
          <h1 className="Technblack">
            <span className="color1">TECH</span>
            <span className="color2">N</span>
            <span className="color3">BLACK</span>
          </h1>
          <h5 className="Values">Construindo um futuro mais equitativo.</h5>
          <a href="#about" target="_blank" rel="noopener noreferrer">
            <button className="bn54">
              <span className="bn54span">Saiba mais</span>
            </button>
          </a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="text">
          <h1 className="aboutH1">Sobre nós</h1>
          <img src="/remember.png" alt="Sobre nós" className="remenber" />
          <p>
            A nossa plataforma de empregabilidade
            <br /> e carreira tem o objetivo de ampliar o <br />
            acesso de talentos negros no Brasil a <br />
            oportunidades na área de tecnologia.
          </p>
        </div>
      </section>

      <section className="novelties" id="novelties">
        <h3 className="text">Mais Detalhes</h3>
        <div className="container center">
          <div className="Activities">
            <h2>Diversidade e Inclusão:</h2>
            <hr />
            <p>
            A TechnBlack une empresas para <br/>acelerar a diversidade, equidade e
            <br />inclusão, incentivando lideranças e <br />talentos negros.
            </p>
          </div>
          <div className="Activities">
            <h2>Oportunidades para Todos:</h2>
            <hr />
            <p>
              Empresas apoiadoras investem em programas de
              conscientização <br />racial e capacitação profissional,<br /> ampliando o
              acesso de pessoas <br />negras ao mercado de tecnologia.
            </p>
          </div>
          <div className="Activities">
            <h2>Suporte para Comunicação:</h2>
            <hr />
            <p>
              Nossa plataforma conecta talentos negros a vagas exclusivas <br/> 
              oferecendo oportunidades reais de desenvolvimento
              profissional e <br />acesso ao mercado de trabalho.
            </p>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
