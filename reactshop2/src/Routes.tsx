import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Suspense } from "react";

const AdminPage = React.lazy(() => import("./AdminPage"));
import ProductsPage from "./ProductsPage";
import Header from "./Header";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";

const RoutesWrap: React.SFC = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

interface IState {
  loggedIn: boolean;
}

class Routes extends React.Component<RouteComponentProps, IState> {
  public constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }
  public render() {
    return (
      <Router>
        <div>
          <Header />
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              timeout={500}
              classNames="animate"
            >
              <Switch>
                <Redirect exact={true} from="/" to="/products" />
                <Route exact={true} path="/products" component={ProductsPage} />
                <Route path="/products/:id" component={ProductPage} />
                <Route path="/admin">
                  {this.state.loggedIn ? (
                    <Suspense
                      fallback={
                        <div className="page-container">Loading...</div>
                      }
                    >
                      <AdminPage />
                    </Suspense>
                  ) : (
                    <Redirect to="/login" />
                  )}
                </Route>
                <Route path="/login" component={LoginPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </Router>
    );
  }
}

export default RoutesWrap;
