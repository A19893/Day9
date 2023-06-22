import React,{useState} from 'react'
import OtpInput from 'react-otp-input';
import { useNavigate,useLocation} from 'react-router-dom';
import { Button } from 'antd';
const Otp = () => {
  const [otp, setOtp] = useState('');
  const navigate=useNavigate();
  const location=useLocation();
  console.log(location.state)
  const submitOtp=()=>{
    if(otp===process.env.REACT_APP_OTP){
     navigate("/profile",{state:location.state})
    }
  }
  return (
    <div className='otContainer'>
      <div className='otpContainer'>
      <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>&nbsp;&nbsp;</span>}
      renderInput={(props) => <input {...props} />}/>
      <div>
      <Button type="primary" onClick={(e)=>submitOtp()}>Submit</Button>
      </div>
      </div>
    </div>
  )
}

export default Otp