import React, { Component } from "react";

class Unauthorized extends Component {
  render() {
    return (
      <div>
        <h1>Sorry, you're unauthorized!</h1>
        <p>
          Your account {this.props.account} is unauthorized. Please sign up.
        </p>
        <input
          style={{
            width: 555,
            borderRadius: 0,
            padding: 10,
            borderWidth: 1,
            borderColor: "#147efb",
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
            fontSize: 20,
            marginTop: 50,
            paddingLeft: 30
          }}
          placeholder="Enter your wallet address"
          type="text"
          name="name"
        />
        <input
          onClick={() => window.location.reload(false)}
          style={{
            width: 100,
            borderRadius: 0,
            padding: 10,
            borderWidth: 1,
            borderColor: "#147efb",
            backgroundColor: "#147efb",
            color: "white",
            fontSize: 20,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20
          }}
          type="submit"
          value="Sign Up"
        />
      </div>
    );
  }
}

export default Unauthorized;
