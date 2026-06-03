import { logo_URL } from "../utils/mockdata";
const Header = () => {
  return (
    <div className="logo-container">
      <div className="logo-container">
        <img
          className="logo"
          src={logo_URL}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;