import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../utils/hoc/PrivateRoute";

import FormIndividual from "../pages/FormIndividual";
import FormCommercial from "../pages/FormCommercial";

function Router() {
    return(
        <Switch>
            <Route exact path="/form_individual" component={FormIndividual} />
            <Route exact path="/form_commercial" component={FormCommercial} />
            <PrivateRoute path="/" component={FormCommercial} />
        </Switch>
    )
}

export default Router