import React, { useState, useContext, useEffect, useRef } from 'react'
import './fee.css';
import memberContext from '../../context/contextMember/memberContext';
import feesContext from '../../context/contextFees/feescontext';
import emailjs from 'emailjs-com'




const Fees = (props) => {
    const context = useContext(memberContext)
    const context1 = useContext(feesContext)
    const { getFeeDate, getDate, getMonth ,succ} = context1
    const { FeePayment } = context;

    const [inputValue, setInputValue] = useState('');
    const [amount, setAmount] = useState('');
    const [disabledRadio, setDisabledRadio] = useState(false);
    const btnRef = useRef()
    const d = new Date()


    const handleOnClick =async () => {
        const mybtn = document.getElementById('pay-fees-btn');
        FeePayment(
            inputValue,
            "paid",
            inputValue === 'Titanium-plus' ? '8000' : inputValue === 'Titanium' ? '7000' : inputValue === 'Platinum' ? '5000' : inputValue === 'Gold' ? '4000' : inputValue === 'Silver' ? '3000' : ''
        )

        mybtn.disabled = true;
        mybtn.innerHTML = "Fees has been paid"


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
    


        emailjs.send("service_4lz9fxi", "template_sr7w43y",{
            Name:a.result[0].Name,
            Email : a.result[0].Email
        } , "szVphHAq3zxFU10sP").then(res=>console.log(res)).catch(err=>console.log(err));


            



    }

    const handleOnChange = (e) => {
        setAmount(e.target.value)
    }

    useEffect(() => {

        getFeeDate();
        if(succ){

            console.log(getMonth,parseInt(d.getMonth() + 1));
            
            const mybtn = document.getElementById('pay-fees-btn');
            if ((parseInt(d.getDate())!==getDate+1 || getDate<=parseInt(d.getDate())) && getMonth <= parseInt(d.getMonth() + 1)) {
                mybtn.disabled = true;
                mybtn.innerHTML = "Fees has been paid"
            }
            else {
                mybtn.disabled = false;
                mybtn.innerHTML = "Pay Fees"
                
            }
        }
        else{
            const mybtn = document.getElementById('pay-fees-btn');
            mybtn.disabled = false;
            mybtn.innerHTML = "Pay Fees"
        }
        


        props.progress(50);
        setTimeout(() => {
            props.progress(75);
            props.progress(100);

        }, 500)
    }, [])



    return (
        <div className="container-of-fees-payment">
            <div className="box-of-fees-payment">
                <h1 id="fees-payment-heading">FEES <span>PAYMENT</span></h1>
                <select onChange={(e) => { setInputValue(e.target.value) }} name='Package' className="input-fields-of-fees-payment" id="select-package">
                    <option >Select Package</option>
                    <option value="Titanium-plus">Titanium Plus</option>
                    <option value="Titanium">Titanium</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                </select>

                {console.log(inputValue)}
                <input onChange={handleOnChange} className="input-fields-of-fees-payment" name='Amount' value={inputValue === 'Titanium-plus' ? '8000' : inputValue === 'Titanium' ? '7000' : inputValue === 'Platinum' ? '5000' : inputValue === 'Gold' ? '4000' : inputValue === 'Silver' ? '3000' : ''} type="text" />

                <div className="div-for-card-payment-method">
                    <div>
                        <label for="owner-of-card">Owner</label>
                        <input disabled={disabledRadio === true} id="owner-of-card" type="text" className="expire-date-and-owner" />
                    </div>

                    <div>
                        <label for="card-number-of-owner">Card Number</label>
                        <input disabled={disabledRadio === true} type="text" id="card-number-of-owner" />
                    </div>
                </div>

                <div className="div-for-card-payment-method">
                    <div>
                        <label for="exp-date-of-card">Expire Date</label>
                        <input disabled={disabledRadio === true} type="date" className="expire-date-and-owner" />
                    </div>

                    <div>
                        <label for="ccv-of-card">CCV</label>
                        <input disabled={disabledRadio === true} type="number" />
                    </div>
                </div>
                <button ref={btnRef} onClick={handleOnClick} id="pay-fees-btn" >PAY FEES</button>
            </div>
        </div>

    )
}

export default Fees
