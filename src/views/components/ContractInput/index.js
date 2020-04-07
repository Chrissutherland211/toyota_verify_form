import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactCodeInput from 'react-verification-code-input';
import { setContractNumber } from '../../../state/ducks/user/actions';
import { parseWithOptions } from 'date-fns/fp';


function ContractInput(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const sendCode = (value) => {
        setContractNumber(value, dispatch);
        // history.push('/hardship')
    }
    return(
        <ReactCodeInput fields={props.fields} fieldWidth={props.width} onComplete={sendCode}/>
    );
};

export default ContractInput;