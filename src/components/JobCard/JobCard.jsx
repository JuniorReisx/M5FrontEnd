const JobCards = () => {
    const vagas = [
      {
        id: 1,
        titulo: "Desenvolvedor Front-End",
        descricao: "Desenvolver interfaces web incríveis usando React.",
        local: "São Paulo, SP",
      },
      {
        id: 2,
        titulo: "Engenheiro de Software",
        descricao: "Atuar no desenvolvimento de sistemas escaláveis.",
        local: "Remoto",
      },
      {
        id: 3,
        titulo: "Product Manager",
        descricao: "Gerenciar o ciclo de vida de produtos digitais.",
        local: "Rio de Janeiro, RJ",
      },
    ];
  
    return (
      <div className="container">
        <h1>Vagas Disponíveis</h1>
        <div className="cards">
          {vagas.map((vaga) => (
            <div key={vaga.id} className="card">
              <h2>{vaga.titulo}</h2>
              <p>{vaga.descricao}</p>
              <p><strong>Local:</strong> {vaga.local}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default JobCards;  