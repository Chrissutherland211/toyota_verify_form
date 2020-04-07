import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import PriceInput from '../PriceInput';
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
                <FormControlLabel value="have_personal_diagnosed" control={<Radio />} label="I have personally been medically diagnosed with COVID-19" className={classes.root}/>
                {value==='have_personal_diagnosed'&&
                    <FileUpload title="Uplaod Medical Certificate"/>
                }
                <FormControlLabel value="dependent" control={<Radio />} label="A dependent or person close to me has been diagnosed with COVID-19" className={classes.root}/>
                {value==='dependent'&&
                    <FileUpload title="Uplaod Medical Certificate & Evidence of Relationship"/>
                }
                <FormControlLabel value="cased_employment" control={<Radio />} label="My revenue has ceased due to COVID-19" className={classes.root}/>
                {value==='cased_employment'&&
                    <FileUpload title="Uplaod Bank Statement & Letter from the Account"/>
                }
                <FormControlLabel value="reduced_employment" control={<Radio />} label="My revenue has reduced due to COVID-19" className={classes.root}/>
                {value==='reduced_employment'&&
                    <FileUpload title="Uplaod Bank Statement & Letter from the Account"/>
                }
                <FormControlLabel value="other" control={<Radio />} label="Other" className={classes.root}/>
                {value==='other'&&
                    <TextInput title="Other (Free Text)" />
                }                
                </RadioGroup>        
            </FormControl>       
        </>    
    );
};

export default Circumstances;