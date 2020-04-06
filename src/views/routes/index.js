import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../utils/hoc/PrivateRoute";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import themes from '../../utilities/theme/themes';
import VerifyEmail from '../pages/VerifyEmail';
import FormIndividual from "../pages/FormIndividual";
import FormCommercial from "../pages/FormCommercial";
import ContactNumber from "../pages/ContactNumber";
import ContractNumber from "../pages/ContractNumber";
import RegisterNumber from "../pages/RegisterNumber";
import RegisterInput from "../pages/RegisterInput";
import HardShip from "../pages/Hardship";
import RelatedCovid from "../pages/RelatedCovid";
import CommercialLoan from "../pages/CommercialLoan";
import BusinessInput from "../pages/BusinessInput";
import Circumstances from "../pages/Circumstances";
import Form from "../pages/Form";
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: green,
      },
});

function Router() {
    return(
        <MuiThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/" component={VerifyEmail} />
                <Route exact path="/contact_number" component={ContactNumber} />
                <Route exact path="/contract_number" component={ContractNumber} />
                <Route exact path="/register_number" component={RegisterNumber} />
                <Route exact path="/hardship" component={HardShip} />
                <Route exact path="/related_covid" component={RelatedCovid} />
                <Route exact path="/commercial_loan" component={CommercialLoan} />
                <Route exact path="/business_input" component={BusinessInput} />
                <Route exact path="/circumstances" component={Circumstances} />
                <Route exact path="/form" component={Form} />
                <Route exact path="/registration_number_input" component={RegisterInput} />
                <Route exact path="/form_individual" component={FormIndividual} />
                <Route exact path="/form_commercial" component={FormCommercial} />
            </Switch>
        </MuiThemeProvider>
    )
}

export default Router