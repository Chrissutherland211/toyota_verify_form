import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import { StyledContentContainer } from '../../styled/Containers';
import { StyledFormContainer } from '../../components/Form/style';
import ContactQuestion from '../../components/ContactQuestion';
import theme from '../../../utilities/theme';

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
  const goHardship = () => {
    history.push('/hardship')
  }
  return ( 
      <StyledContentContainer color={theme.palette[data.brand].background_color}>
        <StyledFormContainer>
            <ContactQuestion />
            {/* <div className={classes.button}>
              <Button variant="contained" color="secondary" className={classes.color}  onClick={()=>goHardship()}>
                Next
              </Button>  
            </div>  */}
        </StyledFormContainer>
      </StyledContentContainer>
  );
};

export default ContactNumber;