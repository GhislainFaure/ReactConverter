// == Import
import Header from "../Header";
import Currencies from "../Currencies";
import Result from "../Result";
import currenciesList from "../../data/currencies";
import "./style.scss";

// == Composant
function App() {
  return (
    <div className="app">
      <Header baseAmount={1} />
      <Currencies currencies={currenciesList} />
      <Result />
    </div>
  );
}

// == Export
export default App;
