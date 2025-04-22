import "./style-main.css";
import calculator from "../assets/calculator.png";
import currency from "../assets/money.png";
import measurement from "../assets/measurement.png";
import temp from "../assets/hot.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <button>
            <img src={calculator} alt="calculator" />
          </button>
        </Link>
        <Link to="/currency">
          <button>
            <img src={currency} alt="currency" />
          </button>
        </Link>
        <Link to="/uniteConvert">
          <button>
            <img src={measurement} alt="measurement" />
          </button>
        </Link>
        <Link to="/tempConvert">
          <button>
            <img src={temp} alt="temp" />
          </button>
        </Link>
      </div>
    </>
  );
}
export default Sidebar;
