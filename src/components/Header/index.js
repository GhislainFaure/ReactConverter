import PropTypes from "prop-types";
import "./style.scss";

// == Composant
function Header({ baseAmount }) {
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <input
        type="number"
        className="header__input"
        placeholder="Montant en euro"
        value={baseAmount}
      />
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

// == Export
export default Header;
