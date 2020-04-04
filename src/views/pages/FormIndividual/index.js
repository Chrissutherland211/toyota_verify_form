/* eslint-disable react/no-multi-comp */

import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Header from '../../components/Header';
import { Container } from '../../styled/Containers';
import theme from '../../../utilities/theme';


function FormIndividual() {
  const data = useSelector(store=>store.brand, shallowEqual)
  
  return (
    <Container color={theme.palette[data.brand].background_color}>
      <Header />

    </Container>
  );
}

export default FormIndividual;
