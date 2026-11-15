import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
<div className="footer-column explore">
        <h3>Explore</h3>
        <p><Link to="/">Home</Link></p>
        <p><a href="/#work">Projects</a></p>
        <p><a href="/#articles">Articles</a></p>
        <p><a href="/#tutorials">Tutorials</a></p></div>
     <div className="footer-column support">
        <h3>Support</h3>
        <p><a href="/#contact">Contact</a></p>
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/register">Create an account</Link></p></div>
<div className="footer-column connected">
        <h3>Stay Connected</h3>
        <p>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook /> Facebook: Rasmalai@0800</a></p>
        <p>
          <a href="https://www.instagram.com/harpreet_0800/" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram: harpreet_0800_ </a></p>
  <p>
          <a href="https://t.me/" target="_blank" rel="noreferrer">
            <FaTelegram /> Telegram: Rasmalai@0800</a></p>
      </div>
      <div className="footer-bottom">
        <h3>DEV@Deakin 2022</h3>
        <p><a href="/#privacy">Privacy Policy</a></p>
        <p><a href="/#terms">Terms</a></p>
        <p><a href="/#conduct">Code of Conduct</a></p>
      </div>
    </footer>);}
export default Footer;
