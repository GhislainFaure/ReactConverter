import PropTypes from "prop-types";
import "./style.scss";

// == Composant
function Header({ baseAmount, onChangeInput }) {
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <h3>Montant en euro(s)</h3>
      <input
        type="number"
        className="header__input"
        placeholder="Montant en euro"
        onChange={onChangeInput}
        value={baseAmount}
      />
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

// == Export
export default Header;
