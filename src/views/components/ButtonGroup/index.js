import React from 'react';
import Button from '@material-ui/core/Button';
import { StyledDiv } from '../../../views/styled/Containers';

function ButtonGroup(props){
    return(
        <StyledDiv>
            <Button variant="contained" color="secondary"   onClick={props.before}>
                Back
            </Button> 
            <Button variant="contained" color="secondary"   onClick={props.next}>
                Next
            </Button>  
        </StyledDiv> 
    )
}

export default ButtonGroup;