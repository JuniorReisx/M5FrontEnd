import './footer.css';

function Footer() {
  return (
    <footer className="footer">
         <div className="footer-bottom">
        <p className='paragrafo'> <strong>
        &copy; {new Date().getFullYear()} Criado com Amor
          </strong></p>
      </div>
    </footer>
  );
}

export default Footer;
