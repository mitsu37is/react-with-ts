import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Confirm from "./Confirm";

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      confirmOpen: true,
      confirmMessage: "Please hit the confirm button",
    };
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>{this.state.confirmMessage}</p>
        <button onClick={this.handleConfirmClick}>Confirm</button>
        <Confirm
          open={this.state.confirmOpen}
          title="React and TypeScript"
          content="Are you sure you want to learn React and TypeScript?"
          cancelCaption="No way"
          okCaption="Yes please!"
          onCancelClick={this.handleCancelConfirmClick}
          onOkClick={this.handleOkConfirmClick}
        />
      </div>
    );
  }

  private handleCancelConfirmClick = () => {
    this.setState({
      confirmOpen: false,
      confirmMessage: "Take a break, I'm sure you will later..."
    });
  }; 

  private handleOkConfirmClick = () => {
    this.setState({
      confirmOpen: false,
      confirmMessage: "Cool, carry on reading!"
     });
  };

  private handleConfirmClick = () => {
    this.setState({ confirmOpen: true });
  };
}

export default App;
