import PropTypes from "prop-types";
import "./style.scss";

// == Composant
function Currencies({ currencies, onCurrencyClick }) {
  return (
    <div className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <input
        type="text"
        className="currencies__input"
        placeholder="Chercher une devise"
      />
      <ul className="currencies__list">
        {currencies.map((currency) => (
          <li
            key={currency.name}
            className="currencies__list__item"
            onClick={() => onCurrencyClick(currency.name)}
          >
            {currency.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

// == Export
export default Currencies;
