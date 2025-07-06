    import { Link } from 'react-router-dom';

    const Navbar = () => {
      return (
        <nav className="flex-column space-x-3">
          <Link to="/">My Logo</Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      );
    };

    export default Navbar;