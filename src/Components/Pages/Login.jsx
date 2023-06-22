import React,{useState} from 'react'
import { Input,Button } from 'antd';
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {doAuth,addNumber } from '../../Features/AuthSlice';
const Login = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.authentication.mynumbers)
  console.log(data);
  const[warning,setWarning]=useState('');
  const[number,setNumber]=useState('');
  const navigate=useNavigate();
  const verify=()=>{
    if(number?.length<10 || number?.length>10){
      setWarning("Please Enter Valid Phone Number")
    }
    else{
      let gotSame=false;
      dispatch(doAuth());
      data?.map((item)=>{
        if(item===number){
          gotSame=true;
           navigate('/otp',{state:number});
        }
      })
      if(gotSame===false){
      dispatch(addNumber(number));
      navigate('/otp',{state:number});
      }
    }
  }
  return (
    <div className='logContainer'>
      <div className='loginContainer'>
      <Input placeholder="Enter your Number" style={{width:200}} onChange={e=>{setNumber(e.target.value);setWarning('')}}/>
      <span>{warning}</span>
      </div>
      <div className='submitLogin'>
      <Button type="primary" onClick={()=>verify()}>Submit</Button>
      </div>
    </div>
  )
}

export default Login