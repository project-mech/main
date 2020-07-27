import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import WelcomePage from "../../routes/WelcomePage/WelcomePage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import ForgotPage from "../../routes/ForgotPage/ForgotPage";
import DtcCommentListPage from "../../routes/DtcCommentListPage/DtcCommentListPage";
import InnerDtcCommentListPage from "../../routes/InnerDtcCommentListPage/InnerDtcCommentListPage";
import GaragePage from "../../routes/GaragePage/GaragePage";
import DtcSearchPage from "../../routes/DtcSearchPage/DtcSearchPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";

class App extends Component {
  render() {
    return (
      <div className="App__app">
        <div className="App__container">
          <header className="App__header">
            <Header />
          </header>
          <div className="App__route">
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegistrationPage} />
              <Route path="/forgot" component={ForgotPage} />
              <Route path="/home" component={DtcCommentListPage} />
              <Route
                exact
                path="/dtc/:dtc_id/comments"
                component={InnerDtcCommentListPage}
              />
              <Route path="/garage" component={GaragePage} />
              <Route
                exact
                path="/dtc/:dtc_id/search"
                component={DtcSearchPage}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
        <footer className="App__footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
