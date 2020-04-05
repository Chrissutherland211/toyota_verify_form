import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import StyledContainer from './style';
import RadioGroup from '../../components/RadioGroup';
// import customTheme from '../../../utilities/theme';
import CodeInput from '../ContractInput';
import RegisterInput from '../RegisterInput';


function ContactQuestion() {
    const data = useSelector(store=>store.user)
    const [isContractNumber, setIsContractNumber] = React.useState('')

    useEffect(()=>{
        if(data.isContractNumber === 'true'){
            setIsContractNumber(data.isContractNumber)
        } else if(data.isContractNumber === 'false'){
            setIsContractNumber(data.isContractNumber)
        }

        if(data.contractNumber){
            console.log(data.contractNumber)
        }
    },[data.isContractNumber, data.contractNumber])
    return(
        <StyledContainer>
            {isContractNumber===''?
            <>
                <h4>To get started, do you know your contract number?</h4>
                <RadioGroup />
            </>
            :
            isContractNumber==='true'?
            <>
                <h4>8 digits, Start with: 11, 12, 13</h4>
                <CodeInput />
            </>
            :
            <>
                <h4>Do you know your registration number?</h4>
                <RegisterInput />
            </>
            }
            
        </StyledContainer>
    )
}

export default ContactQuestion;