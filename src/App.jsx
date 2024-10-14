import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Jobs from "./pages/jobs/Jobs";
import Recruiter from "./pages/recruiter/Recruiter";
import User from "./pages/user/User";
import CreateJob from "./pages/createjob/CreateJob";

function App() {
  const isRecruiter = true; // Altere para false para simular um usuário comum

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs isRecruiter={isRecruiter} />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/user" element={<User />} />
          <Route path="/create-job" element={<CreateJob />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
