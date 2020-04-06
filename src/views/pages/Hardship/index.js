import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { StyledContentContainer } from '../../styled/Containers';
import { StyledFormContainer } from '../../components/Form/style';
import theme from '../../../utilities/theme';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

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
    },
    option: {
        height: 300
    }
}));

const currencies = [  
    {
        value: '',
        label: '',
    },  
    {
        value: 'unemployment',
        label: 'Unemployment',
    },
    {
        value: 'natural_disaster',
        label: 'Natural disaster',
    },
    {
        value: 'illness_or_injury',
        label: 'Illness or injury',
    },
    {
        value: 'over_commitment',
        label: 'Over commitment',
    },
    {
        value: 'reduction_of_income',
        label: 'Reduction of income',
    },
    {
        value: 'illness_or_injury_of_family_member',
        label: 'Illness or injury of family member',
    },
];

function HardShip() {
    const data = useSelector(store=>store.brand, shallowEqual)
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const history = useHistory();
    const [hardship, setHardship] = React.useState();
    const handleChange = (event) => {
        setHardship(event.target.value);

    };   
    const goCodiv = () => {
        history.push('/related_covid')
    }
    
    return(
        <StyledContentContainer color={theme.palette[data.brand].background_color}>
            <StyledFormContainer>
                <h4>Why are you applying for hardship?</h4>   
                <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="standard-select-hardship"
                    select
                    label="Select a hardship"
                    // value={hardship}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}                    
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                </form>  
                <div className={classes.button}>
                    <Button variant="contained" color="secondary" className={classes.color} onClick={()=>goCodiv()}>
                        Next
                    </Button>  
                </div>      
            </StyledFormContainer>
        </StyledContentContainer>
    );
};

export default HardShip;