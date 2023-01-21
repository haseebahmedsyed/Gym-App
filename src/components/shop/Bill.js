import React, { useRef, useState ,useContext, useEffect} from 'react'
import { useNavigate } from 'react-router';
import Footer from '../Footer/Footer';
import cartContext from '../../context/cartContext';
import './Bill.css'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

function Bill(props) {

  const refopen = useRef(null);
  const navigate = useNavigate()
  const array = JSON.parse(localStorage.getItem('cartArray'))
  const context = useContext(cartContext)

  const[myCredentials,setMyCredentials]=useState({Name:"",City:"",Address:"",Postalcode:"",Email:"",Phone:"",Deliverycharges:"",Items:[],Paymentmethod:"",Owner:"",ExpireDate:"",CardNum:"",CCV:""})

  const total = array.reduce(function (total, obj) {
    return (
      total += Number(obj.quantity) * Number(obj.ProductPrice)
    )
  }, 0)

  const len = (JSON.parse(localStorage.getItem('cartArray'))).length


  const cityPattern2 = /^[a-zA-Z ]{3,18}$/
  const addressPattern2 = /^[a-zA-Z0-9 ,-]{3,30}$/
  const postalcodePattern2 = /^[0-9]{5}$/
  const emailPattern2 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern2 = /^03+[0-9]{9}$/;
  const ownerPattern2 = /^[a-zA-Z ]{3,18}$/
  const cardNumPattern2 = /^[4||5]{1}[0-9]{15}$/
  const ccvPattern2 = /^[0-9]{3}$/


  const[payMethod,setPayMethod]=useState('Cash On Delivery')



  const [checker,SetChecker]=useState(null)

    const handleRegOnChange=(e)=>{
      setMyCredentials({...myCredentials,[e.target.name]:e.target.value})

    }

    useEffect(()=>{
      props.progress(50);
      setTimeout(() =>{
          props.progress(75);
          props.progress(100);
  
      },500)
    },[])

    function sendEmail(e){
      e.preventDefault();
      let newArray = JSON.parse(localStorage.getItem('cartArray'));
  
      context.addOrder(myCredentials.Name,myCredentials.City,myCredentials.Address,myCredentials.Postalcode,myCredentials.Email,myCredentials.Phone,1000,newArray,myCredentials.Paymentmethod);
  
  
      emailjs.sendForm('service_4vk2yix','template_niek45q',e.target,'szVphHAq3zxFU10sP').then(res=>console.log(res));

      Swal.fire({
        title: 'Thanks for shopping!!!',
        text: `Wait for 15 days for delivery`,
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(result=>{
        if(result.isConfirmed || result.isDenied){
          navigate('/shop');
        }
      })

  
      localStorage.setItem("cartArray", JSON.stringify([]))
      localStorage.setItem("itemNo",JSON.stringify(null))
      context.setMyItems(0)


  
  }


  return (
    <>

      <div className="container py-5">

        <div className="summary">
          <h1 className='text-center' style={{ color: '#f6c501' }}>SUMMARY</h1>
          <hr />
          <h3 className='text-center'> {len} Items in cart  <i className="fa fa-shopping-cart" aria-hidden="true"></i></h3>
          <hr />
          <table className="tables overflow_control my-5">
            <thead>
              <tr className='tr'>
                <th>Product Name</th>
                <th>Quantity</th>
                <th className='px-3'>Price</th>
              </tr>
            </thead>
            <tbody >

              {array.map((element, i) => {
                return <tr >
                  <td className='px-2 py-2' >{element.ProductName}</td>
                  <td className='px-4'>{element.quantity}</td>
                  <td className='px-2'>{element.quantity * element.ProductPrice}</td>
                </tr>
              })}



            </tbody>
          </table>
          <hr />

          <h2 className='text-center'>Total Price : {total}</h2>
        </div>
        <div className="checkout" >
          <h1 className='text-center mb-4' style={{ color: '#f6c501' }}>CHECKOUT</h1>
          <form onSubmit={sendEmail}>


          <div className='py-2'>
            <label >Name</label><br />
            <input className='inputBoxes' value={myCredentials.Name} style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange}  type="text" name="Name"  required />
          </div>  
          <div className='py-2'>
            <label >City</label><br />
            <input className='inputBoxes' value={myCredentials.City} style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange}  type="text" name="City"  required />
          </div>  
          <div className='py-2'>
            <label >Address</label><br />
            <input className='inputBoxes' value={myCredentials.Address} style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange} type="text" name="Address"  required />
          </div>
          <div className='py-2'>
            <label >Postal Code</label><br />
            <input className='inputBoxes' value={myCredentials.Postalcode} style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange} type="text" name="Postalcode"  required />
          </div>
          <div className='py-2'>
            <label >Email</label><br />
            <input className='inputBoxes' value={myCredentials.Email} style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange} type="email" name="Email"  required />
          </div>
          <div className='py-2'>
            <label >Phone</label><br />
            <input className='inputBoxes' value={myCredentials.Phone} style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange} type="tel" name="Phone"  required />
          </div>

          <div className='my-3'>
            <p className='text-center' style={{ fontSize: '27px' }}>SELECT PAYMENT METHOD</p>

            <div className="row my-5 text-center">
              <div className="col-md-6">
                <input type="radio" onChange={handleRegOnChange} onClick={(e)=>{setPayMethod(e.target.value)}} value='Pay With Card' name="Paymentmethod" id='methodPay' />
                <label className='mx-3' >Pay With Card</label>
              </div>
              <div className="col-md-6">
                <input type="radio" onChange={handleRegOnChange} onClick={(e)=>{setPayMethod(e.target.value)}} value='Cash On Delivery' name="Paymentmethod" id='methodPay' />
                <label className='mx-3' >Cash On Delivery</label>
              </div>
            </div>

            <div className='row my-2'>
              <div className='col-md-6'>
                <label>Owner</label><br />
                <input className='pay my-2' value={myCredentials.Owner} disabled={payMethod==='Cash On Delivery'} style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange}  type="text" name='Owner' />

              </div>
              <div className="col-md-6">
                <label>Card Number</label><br />
                <input disabled={payMethod==='Cash On Delivery'} value={myCredentials.CardNum} className='pay my-2' style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange}  type="text" name='CardNum' />
              </div>

              <div className="col-md-6">
                <label>Expire Date</label><br />
                <input disabled={payMethod==='Cash On Delivery'} value={myCredentials.ExpireDate} className='pay my-2' style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange}  type="date" name='ExpireDate' />
              </div>
              {/* </div> */}

              <div className="col-md-6">
                <label>CCV</label><br />
                <input disabled={payMethod==='Cash On Delivery'} value={myCredentials.CCV} className='pay my-2' style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange} type="text" name='CCV' />
              </div>
            </div>

          </div>
          <div className="btnConfirmPurchase">
            <input type="submit" value="CONFIRM PURCHASE" className='btn-purchase' id="submit-btn-purchase" />

          </div>

          </form>

        </div>

      </div>


      <div className="container">


        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={refopen} data-bs-target="#exampleModalCenter">
          Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" >
              <div className="modal-header" style={{ backgroundColor: "grey" }}>
                <button type="button" onClick={() => navigate('/shop')} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ color: 'white', backgroundColor: 'black', fontSize: "40px" }}>
                Thanks for shopping. Your order will be deliver within 15 days!!!
              </div>
              <div className="modal-footer" style={{ backgroundColor: "grey" }}>
                <button style={{ backgroundColor: 'red', color: 'white' }} type="button" onClick={() => navigate('/shop')} className="btn btn-secondary" data-bs-dismiss="modal">OK</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Bill


