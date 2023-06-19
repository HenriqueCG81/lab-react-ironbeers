import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <h1>Home</h1>
      </NavLink>
    </header>
  );
};

export default Header;
