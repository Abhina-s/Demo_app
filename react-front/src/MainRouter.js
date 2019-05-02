import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import  MarkDown from "./user/MarkDown";
import Attribute from "./user/Attribute";

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/attribute" component={Attribute} />
            <Route exact path="/markdown" component={MarkDown} />
            {/* <Route exact path="/" component={Signin} /> */}
        </Switch>
    </div>
);

export default MainRouter;
