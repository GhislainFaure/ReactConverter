import PropTypes from "prop-types";
import "./style.scss";

// == Composant
function Header({ baseAmount }) {
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <p className="header__base-amount">{baseAmount} euro</p>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

// == Export
export default Header;
