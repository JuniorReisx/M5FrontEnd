import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Jobs from "./components/jobs/Jobs";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/jobs" element={<Jobs title="Engenheiro de Software" company="TechNBlack" location="São Paulo" description="Trabalhe com as tecnologias mais recentes e impacte a vida de milhões de pessoas!"/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;