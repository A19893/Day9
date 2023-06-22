import React,{useState} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
const Profile = () => {
  const navigate=useNavigate();
  const[data,setData]=useState('');
  const getToForm=()=>{
    navigate("/form")
  }
  const viewBtn=(data)=>{
    setData(data);
    showModal()
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const location=useLocation();
  const number=location.state;
  const cvData1=useSelector((state)=>state.user.Resumes);
  console.log(cvData1)
  console.log(number);
  return (
    <div className="profileContainer">
      <div className='proContainer'>
        {
          cvData1?.map((item)=>{
            // if(item.CV.phone===number)
            return(
              <>
            <div className='displaying'>
              <div>
             <img src="https://d1bvpoagx8hqbg.cloudfront.net/originals/how-to-take-a-good-photo-for-your-cv-our-top-tips-3d51fa22c6f19bb8fdb13a3834bba98c.jpg" alt="can't"/>
              </div>
             <button onClick={(e)=>viewBtn(item)}>View</button>
            </div>
            </>
            )
          })
        }
      </div>
      <div className="icon">
          <AddCircleIcon onClick={()=>getToForm()}/>
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <h1>Info:</h1>
       <p>Name:{data.CV?.name}</p>
      <p>Email:{data.CV?.email}</p>
      <p>Phone:+{data.CV?.prefix} {data.CV?.phone}</p>
      <h1>Introduction</h1>
      <p>{data.CV?.intro}</p>
      <h1>Education</h1>
      <p>{data.CV?.university}</p>
      <p>{data.CV?.school}</p>
      <h1>Skills</h1>
      {
        
      }
    </Modal>
    </div>
  )
}

export default Profile