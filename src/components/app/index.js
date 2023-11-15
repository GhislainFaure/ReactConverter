// == Import
import React from "react";
import Header from "../Header";
import Toggler from "../Toggler";
import Currencies from "../Currencies";
import Result from "../Result";
import currenciesList from "../../data/currencies";
import "./style.scss";

// == Composant

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isListOpen: true,
      baseAmount: 1,
      selectedCurrency: "United States Dollar",
    };
    this.handleButtonclick = this.handleButtonclick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
  }

  handleButtonclick() {
    this.setState({
      isListOpen: !this.state.isListOpen,
    });
  }
  // une fonction qui calculera la valeur convertie et la renverra
  makeConversion() {
    // on récupere la devise selectionnée
    const foundCurrency = currenciesList.find(
      (c) => c.name === this.state.selectedCurrency
    );
    // on récupere le taux de change correspondant a la devise selectionnée via la propriéte rate

    const convertedAmount = foundCurrency.rate * this.state.baseAmount;

    return convertedAmount;
  }

  handleCurrencyClick(newCurrency) {
    const currencyClicked = newCurrency;
    this.setState({
      selectedCurrency: currencyClicked,
    });
  }

  render() {
    return (
      <div className="app">
        <Header baseAmount={this.state.baseAmount} />
        <Toggler
          onButtonClick={this.handleButtonclick}
          isOpen={this.state.isListOpen}
        />
        {this.state.isListOpen && (
          <Currencies
            currencies={currenciesList}
            onCurrencyClick={this.handleCurrencyClick}
          />
        )}
        <Result
          value={this.makeConversion()}
          selectedCurrency={this.state.selectedCurrency}
        />
      </div>
    );
  }
}

// == Export
export default App;
