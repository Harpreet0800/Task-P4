import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">DEV@Deakin</Link>
      <input
        className="search"
        type="search"
        placeholder="Search..."/>
      <Link to="/">Post</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
