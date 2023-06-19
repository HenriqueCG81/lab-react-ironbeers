import { NavLink } from 'react-router-dom';
import foto from '../assets/foto.png';
const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={foto} alt="" width={'50px'} />
      </NavLink>
    </header>
  );
};

export default Header;
