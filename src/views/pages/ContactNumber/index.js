import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Header from '../../components/Header';
import { StyledContentContainer } from '../../styled/Containers';
import { StyledFormContainer } from '../../components/Form/style';
import theme from '../../../utilities/theme';


function ContactNumber() {
  const data = useSelector(store=>store.brand, shallowEqual)

  return ( 
      <StyledContentContainer color={theme.palette[data.brand].background_color}>
        <StyledFormContainer>
            {/* <EmailInput /> */}
        </StyledFormContainer>
      </StyledContentContainer>
  );
};

export default ContactNumber;