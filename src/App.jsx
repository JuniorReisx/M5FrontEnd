import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import About from './About';
import JobCards from './JobCards';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/vagas" element={<JobCards />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;