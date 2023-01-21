import React, { useContext, useEffect, useRef, useState } from 'react'
import './DashContacts.css'
import feesContext from '../../context/contextFees/feescontext'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'

function DashContacts() {

    const context = useContext(feesContext);
    const { getContacts, cont } = context;

    const contactRef = useRef(null)
    const [myemail, setMyEmail] = useState(null)
    const [myname, setMyName] = useState(null)

    const [reply, setReply] = useState("");

    const handlemodalchange = (e) => {
        setReply(e.target.value)
    }

    const handleSubmitOnClick = (e) => {
        e.preventDefault();
        emailjs.send("service_k7is21m", "template_jaujqw6", {
            Email: myemail,
            message: reply,
            Name: myname
        }, "AVpSZwnZ-0bHhUzCx").then(res => console.log(res)).catch(err => console.log(err));

        setMyEmail(null);
        setReply("");
        setMyName(null);
    }

    useEffect(() => {
        getContacts();
    })


    return (
        <>
            <div className="header contactheading">
                <h1><span className="whiteFont">CONTACT US - </span><span className="yellowFont">RESPONSES</span></h1>
            </div>
            <table className='table contact'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Messages</th>
                        <th>Reply</th>

                    </tr>
                </thead>
                <tbody >
                    {
                        cont.map((user) => {
                            return <tr>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Phone}</td>
                                <td><button id='sweetButton' onClick={() => {
                                    Swal.fire({
                                        title: 'Message',
                                        text: `${user.Message}`,
                                        confirmButtonText: 'close',
                                    })
                                }} >View</button></td>
                                <td><i onClick={() => {
                                    contactRef.current.click()
                                    setMyEmail(null)
                                    setMyEmail(user.Email)
                                    setMyName(null);
                                    setMyName(user.Name);

                                }} class="fa fa-reply-all" aria-hidden="true"></i></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={contactRef} data-bs-target="#exampleModalCenter">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content" >
                        <div className="modal-header" style={{ backgroundColor: "grey" }}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{ color: 'white', backgroundColor: 'black', fontSize: "40px" }}>

                            <label htmlFor="Price" className="LabelShopGearPortal">Reply:</label>
                            <textarea onChange={handlemodalchange} name="textArea" id="mytxtArea" cols="22" rows="5"></textarea>
                        </div>
                        <div className="modal-footer" style={{ backgroundColor: "grey" }}>
                            <button onClick={handleSubmitOnClick} style={{ backgroundColor: 'red',height:'50px',width:"100px", color: 'white' }} type="submit" className="btn btn-secondary" data-bs-dismiss="modal" value={"Send"}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default DashContacts
