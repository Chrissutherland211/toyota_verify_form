import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Header from '../../components/Header';
import { Container, StyledVerifyEmailContainer } from '../../styled/Containers';
import { StyledFormContainer } from '../../components/Form/style';
import theme from '../../../utilities/theme';
import EmailInput from '../../components/EmailInput';


function VerifyEmail() {
  const data = useSelector(store=>store.brand, shallowEqual)

  return (
    <Container color={theme.palette[data.brand].background_color}>
      <Header />
      <StyledVerifyEmailContainer>
        <StyledFormContainer>
            <EmailInput />
        </StyledFormContainer>
      </StyledVerifyEmailContainer>
    </Container>
  );
};

export default VerifyEmail;