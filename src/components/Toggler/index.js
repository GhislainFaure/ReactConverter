import PropTypes from "prop-types";
import "./style.scss";

function Toggler({ onButtonClick, isOpen }) {
  return (
    <button
      type="button"
      className={isOpen ? "toggler toggler--open" : "toggler"}
      onClick={onButtonClick}
    >
      =
    </button>
  );
}

Toggler.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Toggler;
