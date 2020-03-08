import React, { Component } from "react";

class Authorized extends Component {
  render() {
    function refreshPage() {
      window.location.reload(false);
    }
    return (
      <div>
        <h1>Congrats, you're authorized!</h1>
        <p>Your account {this.props.account} has been authorized.</p>
        <div style={styles.container}>
          <a
            onClick={refreshPage}
            style={styles.editButton}
            href="http://localhost:3000//"
            target="_self"
            rel="noopener noreferrer"
          >
            Continue
          </a>
        </div>
      </div>
    );
  }
}

export default Authorized;

let styles = {
  container: { paddingTop: 50 },

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
