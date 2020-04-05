/* eslint-disable react/no-multi-comp */

import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Header from '../../components/Header';
import Form from '../../components/Form';
import { Container, StyledContentContainer } from '../../styled/Containers';
import { GlobalStyles } from '../../styled/GlobalStyles';
import theme from '../../../utilities/theme';


function FormIndividual() {
  const data = useSelector(store=>store.brand, shallowEqual)

  return (
    <Container color={theme.palette[data.brand].background_color}>
      <GlobalStyles />
      <Header />
      <StyledContentContainer>
        <Form />
      </StyledContentContainer>
    </Container>
  );
};

export default FormIndividual;
