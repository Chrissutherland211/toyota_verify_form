import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { StyledContentContainer } from '../../styled/Containers';
import { StyledFormContainer } from '../../components/Form/style';
import Button from '@material-ui/core/Button';
import CodeInput from '../../components/ContractInput';
import theme from '../../../utilities/theme';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
        marginTop: '60px',
        // marginBottom: '80px'
    },
    formIndustryControl: {
        width: '100%',
        marginLeft: '30px',
        marginBottom: '20px'
    },
    root: {
        '& .MuiTextField-root': {
            marginTop: '32px',
            maxWidth: '415px',
            width: '415px',
            minWidth:'200px'  
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
    },
    check: {
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
    option: {
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


function BusinessInput() {
    const data = useSelector(store=>store.brand, shallowEqual)
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState({
        value: false,
        industry: false
    });
    const [age, setAge] = React.useState('');
    const goHardship = () => {
        history.push('/circumstances')
    }
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleRadioChange = async (event) => {
        setValue({value: event.target.value, industry: event.target.value}); 
        // isContractNumbers(event.target.value, dispatch);
        console.log(value)
    }; 
    const handleCheckChange = (event) => {
        setValue({value: event.target.value, industry: event.target.value});      
        // isContractNumbers(event.target.value, dispatch);
    };
    const handleIndustryChange = (event) => {
        setAge(event.target.value);
      };
    return ( 
        <StyledContentContainer color={theme.palette[data.brand].background_color}>
            <StyledFormContainer>
                <form className={classes.root} validate autoComplete="off">
                    <TextField
                        id="standard-textarea"
                        label="Company/Business Name*"
                        multiline
                    />   
                </form> 
                <FormControl component="fieldset" className={classes.formControl}>       
                    <RadioGroup aria-label="quiz" name="quiz" value={value.value} onChange={handleCheckChange}>
                    <FormControlLabel value="true" control={<Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />} 
                    label="ABN" 
                    className={classes.check}/>
                    </RadioGroup>        
                </FormControl>
                <h4 style={{marginTop:'60px'}}>Is the company/business still registered and trading?</h4>
                <FormControl component="fieldset" className={classes.formControl}>       
                    <RadioGroup aria-label="quiz" name="quiz" value={value.value} onChange={handleRadioChange}>
                    <FormControlLabel value="true" control={<Radio />} label="Yes" className={classes.option}/>
                    {value.industry==='true'&&
                     <FormControl className={classes.formIndustryControl}>
                     <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                     <Select
                       labelId="demo-simple-select-label"
                       id="demo-simple-select"
                       value={age}
                       onChange={handleIndustryChange}
                     >
                       <MenuItem value={10}>ANZSIC codes</MenuItem>
                      
                     </Select>
                   </FormControl>
                    }
                    <FormControlLabel value="false" control={<Radio />} label="No" className={classes.option}/>
                    </RadioGroup>        
                </FormControl>
                
                <div className={classes.button}>                
                    <Button variant="contained" color="secondary" className={classes.color}  onClick={()=>goHardship()}>
                        Next
                    </Button>  
                </div>  
            </StyledFormContainer>
        </StyledContentContainer>
    );
};

export default BusinessInput;