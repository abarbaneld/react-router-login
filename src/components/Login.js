import React from "react";
import { Redirect } from "react-router-dom";
import fakeAuth from "../auth.js";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirectToReferrer: false, username:"", password:"" };
        //React Does Not Bind Automatically
        this.login = this.login.bind(this);
        this.updateUserValue = this.updateUserValue.bind(this);
        this.updatePasswordValue = this.updatePasswordValue.bind(this);
    }
  
    login = () => {
      fakeAuth.authenticate(this.state.username,this.state.password,() => {
        this.setState({ redirectToReferrer: true });
      });
    };

    updateUserValue(e) {
        this.setState({
          username: e.target.value
        });
    };

    updatePasswordValue(e) {
        this.setState({
          password: e.target.value
        });
    };
  
    render() {
      let { from } = this.props.location.state || { from: { pathname: "/" } };
      let { redirectToReferrer } = this.state;
  
      if (redirectToReferrer) return <Redirect to={from} />;
  
      return (
        <div>
          <p>You must log in to view the page at {from.pathname}</p>
          Username <input type="text" value={this.state.username} onChange={this.updateUserValue}/>
          Password <input type="password" value={this.state.password} onChange={this.updatePasswordValue}/>
          <button onClick={this.login}>Log in</button>
        </div>
      );
    }
  }

  export default Login;