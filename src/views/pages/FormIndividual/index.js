/* eslint-disable react/no-multi-comp */

import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { StyledContentContainer } from '../../styled/Containers';
import { StyledFormContainer } from '../../components/Form/style';
import { StyledDiv, StyledWidthDiv } from './style';
import theme from '../../../utilities/theme';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PriceInput from '../../components/Form/PriceInput';
import TextInput from '../../components/Form/TextInput';
import { useHistory } from 'react-router-dom';
import { borrowerOne, expenses, assets } from '../../utils/questions';


const useStyles = makeStyles((theme) => ({
  formControl: {
      width: '100%'
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
  color: {
      backgroundColor: "#eb0a1e"
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
 

  console.log(step)

  
  
  return (
    <StyledContentContainer color={theme.palette[data.brand].background_color}>
      <StyledFormContainer>
        {covid&& twoperson==='true'&&
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

        {covid&& twoperson==='true'&&
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


        {covid&& twoperson==='false'&&
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
      

        {covid&&
          expenses.map((item, index)=>{
            var distance = 0
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

        {covid&&
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
        <StyledDiv>
          <Button variant="contained" color="secondary" className={classes.color, classes.button}  onClick={()=>before()}>
              BEFORE
          </Button> 
          <Button variant="contained" color="secondary" className={classes.color, classes.button}  onClick={()=>next()}>
              Next
          </Button>  
        </StyledDiv>      
      </StyledFormContainer>
    </StyledContentContainer>
  );
};

export default FormIndividual;
