import GlobalStyle from "./styles";
import React from "react";
import HomePage from "./pages/homepage";
import Shop from "./pages/shop";
import CheckoutPage from "./pages/checkout";
import Contact from "./pages/contact";
import Header from "./components/header";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import * as userActions from "./redux/user/user_actions";
import {bindActionCreators} from "redux";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

class App extends React.Component {
  unSubFromAuth = null;
  componentDidMount() {
    const {userActions} = this.props;
    this.unSubFromAuth = userActions.getCurrentUser();
  }

  componentWillUnmount() {
    this.unSubFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
