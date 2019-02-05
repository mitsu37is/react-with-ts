import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  RouteComponentProps
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ProductsPage from "./ProductsPage";
import Header from "./Header";
import ProductPage from "./ProductPage";
import LoginPage from "./LoginPage";
import NotFoundPage from "./NotFoundPage";
import { Suspense } from "react";

const AdminPage = React.lazy(() => import("./AdminPage"));
const RoutesWrap: React.SFC = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

const Routes: React.SFC<RouteComponentProps> = props => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={props.location.key}
          timeout={500}
          classNames="animate"
        >
          <Switch>
            <Redirect exact={true} from="/" to="/products" />
            <Route exact={true} path="/products" component={ProductsPage} />
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/admin">
              {loggedIn ? (
                <Suspense
                  fallback={<div className="page-container">Loading...</div>}
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
  );
};

export default RoutesWrap;
