import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${props=>props.color}    
`

export const StyledContentContainer = styled.div`  
    flex: 1 1 auto;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 96px;
    padding-bottom: 96px;
    background-color: ${props=>props.color};
`

