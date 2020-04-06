/* eslint-disable react/no-multi-comp */

import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { StyledContentContainer } from '../../styled/Containers';
import { StyledFormContainer } from '../../components/Form/style';
import { StyledDiv, StyledWidthDiv } from './style';
import theme from '../../../utilities/theme';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CheckBox from '../../components/Form/CheckBox';
import PriceInput from '../../components/Form/PriceInput';
import TextInput from '../../components/Form/TextInput';
import ValidateTextInput from '../../components/Form/ValidateTextInput';
import DatePicker from '../../components/Form/DatePicker';
import AccidentResult from '../../components/Form/AccidentResult';
import FinanceProtection from '../../components/Form/FinanceProtection';
import FileUpload from '../../components/Form/FileUpload';
import { useHistory } from 'react-router-dom';
import { borrowerOne, expenses, assets, liabilities, backgroundHardship, backgroundHardshipCont, proposalAssistance } from '../../utils/questions';


const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#eb0a1e"
  },
  formControl: {
      // width: '100%'
  },
  root: {
      marginTop: theme.spacing(3),
      marginLeft: 0,
      marginRight:0,
      height: '60px',
      backgroundColor: "#ebebec",
      borderRadius: '3px;',
      '&:hover': {
        background: "#fff",
        boxShadow: '1px 2px 6px 0 rgba(34,34,34,.15)',
      },
    },
  button: {
      marginTop: '80px',
      width: '40%',
      borderRadius: '20px',     
  },
  previewButton :{
    marginTop: '80px',
      width: '100%',
      borderRadius: '20px', 
  }
  
}));

function FormIndividual() {
  const history = useHistory();
  const classes = useStyles();
  const data = useSelector(store=>store.brand, shallowEqual)
  const covid = localStorage.getItem('cobid')
  const twoperson = localStorage.getItem('twoperson')
  const localstep = localStorage.getItem('step')
  const [step, setStep] = React.useState(0)
  
  // console.log(twoperson)
  const next = async () => {
    const currentStep = await localStorage.getItem('step')
    await setStep(parseInt(currentStep)+1)
    await localStorage.setItem('step',parseInt(currentStep)+1)    
    // await console.log(currentStep)
  }
  const before = async () => {
    const currentStep = await localStorage.getItem('step')
    if( currentStep === '0'){
      history.push('/form')      
    } else {
      await setStep(parseInt(currentStep)-1)
      await localStorage.setItem('step',parseInt(currentStep)-1)
    }
  }
 

  console.log(covid)

  
  
  return (
    <StyledContentContainer color={theme.palette[data.brand].background_color}>
      <StyledFormContainer>
        {covid==='false'&& twoperson==='true'&&
          borrowerOne.map((item, index)=>{
            if (step===index && (item.title!=='Other income e.g. rental income Specify type')){
              return(
                <>
                  <h4>BORROWER / DIRECTOR / GUARANTOR 1</h4>
                  <PriceInput title={item.title} />
                </> 
              )
            } else if (step===index && (item.title==='Other income e.g. rental income Specify type') ) {
              return(
                <>
                  <h4>BORROWER / DIRECTOR / GUARANTOR 1</h4>
                  <TextInput title='Other income' />
                  <PriceInput title='Other income'  />
                  <TextInput title='Other income'  />
                  <PriceInput title='Other income'  />
                </>
              )            
            }   
          })              
        }  

        {covid==='false'&& twoperson==='true'&&
          borrowerOne.map((item, index)=>{
            if (step===(index+8) && (item.title!=='Other income e.g. rental income Specify type')){
              return(
                <>
                  <h4>BORROWER / DIRECTOR / GUARANTOR 2</h4>
                  <PriceInput title={item.title} />
                </> 
              )
            } else if (step===(index+8) && (item.title==='Other income e.g. rental income Specify type') ) {
              return(
                <>
                  <h4>BORROWER / DIRECTOR / GUARANTOR 2</h4>
                  <TextInput title='Other income' />
                  <PriceInput title='Other income'  />
                  <TextInput title='Other income'  />
                  <PriceInput title='Other income'  />
                </>
              )            
            }   
          })              
        }      


        {covid==='false'&& twoperson==='false'&&
          borrowerOne.map((item, index)=>{
            if (step===index && (item.title!=='Other income e.g. rental income Specify type')){
              return(
                <>
                  <h4>BORROWER / DIRECTOR / GUARANTOR 1</h4>
                  <PriceInput title={item.title} />
                </> 
              )
            } else if (step===index && (item.title==='Other income e.g. rental income Specify type') ) {
              return(
                <>
                  <h4>BORROWER / DIRECTOR / GUARANTOR 1</h4>
                  <TextInput title='Other income' />
                  <PriceInput title='Other income'  />
                  <TextInput title='Other income'  />
                  <PriceInput title='Other income'  />
                </>
              )            
            }   
          })        
        }
      

        {covid==='false'&&
          expenses.map((item, index)=>{
            var distance = 8
            if(twoperson==='false'){
              distance = 8
            } else {
              distance = 16
            }
            if (step===index + distance){
              return(
                <StyledWidthDiv>
                  <h4>Expenses</h4>
                  <PriceInput title={item.title} />
                </StyledWidthDiv> 
              )
            }
          })        
        }

        {covid==='false'&&
          assets.map((item, index)=>{
            var distance = 0
            if(twoperson==='false'){
              distance = 29
            } else {
              distance = 37
            }
            if(step===index+distance && 
              (item.title==='Superannuation' ||
              item.title==='Savings' ||
              item.title==='Household funiture' ||
              item.title==='Shares')){
                return(
                  <StyledWidthDiv>
                    <h4>Assets</h4>
                    <PriceInput title={item.title} />
                  </StyledWidthDiv> 
                )                
              }
            if (step===index + distance){
              return(
                <StyledWidthDiv>
                  <h4>Assets</h4>
                  <TextInput title={item.title}  />
                  <PriceInput title="Estimated Value" />
                </StyledWidthDiv> 
              )
            }
          })        
        }

        {covid==='false'&&
          liabilities.map((item, index)=>{
            var distance = 0
            if(twoperson==='false'){
              distance = 38
            } else {
              distance = 46
            }
            if(step===index+distance && item.title === 'Rent/Board'){
              return(
                <StyledWidthDiv>
                  <h4>Liabilities</h4>
                  <PriceInput title='Monthly Repayment' />
                </StyledWidthDiv> 
              )
            } else if (step===index+distance && (
              item.title === 'Residential Mortgage' ||
              item.title === 'Investment Mortgage')){
                return(
                  <StyledWidthDiv>
                    <h4>Liabilities</h4>
                    <h5>{item.title}</h5>
                    <TextInput title='With'  />
                    <PriceInput title='Original loan amount'/>
                    <PriceInput title='Current rate' percent="%"/>
                    <PriceInput title='Original term' years="Years"/>
                    <DatePicker title='Date Account Opened'/>
                    <PriceInput title='Balance Outstanding'/>
                    <PriceInput title='Monthly Repayment'/>
                  </StyledWidthDiv> 
                )
            } else if (step===index+distance && (
              item.title === 'Secured Loan with' ||
              item.title === 'Personal/Unsecured Loan with'||
              item.title === 'Other - Specify')){
                return(
                  <StyledWidthDiv>
                    <h4>Liabilities</h4>
                    <h5>{item.title}</h5>                    
                    <DatePicker title='Date Account Opened'/>
                    <PriceInput title='Balance Outstanding'/>
                    <PriceInput title='Monthly Repayment'/>
                  </StyledWidthDiv> 
                )
            } else if (step===index+distance && (
              item.title === 'Credit Card with')){
                return(
                  <StyledWidthDiv>
                    <h4>Liabilities</h4>
                    <h5>{item.title}</h5>
                    <TextInput title={item.title}  />
                    <PriceInput title='Credit limit'/>
                    <DatePicker title='Date Account Opened'/>
                    <PriceInput title='Balance Outstanding'/>
                    <PriceInput title='Monthly Repayment'/>
                  </StyledWidthDiv> 
                )
            }
            
          })        
        }

        {covid==='false'&&
          backgroundHardship.map((item, index)=>{
            var distance = 0
            if(twoperson==='false'){
              distance = 50
            } else {
              distance = 57
            }
            if(step===index+distance){
              if(index===0){
                return(
                  <StyledWidthDiv>
                    <h4>Background to Hardship</h4>
                    <ValidateTextInput title={item.title} />                   
                  </StyledWidthDiv> 
                )
              } else if (index===1){
                return(
                  <AccidentResult title={item.title}/>
                )
              } else if (index===2 || index === 3){
                return(
                  <>
                    <h4>{item.title}</h4>
                    <DatePicker title="Date"/>
                  </>
                )
              } else if (index===4){
                return(
                  <>
                    <h4>{item.title}</h4>
                    <TextInput title="Text"/>
                  </>
                )
              } else if (index===5){
                return(
                  <>
                    <h4>{item.title}</h4>
                    <PriceInput title="AUD"/>
                  </>
                )
              }  else if (index===6){
                return(
                  <>
                    <FinanceProtection title={item.title}/>
                  </>
                )
              }       
            }    
          })   
          
        }
        {covid==='false'&&
          backgroundHardshipCont.map((item, index)=>{
            var distance = 0
            if(twoperson==='false'){
              distance = 57
            } else {
              distance = 64
            }
            if(step===index+distance){
              if(index===0){
                return(
                  <StyledWidthDiv>
                    <h4>Background to Hardship…Cont</h4>
                    <ValidateTextInput title={item.title} /> 
                    <h5 style={{marginTop:'30px'}}>{item.content}</h5>    
                    <FileUpload />              
                  </StyledWidthDiv> 
                )
              }
            }
          })         
        }
        {covid==='false'&&
          proposalAssistance.map((item, index)=>{
            var distance = 0
            if(twoperson==='false'){
              distance = 58
            } else {
              distance = 65
            }
            if(step===index+distance){
              if(index===0 || index===1){
                return(
                  <StyledWidthDiv>
                    <h4>Proposal for assistance</h4>
                    <h5 style={{marginTop:'60px'}}>{item.title}</h5>
                    <TextInput title="Specify months"/>                    
                  </StyledWidthDiv> 
                )
              } else if(index===2){
                return(
                  <StyledWidthDiv>
                    <h4>Proposal for assistance</h4>
                    <CheckBox title={item.title} /> 
                  </StyledWidthDiv> 
                )
              } else if(index===3){
                return(
                  <StyledWidthDiv>
                    <h4>Proposal for assistance</h4>
                    <CheckBox title={item.title} /> 
                  </StyledWidthDiv> 
                )
              } else if(index===4){
                return(
                  <StyledWidthDiv>
                    <h4>Proposal for assistance</h4>
                    <TextInput title="Other"/>
                  </StyledWidthDiv> 
                )
              }

            }
          })         
        }
        
        <StyledDiv>
          {twoperson==='true' && step===69 && covid==='false' ?
            <Button variant="contained" color="secondary" className={classes.color, classes.previewButton}  onClick={()=>before()}>
                PREVIEW
            </Button>
            :
            twoperson==='false' && step===58 && covid==='false' ?
            <Button variant="contained" color="secondary" className={classes.color, classes.previewButton}  onClick={()=>before()}>
                PREVIEW
            </Button>
            :
            <>
              <Button variant="contained" color="secondary" className={classes.color, classes.button}  onClick={()=>before()}>
                  BACK
              </Button> 
              <Button variant="contained" color="secondary" className={classes.color, classes.button}  onClick={()=>next()}>
                  Next
              </Button> 
            </>
          }
          
           
        </StyledDiv>      
      </StyledFormContainer>
    </StyledContentContainer>
  );
};

export default FormIndividual;
