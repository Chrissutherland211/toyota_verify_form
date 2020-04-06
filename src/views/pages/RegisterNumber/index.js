import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledContentContainer } from '../../styled/Containers';
import { StyledFormContainer } from '../../components/Form/style';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import theme from '../../../utilities/theme';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%'
    },
    colorPrimary: {
        color:'black'
    },
    root: {
        marginTop: theme.spacing(3),
        marginLeft: 0,
        marginRight:0,
        height: '60px',
        backgroundColor: "#ebebec",
        borderRadius: '3px;',
        '&:hover': {
            background: "#fff",
            boxShadow: '1px 2px 6px 0 rgba(34,34,34,.15)',
        },
    },
}));



function RegisterNumber() {
    const history = useHistory();
    const classes = useStyles();
    const [value, setValue] = React.useState(true);
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        if(event.target.value==='true'){
            history.push('./registration_number_input')
        } else if(event.target.value==='false'){
            history.push('./hardship')
        }
        // isContractNumbers(event.target.value, dispatch);
        console.log(value)
    }; 
    const data = useSelector(store=>store.brand, shallowEqual)

    return ( 
        <StyledContentContainer color={theme.palette[data.brand].background_color}>
            <StyledFormContainer>
                <h4>Do you have your registration number?</h4>
                <FormControl component="fieldset" className={classes.formControl}>       
                    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                    <FormControlLabel value="true" control={<Radio />} label="Yes" className={classes.root}/>
                    <FormControlLabel value="false" control={<Radio />} label="No" className={classes.root}/>
                    </RadioGroup>        
                </FormControl>
            </StyledFormContainer>
        </StyledContentContainer>
    );
};

export default RegisterNumber;