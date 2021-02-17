import React, { Component } from "react";
import RoomJoin from "./RoomJoin";
import CreateRoom from "./CreateRoom";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <p>This is the Home Page</p>{" "}
          </Route>
          <Route path='/join' component={RoomJoin} />
          <Route path='/create' component={CreateRoom} />
        </Switch>
      </BrowserRouter>
    );
  }
}
