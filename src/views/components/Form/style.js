import styled from 'styled-components';

export const StyledFormContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 415px;  
    
    @media (max-width: 475px) {
        width: 100% !important;
    }
`

export const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;

    & h1, & p {
        text-align: center;
        font-family: 'Toyota Font';
    }
    
`