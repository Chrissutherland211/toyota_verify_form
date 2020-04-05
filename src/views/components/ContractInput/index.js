import React from 'react';
import { useDispatch } from 'react-redux';
import ReactCodeInput from 'react-verification-code-input';
import { setContractNumber } from '../../../state/ducks/user/actions';


function ContractInput() {
    const dispatch = useDispatch();
    const sendCode = (value) => {
        setContractNumber(value, dispatch);
    }
    return(
        <ReactCodeInput fields={8} fieldWidth={35} onComplete={sendCode}/>
    );
};

export default ContractInput;