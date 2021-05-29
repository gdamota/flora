import "./App.css";
import React from "react";
import HomePage from "./pages/homepage";
import Shop from "./pages/shop";
import SignInAndUp from "./pages/sign_in_and_up";
import Header from "./components/header";
import {Route, Switch} from "react-router-dom";
import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unSubFromAuth = null;
  componentDidMount() {
    this.unSubFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount() {
    this.unSubFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
