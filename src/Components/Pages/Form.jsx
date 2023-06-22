import {
    AutoComplete,
    Button,
    Form,
    Input,
    Select,
    Modal
  } from 'antd';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addData } from '../../Features/UserSlice';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;
const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
const InputForm=()=>{
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const[data,setData]=useState(null);
    const dispatch=useDispatch();
    const navigate=useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
       dispatch(addData({id:Date.now(),cvData:values}));
       navigate("/profile")
   };
   const cancelBtn=()=>{
    navigate("/profile")
   }
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
          <Option value="91">+91</Option>
          <Option value="90">+90</Option>
          <Option value="87">+89</Option>
        </Select>
      </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
      if (!value) {
        setAutoCompleteResult([]);
      } else {
        setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
      }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
      label: website,
      value: website,
    }));
    return (
        <>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '91',
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
      name="skills"
      label="Skills"
      rules={[
        {
          required: true,
          message: 'Please select atleast one skill!',
          type: 'array',
        },
      ]}
    >
      <Select mode="multiple" placeholder="Please select your skills">
        <Option value="React">React</Option>
        <Option value="Angular">Angular</Option>
        <Option value="DSA">DSA</Option>
        <Option value="Node JS">Node JS</Option>
      </Select>
    </Form.Item>
        <Form.Item
          name="school"
          label="Enter School Name"
          rules={[
            {
              required: true,
              message: 'Please input your School',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="schoolMarks"
          label="Enter School Marks"
          rules={[
            {
              required: true,
              message: 'Please input your Marks!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="university"
          label="Enter University"
          rules={[
            {
              required: true,
              message: 'Please input your University',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="graduatingYear"
          label="Enter Graduating Year"
          rules={[
            {
              required: true,
              message: 'Please input your year!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="cgpa"
          label="Enter Your CGPA "
          rules={[
            {
              required: true,
              message: 'Please input your CGPA !',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
  
  
        <Form.Item
          name="intro"
          label="Intro"
          rules={[
            {
              required: true,
              message: 'Please input Intro',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={50} />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
  
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
  
        <Form.Item
          name="website"
          label="Website"
          rules={[
            {
              required: true,
              message: 'Please input website!',
            },
          ]}
        >
          <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
            <Input />
          </AutoComplete>
        </Form.Item>
        <Form.Item
          name="project1"
          label="Enter About Project 1"
          rules={[
            {
              required: true,
              message: 'Please input Project',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={200} />
        </Form.Item>
        <Form.Item
          name="project2"
          label="Enter About Project 2"
          rules={[
            {
              required: true,
              message: 'Please input Project ',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={200} />
        </Form.Item>
  
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button type="primary" htmlType="reset">
            Reset
          </Button>
          <Button type="primary" htmlType="reset" onClick={showModal}>
            Preview
          </Button>
          <Button type="primary" htmlType="reset" onClick={()=>cancelBtn()}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
        {...formItemLayout}
        form={form}
        name="register1"
        onFinish={onFinish}
        initialValues={{
          prefix: '91',
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Name"
          
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input  />
        </Form.Item>
        <Form.Item
      name="select-multiple"
      label="Skills"
      rules={[
        {
          required: true,
          message: 'Please select atleast one skill!',
          type: 'array',
        },
      ]}
    >
      <Select mode="multiple" placeholder="Please select your skills">
        <Option value="red">React</Option>
        <Option value="green">Angular</Option>
        <Option value="blue">DSA</Option>
        <Option value="orange">Node JS</Option>
      </Select>
    </Form.Item>
        <Form.Item
          name="school"
          label="Enter School Name"
          rules={[
            {
              required: true,
              message: 'Please input your School',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="schoolMarks"
          label="Enter School Marks"
          rules={[
            {
              required: true,
              message: 'Please input your Marks!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="university"
          label="Enter University"
          rules={[
            {
              required: true,
              message: 'Please input your University',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="graduatingYear"
          label="Enter Graduating Year"
          rules={[
            {
              required: true,
              message: 'Please input your year!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="cgpa"
          label="Enter Your CGPA "
          rules={[
            {
              required: true,
              message: 'Please input your CGPA !',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
  
  
        <Form.Item
          name="intro"
          label="Intro"
          rules={[
            {
              required: true,
              message: 'Please input Intro',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={50} />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
  
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
  
        <Form.Item
          name="website"
          label="Website"
          rules={[
            {
              required: true,
              message: 'Please input website!',
            },
          ]}
        >
          <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
            <Input />
          </AutoComplete>
        </Form.Item>
        <Form.Item
          name="project1"
          label="Enter About Project 1"
          rules={[
            {
              required: true,
              message: 'Please input Project',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={200} />
        </Form.Item>
        <Form.Item
          name="project2"
          label="Enter About Project 2"
          rules={[
            {
              required: true,
              message: 'Please input Project ',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={200} />
        </Form.Item>
  
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
      </Form>
      </Modal>
      </>
    );
  
  }
  
  export default InputForm