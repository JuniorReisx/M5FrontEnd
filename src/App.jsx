import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Jobs from "./components/jobs/Jobs";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import CreateJob from "./components/createJob/CreateJob";

function App() {
  const isRecruiter = true; // Altere para false para simular um usuário comum

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs isRecruiter={isRecruiter} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-job" element={<CreateJob />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;