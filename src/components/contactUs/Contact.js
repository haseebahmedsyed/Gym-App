import React, { useContext, useEffect, useState } from 'react'
import './Contact.css'
import ReCAPTCHA from "react-google-recaptcha";
import contactPic from '../../contactPic.jpeg'
import Footer from '../Footer/Footer';
import feesContext from '../../context/contextFees/feescontext';

function Contact(props) {

    const context = useContext(feesContext);
    const { addContacts } = context;

    const [myValues, setMyValues] = useState({ name: "", email: "", phone: "", Message: "" });
    
    const [namee, setName] = useState("")
    const [phonee, setPhone] = useState("")
    const [email, setEmail] = useState("")
    

    
    const handleFormChange = (e) => {
        setMyValues({ ...myValues, [e.target.name]: e.target.value })
    }
    
    const captchaChange = (e) => {
        alert("changed")
    }
    
    
    const handleOnSubmit1 = (e) => {
        e.preventDefault();
        addContacts(myValues.name,myValues.email,myValues.phone,myValues.Message);
        setMyValues({ name: "", email: "", phone: "", Message: "" })

    }

    const myName = document.getElementsByClassName("name")
    const myEmail = document.getElementsByClassName("email")
    const myPhone = document.getElementsByClassName("phone")

    console.log(myName)


    const namePattern = /^[a-zA-Z ]{3,18}$/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^03+[0-9]{9}$/;

    const nameKeyUp = (e) => {
        if (e.target.value === "") {
            setName("")
        }
        else if (namePattern.test(e.target.value)) {
            setName(true)
        }
        else {
            setName(false)
        }
    }

    const emailKeyUp = (e) => {
        if (e.target.value === "") {
            setEmail("")
        }
        else if (emailPattern.test(e.target.value)) {
            setEmail(true)
        }
        else {
            setEmail(false)
        }
    }

    const phoneKeyUp = (e) => {
        if (e.target.value === "") {
            setPhone("")
        }
        else if (phonePattern.test(e.target.value)) {
            setPhone(true)
        }
        else {
            setPhone(false)
        }
    }

    useEffect(() => {
        props.progress(50);
        props.progress(75);
    }, [])


    return (
        <>
            <div className="google-map-div" id='map-div'>
                <div className="contact-us">
                    <h1 className="font-white visit-us-heading">CONTACT<span className="font-yellow"> US</span></h1>
                </div>

                <iframe className="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0627914567626!2d67.1134920144789!3d24.92993074861049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339f13cb5e21d%3A0x4430294e9ef0ca33!2sNED%20University%20student%20gate!5e0!3m2!1sen!2s!4v1650061840400!5m2!1sen!2s"
                    height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                {props.progress(100)}
            </div>

            <div className="main-contact-us">
                <div className="subMainDiv">
                    <div className="imgDiv-contact-us">
                        <img className="img-contact-us" src={contactPic} alt="" />
                    </div>

                    <div className="form-div">

                        <div className="formtext-div">
                            <p className="contact-us-text"><span className="font-white">Get in </span><span
                                className="font-yellow">Touch</span>
                            </p>

                        </div>
                        <div className="formInputFields">
                            <form autoComplete="off" method="post" action="" onSubmit={handleOnSubmit1}>

                                <i className="fa fa-user" aria-hidden="true"></i>
                                <input onChange={handleFormChange} value={myValues.name} className="contact-us-input name contact-form-inputs" type="text" onKeyUp={nameKeyUp} name="name" placeholder="Name" id={namee === "" ? "null" : namee ? "success" : "error"} /><span
                                    className="guide-input">Name should be atleast 6 characters long.</span><br /><br />


                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <input onChange={handleFormChange} value={myValues.email} className="contact-us-input email contact-form-inputs" onKeyUp={emailKeyUp} type="text" name="email" placeholder="Email address" id={email === "" ? "null" : email ? "success" : "error"} /><br /><br />


                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <input onChange={handleFormChange} value={myValues.phone} className="contact-us-input phone contact-form-inputs" onKeyUp={phoneKeyUp} type="text" name="phone"
                                    placeholder="Phone" id={phonee === "" ? "null" : phonee ? "success" : "error"} /><span className="guide-input">[Example: 03XXXXXXXXX]</span><br /><br />


                                <i className="fa fa-comments" aria-hidden="true"></i>
                                <textarea onChange={handleFormChange} value={myValues.Message} style={{ resize: 'none' }} name="Message" id="message-us" cols="80" rows="7" className='contact-form-inputs'
                                    placeholder="Message us" maxLength="480"></textarea><br /><br />

                                <input disabled={
                                    (myValues.name==="" ||myValues.email===""||myValues.phone===""||myValues.Message==="")} className="contact-us-submit" type="submit" />

                            </form>

                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact
