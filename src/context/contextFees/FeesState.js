import React, { useState } from 'react'
import FeesContext from './feescontext'
import Swal from 'sweetalert2'

function FeesState(props) {

  const [topProgress , setTopProgress] = useState(0)

  const [paidUsers, setPaidUsers] = useState([{
    Name: "",
    Email: "",
    Mobile: "",
    Package: "",
    Status: "",
    Amount: "",
    Date: ""
  }])
  const [newMembers, setNewMembers] = useState([{
    Package: "",
    Name: "",
    Email: "",
    Mobile: "",
    Age: "",
    Weight: "",
    Gender: "",
  }])

  const [unpaidUsers, setUnPaidUsers] = useState([{
    Name: "",
    Email: "",
    Mobile: "",
    Package: "",
    Status: "",
    Amount: "",
    Date: ""
  }])

  const [AllOrders,setAllOrders] = useState([{
      Name: "",
      City: "",
      Address: "",
      Postalcode: "",
      Email: "",
      Phone: "",
      Deliverycharges: 0,
      Deliverystatus: "",
      Paymentmethod: "",
      Shoppingdate: "",
      Items: [
        {
          product: "",
          productName:"",
          productPrice :"",
          quantity: ""
        }
      ]
  }])

  const [DeliveredOrders,setDeliveredOrders] = useState([{
    Name: "",
    City: "",
    Address: "",
    Postalcode: "",
    Email: "",
    Phone: "",
    Deliverycharges: 0,
    Deliverystatus: "",
    Paymentmethod: "",
    Shoppingdate: "",
    Items: [
      {
        product: "",
        productName:"",
        productPrice :"",
        quantity: ""
      }
    ]
}])

const [PendingOrders,setPendingOrders] = useState([{
  Name: "",
  City: "",
  Address: "",
  Postalcode: "",
  Email: "",
  Phone: "",
  Deliverycharges: 0,
  Deliverystatus: "",
  Paymentmethod: "",
  Shoppingdate: "",
  Items: [
    {
      product: "",
      productName:"",
      productPrice :"",
      quantity: ""
    }
  ]
}])

const [getDate,setGetDate] = useState(0);
const [getMonth,setGetMonth] = useState(0);
const [succ,setSucc] = useState(false);


const [items,setItems] = useState([{ProductImage:"",ProductName:"",ProductPrice:"",ProductQuantity:""}])

const [cont,setCont] = useState([
  {
    Name:"",
    Email:"",
    Phone:"",
    Message:""
  }
])


  const getPaidUsers = async () => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/fee/paid`, {
      method: 'GET',
      // headers: {
      //   'Content-Type': 'multipart/form-data'
      // },
      credentials: 'include'

    });
    const json = await response.json();
    setPaidUsers(json.results)
  }

  const getUnPaidUsers = async () => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/fee/notpaid`, {
      method: 'GET',
      // headers: {
      //   'Content-Type': 'multipart/form-data'
      // },
      credentials: 'include'

    });
    const json = await response.json();
    setUnPaidUsers(json.results)
  }
  const getNewMembers = async () => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/get/allmem`, {
      method: 'GET',
      credentials: 'include'

    });
    const json = await response.json();
    setNewMembers(json.result)
  }
  const DeleteMembers = async (id) => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/admin/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include'

    });
    getNewMembers();
  }


  const getAllOrders = async () => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/shop/getallorders`, {
      method: 'GET',
      credentials: 'include'

    });
    const json = await response.json();
    setAllOrders(json.results)
  }

  const getDeliveredOrders = async () => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/shop/getdeliveredorders`, {
      method: 'GET',
      credentials: 'include'

    });
    const json = await response.json();
    setDeliveredOrders(json.results)
  }

  const getPendingOrders = async () => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/shop/getpendingorders`, {
      method: 'GET',
      credentials: 'include'

    });
    const json = await response.json();
    setPendingOrders(json.results)
  }

  const UpdateOrderStatus = async (id) => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/shop/updatedeliverystatus/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'

    });
    const json = await response.json();
    getAllOrders();
    getPendingOrders();
    getDeliveredOrders();
  }

  const DeleteOrders = async (id) => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/shop/deleteorder/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'

    });
    const json = await response.json();
    getAllOrders();
    getPendingOrders();
    getDeliveredOrders();
  }


  const uploadItem = async(ProductName,ProductPrice,ProductQuantity,ProductImage)=>{
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/shopitems/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials:'include',
      body: await JSON.stringify({ProductName,ProductPrice,ProductQuantity,ProductImage})

    });
    const json = await response.json();

    getAllItems();
  }

  const getAllItems = async () => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/shopitems/get`, {
      method: 'GET',
      // credentials: 'include'

    });
    const json = await response.json();
    setItems(json.result)
    // setPendingOrders(json.results)
  }
  // /shopitems/delete


  const deleteItems = async (id) => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/shopitems/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include'

    });

    getAllItems();
  }

  const updateItemsPrice = async (ProductPrice,id) => {
    console.log(ProductPrice);
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/shopitems/updateprice/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: await JSON.stringify({ProductPrice})
    });

    getAllItems();
  }

  const updateItemsQuantity = async (ProductQuantity,id) => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/shopitems/updatequantity/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: await JSON.stringify({ProductQuantity})
    });

    getAllItems();
  }

  const getFeeDate= async () => {
    const host = 'http://localhost:3000'
    const response = await fetch(`${host}/api/v1/fee/get`, {
      method: 'GET',
      credentials: 'include'

    });
    const json = await response.json();
    if(json.success) {
      setSucc(true)
    setGetDate(parseInt(json.date))
    setGetMonth(parseInt(json.month))
  }else{
    setSucc(false);
  }
}


const addContacts = async(Name,Email,Phone,Message)=>{
  const host = 'http://localhost:3000'
  const response = await fetch(`${host}/api/v1/contact/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: await JSON.stringify({Name,Email,Phone,Message})

  });
  const json = await response.json();

  if(json.success){
    Swal.fire({
      title: 'successfully admitted',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }
  else{
    Swal.fire({
      title: 'Something went wrong',
      text: `Please try again`,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }

}

const getContacts= async () => {
  const host = 'http://localhost:3000'
  const response = await fetch(`${host}/api/v1/contact/get`, {
    method: 'GET',

  });
  const json = await response.json();
  if(json.success) {
    setCont(json.contacts);
}
}


  return (
    <FeesContext.Provider value={{ paidUsers, getPaidUsers,getUnPaidUsers,unpaidUsers,getNewMembers,newMembers,DeleteMembers,getAllOrders,AllOrders,getDeliveredOrders ,DeliveredOrders ,getPendingOrders ,PendingOrders,UpdateOrderStatus,DeleteOrders , uploadItem , getAllItems , items ,deleteItems ,updateItemsPrice,updateItemsQuantity,getFeeDate,getDate,getMonth ,succ , addContacts , getContacts , cont , topProgress , setTopProgress}}>
      {props.children}
    </FeesContext.Provider>
  )
}

export default FeesState
