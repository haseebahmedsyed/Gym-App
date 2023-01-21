import React, { useEffect, useState } from 'react'
import MemberContext from './memberContext';
import { Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'



function MemberState(props) {

  const navigate = useNavigate();
  const [newPic,setPic] = useState('');
  const [role, setRole] = useState(null);
  const [IsAuthentic,setIsAuthentic] = useState(false);
  const [name,setName] = useState(null);

  const myJson={};

  useEffect(() => {
    GetMember();
  },[])


  const createMember = async (Package, Name, Email, Password, Mobile, Age, Weight, Gender) => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: await JSON.stringify({ Package, Name, Email, Password, Mobile, Age, Weight, Gender })
    });
    const json = await response.json();

    const a = await JSON.parse(JSON.stringify(json));

    if(!a.success){
      Swal.fire({
        title: 'Error!',
        text: `${a.msg}`,
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }else if(a.success){
      Swal.fire({
        title: 'success!',
        text: `${a.msg}`,
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(result => {
        if(result.isConfirmed){
          navigate('/login')
        }
      })
    }    else{
      Swal.fire({
        title: 'Error!',
        text: `Something Went Wrong!!`,
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }


  const LoginMember = async (Email, Password) => {

    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials:'include',
      body: await JSON.stringify({ Email, Password })

    });
    const json = await response.json();

    const a = await JSON.parse(JSON.stringify(json));

    console.log(a.success,a.role,a.token);

    if(a.success){
      setRole(a.role);
      setIsAuthentic(true)
      setName(a.name)

      Swal.fire({
        title: 'success!',
        text: `${a.msg}`,
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(result => {
        if(result.isConfirmed && a.role==='admin'){
          navigate('/dashboard')
        }
        else if(result.isConfirmed && a.role==='user'){
          navigate('/')

        }
      })

    }
    else if(!a.success){
      Swal.fire({
        title: 'Error!',
        text: `${a.msg}`,
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: `Something Went Wrong!!`,
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

  }


  const GetMember = async () => {

    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/get/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials : 'include'

    });
    const json = await response.json();

    const a = await JSON.parse(JSON.stringify(json));


    if(a.success){
      setRole(a.result[0].Role);
      setIsAuthentic(true)
      setName(a.result[0].Name)

      
      // navigate('/payFees')
    }

  }

  

  const LogoutMember = async () => {

    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/user/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials:'include'

    });
    const json = await response.json();

    const a = await JSON.parse(JSON.stringify(json));
    console.log(a.msg);

    if(a.success){
      setRole(null);
      setIsAuthentic(false)
      setName(null)

      Swal.fire({
        title: 'success!',
        text: `${a.msg}`,
        icon: 'success',
        confirmButtonText: 'OK'
      })

      navigate('/login')
    }

  }

  const FeePayment = async(Package,Status,Amount)=>{
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/fee/pay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials:'include',
      body: await JSON.stringify({ Package,Status,Amount })

    });
    const json = await response.json();
  }
  const uploadImage = async(url)=>{
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/member/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials:'include',
      body: await JSON.stringify({url})

    });
    const json = await response.json();
  }

  const getImage = async()=>{
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/member/getProfile`, {
      method: 'GET',
      credentials:'include'

    });
    const json = await response.json();
    console.log(json.result.ProfilePic);
    setPic(json.result.ProfilePic)
  }




  return (
    <MemberContext.Provider value={{ createMember, LoginMember,role,IsAuthentic,name,LogoutMember,FeePayment,uploadImage,getImage,newPic}}>
      {props.children}
    </MemberContext.Provider>
  )
}

export default MemberState
