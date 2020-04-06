import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '20px',
        // marginTop: '60px',
        // '& .MuiTextField-root': {
        //     // margin: theme.spacing(1),
            
        //     width: '100%',
        // },
    },
}));

function TextInput(props) {
    const classes = useStyles();
    return(
        <form className={classes.root} noValidate autoComplete="off">
            <FormControl fullWidth className={classes.root}>
                <InputLabel htmlFor="standard-adornment-amount">{props.title}</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    // value={values.amount}
                    // onChange={handleChange('amount')}
                />
            </FormControl>
        </form>
    );
};

export default TextInput