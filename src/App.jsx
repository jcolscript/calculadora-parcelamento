import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    newValue: "",
    newFee: "",
    newMonths: "",
  };

  handleNewValueInputChange = (e) => {
    this.setState({
      newValue: e.target.value,
    });
  };

  handleNewFeeInputChange = (e) => {
    this.setState({
      newFee: e.target.value,
    });
  };

  handleNewMonthsInputChange = (e) => {
    this.setState({
      newMonths: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="title">Calcule o valor da parcela!</div>
        <form
        // onSubmit={handleAddUser}
        >
          <input
            className="form-field"
            type="text"
            placeholder="Valor do produto"
            value={this.state.newValue}
            onChange={this.handleNewValueInputChange}
          />
          <input
            className="form-field"
            type="text"
            placeholder="Taxa de juros"
            value={this.state.newFee}
            onChange={this.handleNewFeeInputChange}
          />
          <input
            className="form-field"
            type="number"
            placeholder="Numero de parcelas"
            min="0"
            max="12"
            value={this.state.newMonths}
            onChange={this.handleNewMonthsInputChange}
          />
          <button className="btn" type="submit">
            Calcular
          </button>
        </form>
      </>
    );
  }
}

export default App;
