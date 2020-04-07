import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FileUpload from '../FileUpload';
import TextInput from '../TextInput';

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

function Circumstances(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');      
    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };  
    return(
        <>
            <h5 style={{marginBottom:'60px'}}>{props.title}</h5>           
             
            <FormControl component="fieldset" className={classes.formControl}>       
                <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                <FormControlLabel value="information" control={<Radio />} label="Please provide evidence of your hardship such as a Separation Certificate or medical certificate or similar" className={classes.root}/>
                {value==='information'&&
                    <FileUpload title="Upload Separation Certificate or medical certificate"/>
                }                
                <FormControlLabel value="other" control={<Radio />} label="Other" className={classes.root}/>
                {value==='other'&&
                    <TextInput title="Briefly Describe your circumstances" />
                }                
                </RadioGroup>        
            </FormControl>       
        </>    
    );
};

export default Circumstances;