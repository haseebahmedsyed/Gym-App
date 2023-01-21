import React, { useContext, useEffect, useState } from 'react'
import './RegisterNow.css'
import ReCAPTCHA from "react-google-recaptcha";
import Footer from '../Footer/Footer';
import memberContext from '../../context/contextMember/memberContext';
import Swal from 'sweetalert2'

function RegisterNow(props) {

    const context = useContext(memberContext);
    const { createMember } = context

    const [credentials, setCredentials] = useState({
        Package: "none",
        Name: "",
        Email: "",
        Password: "",
        Mobile: "",
        Age: "",
        Weight: "",
        Gender: ""
    })


    const [ProfilePics, setProfile] = useState("");


    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleOnClick = (e) => {
        e.preventDefault();

        createMember(credentials.Package,
            credentials.Name,
            credentials.Email,
            credentials.Password,
            credentials.Mobile,
            credentials.Age,
            credentials.Weight,
            credentials.Gender,
        )

        setCredentials({
            Package: "none",
            Name: "",
            Email: "",
            Password: "",
            Mobile: "",
            Age: "",
            Weight: "",
            Gender: ""
        })
    }

    const captchaChange = (e) => {
        alert("changed")
    }

    const MynamePattern = /^[a-zA-Z ]{3,18}$/
    const MyemailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const MyphonePattern = /^03+[0-9]{9}$/;


    useEffect(() => {
        props.progress(50);
        setTimeout(() => {
            props.progress(75);
            props.progress(100);

        }, 500)
    }, [])

    return (
        <>
            <section id="register-now-section">
                <div className="img-div py-3">
                    <h1 className="register-now-heading"><span style={{color: 'white'}}>REGISTER </span>NOW</h1>
                    <img src="https://atmosphere.com.pk/wp-content/uploads/2020/10/Register.jpg" alt="" />
                </div>

                <div className="register-now-div">

                    <form >


                        <label>Name:</label>
                        <input onChange={handleOnChange} value={credentials.Name} name='Name' className="regNow-inputs" type="text" placeholder="Enter Your Name" />

                        <label >Email Address:</label>
                        <input className="regNow-inputs" value={credentials.Email} onChange={handleOnChange} name='Email' type="email" placeholder="Enter Your Email Address" />

                        <label >Password:</label>
                        <input className="regNow-inputs" value={credentials.Password} onChange={handleOnChange} name='Password' type="password" placeholder="Enter Your Password" />

                        <label Contact> Mobile:</label>
                        <input className="regNow-inputs" value={credentials.Mobile} onChange={handleOnChange} name='Mobile' type="text" placeholder="Enter Your Phone Number" />

                        <label htmlFor="age">Age:</label>
                        <input className="regNow-inputs" value={credentials.Age} onChange={handleOnChange} name='Age' type="number" placeholder="Enter Your Age" />

                        <label> Weight:</label>
                        <select className="regNow-inputs" value={credentials.Weight} name='Weight' onChange={handleOnChange}>
                            <option value="weight">Select Your Weight Range</option>
                            <option value="30-40">30-40 Kg</option>
                            <option value="40-50">40-50 Kg</option>
                            <option value="50-60">50-60 Kg</option>
                            <option value="60-70">60-70 Kg</option>
                            <option value="70-80">70-80 Kg</option>
                            <option value="80-90">80-90 Kg</option>
                            <option value="90-100">90-100 Kg</option>
                            <option value="100-110">100-110 Kg</option>
                            <option value="110-120">110-120 Kg</option>
                        </select>

                        <label htmlFor="gender">Gender:</label>
                        <span id="gender-radio-button">
                            <input onChange={handleOnChange} type="radio" name="Gender" value="Male" /><span>Male</span>
                            <input onChange={handleOnChange} type="radio" name="Gender" value="Female" /><span>Female</span>
                        </span>

                        <button disabled={
                            (credentials.Name === "" || credentials.Email === "" || credentials.Password === "" || credentials.Mobile === "" || credentials.Age === "" || credentials.Weight === "" || credentials.Gender === "")

                        } type="btn" onClick={handleOnClick} id="submit-btn" >SUBMIT</button>
                    </form>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default RegisterNow






































