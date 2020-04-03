import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../utils/hoc/PrivateRoute";

import formIndividual from "../containers/formIndividual";
import formCommercial from "../containers/formCommercial";

function Router() {
    return(
        <Switch>
            <Route exact path="/form_individual" component={formIndividual} />
            <Route exact path="/form_commercial" component={formCommercial} />
            <PrivateRoute path="/" component={formCommercial} />
        </Switch>
    )
}

export default Router