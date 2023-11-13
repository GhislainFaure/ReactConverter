import "./style.scss";

// == Composant
function Result({ value, selectedCurrency }) {
  return (
    <div className="result">
      <p className="result__amount">{Math.floor(value * 100) / 100}</p>
      <p className="result__currency">{selectedCurrency}</p>
    </div>
  );
}

// == Export
export default Result;
