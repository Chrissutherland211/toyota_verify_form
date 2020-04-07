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
import TextInput from '../../components/Form/TextInput';
import DatePicker from '../../components/Form/DatePicker';
import FinanceProtection from '../../components/Form/FinanceProtection';
import Circumstances from '../../components/Form/Circumstances';
import CircumstancesLoan from '../../components/Form/CircumstancesLoan';
import { useHistory } from 'react-router-dom';
import { proposalAssistance, backgroundHardshipCovid} from '../../utils/questions';


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
  const covid_individual = localStorage.getItem('covid_individual')
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
      history.goBack()     
    } else {
      await setStep(parseInt(currentStep)-1)
      await localStorage.setItem('step',parseInt(currentStep)-1)
    }
  }
 

  console.log(covid)

  
  
  return (
    <StyledContentContainer color={theme.palette[data.brand].background_color}>
      <StyledFormContainer>
        {covid==='true'&& covid_individual ==='false'&&
          backgroundHardshipCovid.map((item, index)=>{
            if(step===index) {
              if(index===0){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <Circumstances title={item.title}/>
                  </>
                )
              } else if (index===1 || index===2){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <h5>{item.title}</h5>
                    <DatePicker title="Date"/>
                  </>
                )                
              } else if (index===3){                
                return(
                  <>
                  {/* <h4>Background to Hardship</h4> */}
                    <FinanceProtection title={item.title}/>
                  </>
                )
                               
              }             
            }
          })
        }
        {covid==='true'&& covid_individual ==='true'&&
          backgroundHardshipCovid.map((item, index)=>{
            if(step===index) {
              if(index===0){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <CircumstancesLoan title={item.title}/>
                  </>
                )
              } else if (index===1 || index===2){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <h5>{item.title}</h5>
                    <DatePicker title="Date"/>
                  </>
                )                
              } else if (index===3){                
                return(
                  <>
                  {/* <h4>Background to Hardship</h4> */}
                    <FinanceProtection title={item.title}/>
                  </>
                )
                               
              }             
            }
          })
        }
        {/* {covid==='true'&& covid_individual ==='false'&&
          
          backgroundHardshipContCovid.map((item, index)=>{
            var distance = 4
            
            if(step===index + distance) {
              if(index===0){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <h5>{item.title}</h5>
                    <FileUpload title="Medical Certificate"/>
                  </>
                )
              } else if (index===1){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <h5>{item.title}</h5>
                    <h5>Medical Certificate & Evidence of relationship:</h5>
                    <FileUpload title="Birth certificate"/>
                    <br/>
                    <FileUpload title="Tenancy agreement"/>
                  </>
                )                  
              } else if (index===2){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <h5>{item.title}</h5>
                    <h5>Payslip and Termination letter/notice - Individual</h5>
                    <FileUpload title="Payslip"/>
                    
                  </>
                )                  
              }  else if (index===3){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <h5>{item.title}</h5>
                    <h5>Payslip – Individual Bank Statement – Individual & Company Letter from the Accountant - Company</h5>
                    <FileUpload title="Bank Statement"/>
                    
                  </>
                )                  
              }  else if (index===4){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <TextInput title={item.title} />                   
                    
                  </>
                )                  
              }         
            }
          })
        } */}
        {/* {covid==='true'&& covid_individual ==='true'&&
          
          backgroundHardshipContCovidLoan.map((item, index)=>{
            var distance = 4
            
            if(step===index + distance) {
              if(index===0){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <h5>{item.title}</h5>
                    <FileUpload title="Medical Certificate"/>
                  </>
                )
              } else if (index===1){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <h5>{item.title}</h5>
                    <h5>Medical Certificate & Evidence of relationship:</h5>
                    <FileUpload title="Birth certificate"/>
                    <br/>
                    <FileUpload title="Tenancy agreement"/>
                  </>
                )                  
              } else if (index===2){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <h5>My revenue or Income has reduced due to COVID-19</h5>
                    <h5>Payslip and Termination letter/notice - Individual</h5>
                    <FileUpload title="Payslip"/>
                    
                  </>
                )                  
              }  else if (index===3){
                return(
                  <>
                    <h4>Background to Hardship</h4>
                    <TextInput title={item.title} />                   
                    
                  </>
                )                  
              }         
            }
          })
        } */}

        {covid==='true'&&
          proposalAssistance.map((item, index)=>{
            var distance = 4
            if(step===index+distance) {
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
            <>
                <Button variant="contained" color="secondary" className={classes.color, classes.button}  onClick={()=>before()}>
                    BACK
                </Button> 
                <Button variant="contained" color="secondary" className={classes.color, classes.button}>
                    PREVIEW
                </Button>
            </>
            :
            twoperson==='false' && step===62 && covid==='false' ?
            <>
                <Button variant="contained" color="secondary" className={classes.color, classes.button}  onClick={()=>before()}>
                    BACK
                </Button> 
                <Button variant="contained" color="secondary" className={classes.color, classes.button}>
                    PREVIEW
                </Button>
            </>
            :
            covid==='true' && step===8 ?
            <>
              <Button variant="contained" color="secondary" className={classes.color, classes.button}  onClick={()=>before()}>
                    BACK
                </Button> 
              <Button variant="contained" color="secondary" className={classes.color, classes.button}>
                    PREVIEW
              </Button>
            </>            
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
