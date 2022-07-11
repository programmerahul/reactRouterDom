import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    //Link button-push-replace,redirect
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails}></Route>
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
            <Redirect from="/messages" to="/posts"></Redirect>
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" exact component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
