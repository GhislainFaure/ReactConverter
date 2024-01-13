import PropTypes from "prop-types";
import "./style.scss";

// == Composant
function Currencies({
  currencies,
  onCurrencyClick,
  currencyInputValue,
  onCurrencyInput,
}) {
  return (
    <div className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <input
        type="text"
        className="currencies__input"
        placeholder=" Chercher une devise ... "
        value={currencyInputValue}
        onChange={onCurrencyInput}
      />
      <ul className="currencies__list">
        {currencies
          // je ne garde que les devises dont le nom contient la recherche
          .filter((currency) =>
            currency.name
              .toLowerCase()

              .includes(currencyInputValue.toLowerCase())
          )
          // et je map sur la résultante du filter
          .map((currency) => (
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
  onCurrencyInput: PropTypes.func.isRequired,
  onCurrencyClick: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

// == Export
export default Currencies;
