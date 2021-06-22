import React from "react";
import FormInput from "./form_input";
import FancyButton from "./fancy_button";
import "./styles/sign_in.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const {password, confirm} = this.state;
    if (password !== confirm) {
      alert("Your passwords dont match cuz");
      return;
    }
    this.setState({email: "", password: ""});
  };

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="Title">Create new account</h2>
        <span>Sign up with an email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            value={this.state.name}
            handleChange={this.handleChange}
            placeholder="Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            placeholder="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            placeholder="Password"
            required
          />
          <FormInput
            name="confirm"
            type="password"
            value={this.state.confirm}
            handleChange={this.handleChange}
            placeholder="Confirm Password"
            required
          />
          <FancyButton type="submit" value="Submit Form">
            Sign Up
          </FancyButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
