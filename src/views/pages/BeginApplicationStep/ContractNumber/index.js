import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { StyledContentContainer, StyledDiv } from '../../../styled/Containers';
import { StyledFormContainer } from '../../../components/Form/style';
import Button from '@material-ui/core/Button';
import CodeInput from '../../../components/ContractInput';
import theme from '../../../../utilities/theme';
import ButtonGroup from '../../../components/ButtonGroup';

import {
    KeyboardDatePicker,
} from '@material-ui/pickers';

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


function ContactNumber() {
  const data = useSelector(store=>store.brand, shallowEqual)
  const classes = useStyles();
  const history = useHistory();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const next = () => {
    history.push('/commercial_loan')
  }
  const before = () => {
      history.push('./contact_number')
  }
  return ( 
      <StyledContentContainer color={theme.palette[data.brand].background_color}>
        <StyledFormContainer>
            <h4>To get started, do you know your contract number?</h4>
            <h5>8 digits, Start with: 11, 12, 13</h5>
            <CodeInput width="12%" fields={8}/>    
            <ButtonGroup before={before} next={next} /> 
        </StyledFormContainer>
      </StyledContentContainer>
  );
};

export default ContactNumber;