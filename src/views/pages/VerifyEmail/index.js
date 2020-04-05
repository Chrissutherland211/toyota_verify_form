import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { StyledContentContainer } from '../../styled/Containers';
import { StyledFormContainer } from '../../components/Form/style';
import theme from '../../../utilities/theme';
import EmailInput from '../../components/EmailInput';


function VerifyEmail() {
  const data = useSelector(store=>store.brand, shallowEqual)

  return (    
      <StyledContentContainer color={theme.palette[data.brand].background_color}>
        <StyledFormContainer>
          <EmailInput />
        </StyledFormContainer>
      </StyledContentContainer>
  );
};

export default VerifyEmail;