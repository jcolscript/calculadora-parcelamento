import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    newValue: "",
    newFee: "",
    newNumberInstallments: "",
    installments: [],
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

  handleNewNumberInstallmentsChange = (e) => {
    this.setState({
      newNumberInstallments: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const newInstallments = [];
    e.preventDefault();
    for (let index = 0; index < this.state.newNumberInstallments; index++) {
      const parcela = index + 1;
      const valor = this.state.newValue / parcela;
      const valorComTaxa =
        parcela === 1
          ? null
          : valor + valor * ((this.state.newFee * parcela) / 100);
      const taxa = `${this.state.newFee}%`;
      const total = parcela === 1 ? parcela * valor : parcela * valorComTaxa;

      const installment = {
        parcela,
        valor,
        valorComTaxa,
        taxa,
        total,
      };

      console.log(installment);

      newInstallments.push(installment);
    }

    this.setState({ installments: newInstallments });
  };

  render() {
    return (
      <>
        <div className="title">Calcule o valor da parcela!</div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-field"
            type="text"
            placeholder="Valor do produto"
            value={this.state.newValue}
            onChange={this.handleNewValueInputChange}
            required
          />
          <input
            className="form-field"
            type="text"
            placeholder="Taxa de juros"
            value={this.state.newFee}
            onChange={this.handleNewFeeInputChange}
            required
          />
          <input
            className="form-field"
            type="number"
            placeholder="Numero de parcelas"
            min="0"
            max="12"
            value={this.state.newMonths}
            onChange={this.handleNewNumberInstallmentsChange}
            required
          />
          <button className="btn" type="submit">
            Calcular
          </button>
        </form>
        <div className="installments">
          {this.state.installments.map((installment, index) => (
            <div className="installment" key={index}>
              <div className="installment-periods">
                {installment.parcela}x{" "}
                {installment.valorComTaxa
                  ? installment.valorComTaxa.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                  : installment.valor.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
              </div>
              <div className="installment-addition">
                {installment.valorComTaxa
                  ? `${installment.valor.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })} + ${installment.taxa}`
                  : "sem acréssimo"}
              </div>
              <div className="installment-total">
                {installment.total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
