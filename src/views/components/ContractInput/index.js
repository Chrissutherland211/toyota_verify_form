import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactCodeInput from 'react-verification-code-input';
import { setContractNumber } from '../../../state/ducks/user/actions';


function ContractInput() {
    const history = useHistory();
    const dispatch = useDispatch();
    const sendCode = (value) => {
        setContractNumber(value, dispatch);
        // history.push('/hardship')
    }
    return(
        <ReactCodeInput fields={8} fieldWidth={"12%"} onComplete={sendCode}/>
    );
};

export default ContractInput;