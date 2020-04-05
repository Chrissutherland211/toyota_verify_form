import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../utils/hoc/PrivateRoute";

import VerifyEmail from '../pages/VerifyEmail';
import FormIndividual from "../pages/FormIndividual";
import FormCommercial from "../pages/FormCommercial";
import ContactNumber from "../pages/ContactNumber";

function Router() {
    return(
        <Switch>
            <Route exact path="/" component={VerifyEmail} />
            <Route exact path="/contact_number" component={ContactNumber} />
            <PrivateRoute exact path="/form_individual" component={FormIndividual} />
            <PrivateRoute exact path="/form_commercial" component={FormCommercial} />
        </Switch>
    )
}

export default Router