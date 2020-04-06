import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { StyledContentContainer } from '../../styled/Containers';
import { StyledFormContainer } from '../../components/Form/style';
import theme from '../../../utilities/theme';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles((theme) => ({
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
    }
}));

function RegisterInput() {
    const data = useSelector(store=>store.brand, shallowEqual)
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const history = useHistory();
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const goHardship = () => {
        history.push('/hardship')
    }
    return(
        <StyledContentContainer color={theme.palette[data.brand].background_color}>
            <StyledFormContainer>
                <h4>What digits is it?</h4>   
                <form className={classes.root} validate autoComplete="off">
                    <TextField
                        id="standard-textarea"
                        label="Resitration Code*"
                        multiline
                    />   
                </form>  
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
                    <TextField
                        id="standard-textarea"
                        label="DOB*"
                        multiline
                    />   
                </form> 
                <div className={classes.button}>
                    <Button variant="contained" color="secondary" className={classes.color}  onClick={()=>goHardship()}>
                        Next
                    </Button>  
                </div>      
            </StyledFormContainer>
        </StyledContentContainer>
    );
};

export default RegisterInput;