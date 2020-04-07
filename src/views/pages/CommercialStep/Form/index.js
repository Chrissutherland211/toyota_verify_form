import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { StyledContentContainer } from '../../../styled/Containers';
import { StyledFormContainer } from '../../../components/Form/style';
import theme from '../../../../utilities/theme';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import red from '@material-ui/core/colors/red';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%'
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

function Form() {
    const data = useSelector(store=>store.brand, shallowEqual)
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const history = useHistory();
    
    const individual = localStorage.getItem('individual')
   
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        localStorage.setItem('twoperson',event.target.value)
    };
    const goNext = () => {
        if(value==='true'){
            history.push('/hardship')
        } else if(value==='false'){
            history.push('/hardship')
        }       
    }
    return(
        <StyledContentContainer color={theme.palette[data.brand].background_color}>
            <StyledFormContainer>
                <h1 style={{marginBottom:'60px'}}>Monthly Income Details</h1>   
                {individual?
                <>
                <h4>
                    Does your loan involve two borrowers?
                </h4>
                <FormControl component="fieldset" className={classes.formControl}>       
                    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                    <FormControlLabel value="true" control={<Radio />} label="Yes" className={classes.root}/>
                    <FormControlLabel value="false" control={<Radio />} label="No" className={classes.root}/>
                    </RadioGroup>        
                </FormControl>
                </>
                :
                <h4>Does your loan involve two directors/guarantors? </h4>
                }
                
                <div className={classes.button}>
                    <Button variant="contained" color="secondary" className={classes.color}  onClick={()=>goNext()}>
                        Next
                    </Button>  
                </div>      
            </StyledFormContainer>
        </StyledContentContainer>
    );
};

export default Form;