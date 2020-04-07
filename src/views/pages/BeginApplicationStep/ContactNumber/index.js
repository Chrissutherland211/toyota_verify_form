import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import { StyledContentContainer, StyledDiv } from '../../../styled/Containers';
import { StyledFormContainer } from '../../../components/Form/style';
import theme from '../../../../utilities/theme';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ButtonGroup from '../../../components/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  formControl:{
    width:'100%'
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
      width: '100%',
      '& .MuiButtonBase-root': {
          width: '100%',
          borderRadius: '20px'
      }
  },
  color: {
      backgroundColor: "#eb0a1e"
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
function ContactNumber() {
    const data = useSelector(store=>store.brand)
    const classes = useStyles();
    const history = useHistory();
    
    const [value, setValue] = React.useState(true);
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        
        console.log(value)
    }; 
    const before = () => {
      history.push('/')
    } 
    const next = () => {
      if(value==='true'){
        history.push('/contract_number')
      } else if(value==='false'){
          history.push('/register_number')
      }
    } 
  return ( 
      <StyledContentContainer color={theme.palette[data.brand].background_color}>
        <StyledFormContainer>
            <h4>To get started, do you know your contract number?</h4>
            <FormControl component="fieldset" className={classes.formControl}>       
              <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
              <FormControlLabel value="true" control={<Radio />} label="Yes" className={classes.option}/>
              <FormControlLabel value="false" control={<Radio />} label="No" className={classes.option}/>
              </RadioGroup>        
            </FormControl>
            <ButtonGroup before={before} next={next} />
        </StyledFormContainer>
      </StyledContentContainer>
  );
};

export default ContactNumber;