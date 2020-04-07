import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import {userData} from '../../utils/questions';

const useStyles = makeStyles((theme) => ({    
    root: {
        display: 'flex',
        flexWrap: 'wrap',  
        width: '100%'      
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

export default function InputAdornments(props) {
    const data = useSelector(store=>store.user)
    const classes = useStyles(data);
    
    const history = useHistory();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        weight: '',
        weightRange: '',
        sendEmail: false,
        emailValid: false,
    });

    const handleChange = (prop) => async (event) => {        
        validateField(event.target.value)
    };

    const validateField = ( value) => {      
        const validated = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);        
        if(validated){
            setValues({ ...values, emailValid: false, email: value });        
        } else {
            setValues({ ...values, emailValid: true });
        }    
    }

    const next = async () => {
        console.log({...userData, email:values.email })
        if(!values.emailValid && values.email){
            await localStorage.setItem('userData', JSON.stringify({...userData, email:values.email }))
            const data = await localStorage.getItem('userData')
            await console.log(JSON.parse(data).email)
            history.push('/contact_number')
        }
    }   

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
                    labelWidth={70}
                />
                </FormControl> 
                <div className={classes.button}>
                <Button variant="contained" color="secondary" className={classes.color}  onClick={()=>next()}>
                    Next
                </Button>  
            </div>      
            </div>
    );
}
