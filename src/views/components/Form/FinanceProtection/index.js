import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import PriceInput from '../PriceInput';
import DatePicker from '../DatePicker';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%'
    },
    subFormControl: {
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

function FinanceProtection(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState({
        value: '',
        subValue: '',
    });   
   
    const handleRadioChange = (event) => {
        setValue({...value, value:event.target.value});
    };

    const handleSubRadioChange = (event) => {
        setValue({...value, subValue:event.target.value});
    };


   
    return(
        <>
            <h4 style={{marginBottom:'60px'}}>{props.title}</h4>           
             
            <FormControl component="fieldset" className={classes.formControl}>       
                <RadioGroup aria-label="quiz" name="quiz" value={value.value} onChange={handleRadioChange}>
                <FormControlLabel value="true" control={<Radio />} label="Yes" className={classes.root}/>
                {value.value==='true'&&
                    <>
                        <h5 style={{marginBottom:'20px'}}>Have you lodged a claim?</h5>  
                        <FormControl component="fieldset" className={classes.subFormControl}>       
                            <RadioGroup aria-label="quiz" name="quiz" value={value.subValue} onChange={handleSubRadioChange}>
                                <FormControlLabel value="true" control={<Radio />} label="Yes" className={classes.root}/>
                                {
                                    value.subValue==='true'&&
                                    <div style={{marginLeft:'30px'}}>
                                        <h5 style={{marginBottom:'10px'}}>When was the claim lodged?</h5>
                                        <DatePicker />
                                    </div>
                                }
                                {/* <FormControlLabel value="false" control={<Radio />} label="No" className={classes.root}/> */}
                            </RadioGroup>        
                        </FormControl> 
                    </>
                }
                <FormControlLabel value="false" control={<Radio />} label="No" className={classes.root}/>
                </RadioGroup>        
            </FormControl>       
        </>    
    );
};

export default FinanceProtection;