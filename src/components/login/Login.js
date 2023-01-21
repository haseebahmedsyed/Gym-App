import React, { useState,useContext, useEffect } from 'react'
import './Login.css'
import memberContext from '../../context/contextMember/memberContext';
import { useNavigate } from "react-router-dom";

function Login(props) {

    const context = useContext(memberContext);
    const {LoginMember,role,IsAuthentic}=context;
    const[cred , setCred]=useState({Email:"",Password:""});
    const navigate = useNavigate();

    const handleOnChange=(e)=>{
        setCred({...cred,[e.target.name]:e.target.value});
    }

    const handleOnClick=(e)=>{
        e.preventDefault();
        LoginMember(cred.Email,cred.Password);


    }

    const [see,setSee] = useState(false)
    const handlesee=()=>{
        if(see===false){
            setSee(true)
        }
        else{
            setSee(false)
        }
    }

    useEffect(()=>{
        props.progress(50);
        setTimeout(() =>{
            props.progress(75);
            props.progress(100);
    
        },500)
    },[])

    return (
        <>
            <div className="container-of-login">
                <h1 id="login-main-heading">WELCOME TO <div>THE MUSCLE STUDIO</div></h1>
                <div className="login-box">
                    <h1 id="login-heading">LOG <span>IN</span></h1>
                    <div className="input-field">
                        <div>
                            <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                            <input type="text" name='Email' onChange={handleOnChange} placeholder="Username" />
                        </div>
                    </div>

                    <div className="input-field">
                        <div>
                            <i className="fa fa-key fa-2x" aria-hidden="true"></i>
                            <input id="input-field-pwd" onChange={handleOnChange} name='Password' type={see ? "text": "password"} placeholder="Password" />
                            <div id="show-and-hide-eye">
                                <i onClick={handlesee} className="fa fa-eye fa-2x" aria-hidden="true"></i>
                                <i className="fa fa-eye-slash fa-2x" aria-hidden="true" style={{ display: 'none' }}></i>
                            </div>
                        </div>
                    </div>


                    <div id="login1-btn">
                        <button onClick={handleOnClick}>LOG IN</button>
                    </div>
                </div>
                <div className="container" style={{ visibility: 'hidden' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi consequatur tempora mollitia aliquam quisquam amet eligendi distinctio beatae, eius voluptates, quibusdam facere nesciunt. Assumenda dolorum corrupti officiis harum doloremque sapiente nisi laudantium sunt in voluptates saepe ullam distinctio, dignissimos optio consequatur repellat sin
                </div>
            </div>

        </>
    )
}

export default Login
