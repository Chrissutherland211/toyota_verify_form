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

    & h4 {
        font-family: Toyota font;
        font-weight: 600;
        font-size: 24px;
        color: '#222';
        line-height: 30px;
        letter-spacing:0;
        margin: 0 0 10px 0;
    }

    & option,
    & label {
        font-family: 'ToyotaType, Helvetica Neue ,Helvetica,Arial,sans-serif';
        font-weight: 600;
        font-size: 18px;
        color: '#222';
        margin: 0 0 10px 0;
        letter-spacing: 1px;
    }

    
    
    & span {
        font-family: 'ToyotaType, Helvetica Neue ,Helvetica,Arial,sans-serif';
        font-weight: 600;
        font-size: 13px;
        color: '#222';
        letter-spacing: 1px;
    }
`

