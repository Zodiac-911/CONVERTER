import "./style-main.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="Converter" />
        </Link>
      </div>
    </>
  );
}
export default Header;
