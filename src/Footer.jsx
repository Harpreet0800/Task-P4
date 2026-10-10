
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>DEV@Deakin</h3>
      </div>
      <div>
        <h3>Quick Links:</h3>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/register">Sign Up</Link></p>
      </div>
      <div>
        <h3>Support</h3>
        <p>Email: support@xyz.edu.in</p>
      </div>
      <p className="copyright">
        © 2026 DEV@Deakin. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;
