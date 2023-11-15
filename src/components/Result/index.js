import CountUp from "react-countup";
import "./style.scss";

// == Composant
function Result({ value, selectedCurrency }) {
  return (
    <div className="result">
      <CountUp
        className="result__amount"
        end={value}
        duration={0.5}
        decimals={2}
      />
      <p className="result__currency">{selectedCurrency}</p>
    </div>
  );
}

// == Export
export default Result;
