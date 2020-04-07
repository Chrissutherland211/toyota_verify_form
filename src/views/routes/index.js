import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../utils/hoc/PrivateRoute";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import VerifyEmail from '../pages/VerifyEmail';
import VehicleRegistration from '../pages/BeginApplicationStep/VehicleRegistration';
import FormIndividual from "../pages/FormIndividual";
import ContactNumber from "../pages/BeginApplicationStep/ContactNumber";
import ContractNumber from "../pages/BeginApplicationStep/ContractNumber";
import RegisterNumber from "../pages/BeginApplicationStep/RegisterNumber";
import RegisterInput from "../pages/BeginApplicationStep/RegisterInput";
import HardShip from "../pages/ResonApplyingStep/Hardship";
import RelatedCovid from "../pages/ResonApplyingStep/RelatedCovid";
import CommercialLoan from "../pages/CommercialStep/CommercialLoan";
import BusinessInput from "../pages/CommercialStep/BusinessInput";
import Circumstances from "../pages/CommercialStep/Circumstances";
import CovidForm from "../pages/CovidForm";
import Form from "../pages/CommercialStep/Form";
import CovidCommercailLoan from '../pages/ResonApplyingStep/CommercialLoan';
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
                <Route exact path="/vehicle_registration" component={VehicleRegistration} />
                <Route exact path="/contact_number" component={ContactNumber} />
                <Route exact path="/contract_number" component={ContractNumber} />
                <Route exact path="/register_number" component={RegisterNumber} />
                <Route exact path="/hardship" component={HardShip} />
                <Route exact path="/related_covid" component={RelatedCovid} />
                <Route exact path="/commercial_loan" component={CommercialLoan} />
                <Route exact path="/business_input" component={BusinessInput} />
                <Route exact path="/circumstances" component={Circumstances} />
                <Route exact path="/form" component={Form} />
                <Route exact path="/covid_form" component={CovidForm} />
                <Route exact path="/covid_commercial_loan" component={CovidCommercailLoan} />
                <Route exact path="/registration_number_input" component={RegisterInput} />
                <Route exact path="/form_individual" component={FormIndividual} />
            </Switch>
        </MuiThemeProvider>
    )
}

export default Router