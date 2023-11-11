import PropTypes from "prop-types";
import "./style.scss";

// == Composant
function Currencies({ currencies }) {
  return (
    <div className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <ul className="currencies__list">
        {currencies.map((currency) => (
          <li key={currency.name} className="currencies__list__item">
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
