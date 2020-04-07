import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { StyledContentContainer } from '../../../styled/Containers';
import { StyledFormContainer } from '../../../components/Form/style';
import theme from '../../../../utilities/theme';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import ButtonGroup from '../../../components/ButtonGroup';
import CodeInput from '../../../components/ContractInput';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginTop: '32px',
            maxWidth: '415px',
            width: '415px',
            minWidth:'200px'  
        },
    },
    button: {
        marginTop: '80px',
        width: '100%',
        '& .MuiButtonBase-root': {
            width: '100%',
            borderRadius: '20px'
        }
    },
    color: {
        backgroundColor: "#eb0a1e"
    }
}));

function VehicleRegistration() {
    const data = useSelector(store=>store.brand, shallowEqual)
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const history = useHistory();
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const next = () => {
        history.push('/contact_number')
    }
    const before = () => {
        history.push('./')
    }
    return(
        <StyledContentContainer color={theme.palette[data.brand].background_color}>
            <StyledFormContainer>
                <h4>Did you get the code?</h4>   
                <CodeInput width="12%" fields={8} />               
                <ButtonGroup before={before} next={next} />     
            </StyledFormContainer>
        </StyledContentContainer>
    );
};

export default VehicleRegistration;