import React, { Component } from "react";
import Web3 from "web3";
import logo from "../logo.png";
import "./App.css";
import Authorized from "./Authorized";
import Unauthorized from "./Unauthorized";
import { Link } from "react-router-dom";

import Iframe from "react-iframe";

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.fetchAccount();
    await this.checkAuthorization();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async fetchAccount() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
  }

  async checkAuthorization() {
    const authorizedAccounts = ["0x76FE6fc281c762Fba19C16FA4108c44a34180A8C"];
    const authorized = authorizedAccounts.includes(this.state.account);
    this.setState({ authorized });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      authorized: false
    };
  }

  render() {
    let body;

    if (this.state.authorized) {
      body = <Authorized account={this.state.account} />;
    } else {
      body = <Unauthorized account={this.state.account} />;
    }

    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://localhost:3000//"
            target="_blank"
            rel="noopener noreferrer"
          >
            DappLogin
          </a>
        </nav>

        <h1 style={styles.brand}>DappLogin</h1>

        {/* <Iframe
          url="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js"
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        /> */}
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">{body}</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

let styles = {
  container: { paddingLeft: "45%", paddingTop: 50 },

  header: {
    justifyContent: "center",
    alignContent: "center"
  },

  brand: {
    paddingTop: 100,
    textAlign: "center"
  },
  editButton: {
    textDecoration: "none",
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 30,
    paddingLeft: 30,
    width: "150px",
    fontWeight: 500,
    border: 0,
    borderRadius: 10,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#147efb",
    textAlign: "center",
    boxShadow: 2
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
  }
};
