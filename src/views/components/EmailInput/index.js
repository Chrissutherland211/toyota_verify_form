import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputIcon from '@material-ui/icons/Input';
import CircularProgress from '@material-ui/core/CircularProgress';
import {setEmail} from '../../../state/ducks/user/actions';
import themes from '../../../utilities/theme';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles((theme) => ({    
    root: {
        display: 'flex',
        flexWrap: 'wrap',        
    },
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        width: '10ch',
    },
    width: {
        maxWidth: '300px',
        width: '100%',
        minWidth:'200px'        
    }
}));

export default function InputAdornments(props) {
    const data = useSelector(store=>store.user)
    const classes = useStyles(data);
    const dispatch = useDispatch(data);
    
    const history = useHistory();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        sendEmail: false,
        emailValid: false,
    });

    const handleChange = (prop) => (event) => {
        setEmail(event.target.value, dispatch)
        validateField(event.target.value)
    };

    const handleClicksendEmail = () => {
            console.log(data)
        if(!values.emailValid && data.email){
            setValues({ ...values, sendEmail: true });
            history.push('/contact_number')
        }
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validateField = ( value) => {      
        const validated = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        console.log(validated, value)
        if(validated){
            setValues({ ...values, emailValid: false });        
        } else {
            setValues({ ...values, emailValid: true });
        }    
    }

    const theme = createMuiTheme({
        palette: {
            primary: green,
          },
    });
    

    return (      
            <div className={classes.root}>  
                <FormControl error={values.emailValid&&true} className={clsx(classes.margin, classes.textField, classes.width)} variant="outlined">
                <InputLabel 
                    error={values.emailValid&&true} 
                    htmlFor="filled-start-adornment" >
                        Email
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.sendEmail ? 'text' : 'email'}
                    onChange={handleChange('password')}                
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClicksendEmail}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                        {values.sendEmail ? 
                        <CircularProgress
                            variant="indeterminate"
                            disableShrink
                            size={24}
                            thickness={4}
                        /> : <InputIcon />}
                        </IconButton>
                    </InputAdornment>
                    }
                    labelWidth={70}
                />
                </FormControl>     
            </div>
    );
}
