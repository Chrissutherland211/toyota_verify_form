import React from 'react';
import { StyledFormContainer, StyledHeaderContainer } from './style';
import title from '../../utils/title';

function Form() {
    return(
        <StyledFormContainer>
            <StyledHeaderContainer>
                <h1>{title.individual.title}</h1>
                <p>{title.individual.content}</p>
            </StyledHeaderContainer>
        </StyledFormContainer>
    );
};

export default Form