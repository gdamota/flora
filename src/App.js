import "./App.css";
import React from "react";
import HomePage from "./pages/homepage";
import Shop from "./pages/shop";
import SignInAndUp from "./pages/sign_in_and_up";
import CheckoutPage from "./pages/checkout";
import Contact from "./pages/contact";
import Header from "./components/header";
import {Route, Switch, Redirect} from "react-router-dom";
import {auth} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user_actions";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

class App extends React.Component {
  unSubFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unSubFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unSubFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/contact" component={Contact} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
