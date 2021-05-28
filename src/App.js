import "./App.css";
import HomePage from "./pages/homepage";
import Shop from "./pages/shop";
import SignInAndUp from "./pages/sign_in_and_up";
import Header from "./components/header";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInAndUp} />
      </Switch>
    </div>
  );
}

export default App;
