import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { StyledContentContainer } from '../../../styled/Containers';
import { StyledFormContainer } from '../../../components/Form/style';
import CodeInput from '../../../components/ContractInput';
import theme from '../../../../utilities/theme';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import ButtonGroup from '../../../components/ButtonGroup';

import {
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
        marginTop: '60px',
        // marginBottom: '80px'
    },
    formIndustryControl: {
        width: '100%',
        marginTop: '30px',
    },
    formMaritalControl : {
        marginTop: '20px',
        width: '100%',
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


function Circumstances() {
    const data = useSelector(store=>store.brand, shallowEqual)
    const classes = useStyles();
    const history = useHistory();
  
    const [age, setAge] = React.useState('');
    const [marry, setMarry] = React.useState('');
    const next = () => {
        history.push('/form')
    }
    const before = () => {
        history.goBack()
    }   
    const handleMarryChange = (event) => {
        setMarry(event.target.value);
    };
    const handleIndustryChange = (event) => {
        setAge(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
    setSelectedDate(date);
    };
    return ( 
        <StyledContentContainer color={theme.palette[data.brand].background_color}>
            <StyledFormContainer>
                <h4>Can you tell us a bit more about your circumstances?</h4>
                <form className={classes.root} validate autoComplete="off">
                    <TextField
                        id="standard-textarea"
                        label="Name (Given Name & Surname)*"
                        multiline
                    />   
                </form> 
                <form className={classes.root} validate autoComplete="off">
                    <TextField
                        id="standard-textarea"
                        label="Phone Number*"
                        multiline
                    />   
                </form> 
                <form className={classes.root} validate autoComplete="off">
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="DOB*"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                </form> 
                <FormControl className={classes.formIndustryControl}>
                    <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        onChange={handleMarryChange}
                    >
                    <MenuItem value='married'>Married</MenuItem>
                    <MenuItem value='never_married'>Never Married</MenuItem>
                    <MenuItem value='engaged'>Engaged</MenuItem>
                    <MenuItem value='divorced'>Divorced</MenuItem>
                    <MenuItem value='separated'>Separated</MenuItem>
                    <MenuItem value='widowed'>Widowed</MenuItem>
                    <MenuItem value='de_facto'>De facto</MenuItem>
                    </Select>
                </FormControl>
                <form className={classes.root} validate autoComplete="off">
                    <TextField
                        id="standard-textarea"
                        label="Number of dependants*"
                        multiline
                    />   
                </form> 
                <form className={classes.root} validate autoComplete="off">
                    <TextField
                        id="standard-textarea"
                        label="Most Recent Employer’s name*"
                        multiline
                    />   
                </form>
                <form className={classes.root} validate autoComplete="off" style={{marginTop:'64px'}}>
                    <h5>ABN (you can find your employer’s ABN on your payslip)</h5>
                    <CodeInput fields={11} width="9%"/> 
                </form>            
                <FormControl className={classes.formIndustryControl}>
                    <InputLabel id="demo-simple-select-label">Most Recent Employer Industry</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleIndustryChange}
                    >
                    <MenuItem value={10}>ANZSIC codes</MenuItem>
                    
                    </Select>
                </FormControl>
                <ButtonGroup next={next} before={before} /> 
            </StyledFormContainer>
        </StyledContentContainer>
    );
};

export default Circumstances;