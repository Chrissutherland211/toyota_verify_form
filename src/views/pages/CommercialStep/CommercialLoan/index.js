import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledContentContainer } from '../../../styled/Containers';
import { StyledFormContainer } from '../../../components/Form/style';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import theme from '../../../../utilities/theme';
import ButtonGroup from '../../../components/ButtonGroup';

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
    button: {
        marginTop: '80px',
        width: '100%',
        '& .MuiButtonBase-root': {
            width: '100%',
            borderRadius: '20px'
        }
    },
    color: {
        backgroundColor: "#eb0a1e"
    }
}));

function CommercialLoan() {
    const history = useHistory();
    const classes = useStyles();
    const [value, setValue] = React.useState(true);
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        // isContractNumbers(event.target.value, dispatch);
        console.log(value)
    }; 
    const data = useSelector(store=>store.brand, shallowEqual)
    const goHardship = () => {
        if(value==='true'){
            localStorage.setItem('individual','true')
            history.push('/business_input')
        } else if(value==='false'){
            localStorage.setItem('individual','false')
            history.push('/circumstances')
        }
    }
    const before=()=>{
        history.goBack()
    }

    return ( 
        <StyledContentContainer color={theme.palette[data.brand].background_color}>
            <StyledFormContainer>
                <h4>Is the loan a commercial loan, in the name of a Company?</h4>
                <FormControl component="fieldset" className={classes.formControl}>       
                    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                    <FormControlLabel value="true" control={<Radio />} label="Yes" className={classes.root}/>
                    <FormControlLabel value="false" control={<Radio />} label="No" className={classes.root}/>
                    </RadioGroup>        
                </FormControl>
                <ButtonGroup before={before} next={goHardship} />
            </StyledFormContainer>
        </StyledContentContainer>
    );
};

export default CommercialLoan;