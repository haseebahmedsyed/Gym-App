import React, { useState } from 'react'
import cartContext from './cartContext'

function CartState(props) {


    const myArrray=JSON.parse(localStorage.getItem("cartArray"))
    if(myArrray===null){
      localStorage.setItem('cartArray',JSON.stringify([]))
    }
    
    const [mySecondArray,setmySecondArray]= useState([])

    let ab = JSON.parse(localStorage.getItem("itemNo"))

    const [myItems,setMyItems]=useState(ab)
    
    const handleAddCartClick=(product)=>{

      
      const myArray=JSON.parse(localStorage.getItem("cartArray"))

        const findingArray = myArray.find(element=>product.ProductID.toString()===element.product.toString())
        if(findingArray=== undefined){
            let obj={}
            if(product.ProductID){obj.product=product.ProductID}
            if(product.ProductName){obj.ProductName=product.ProductName}
            if(product.ProductPrice){obj.ProductPrice=product.ProductPrice}
            obj.quantity = 1
            myArray.push(obj)
            localStorage.setItem("cartArray", JSON.stringify(myArray))

            if(JSON.parse(localStorage.getItem("itemNo"))===null){
              localStorage.setItem("itemNo",JSON.stringify(1))
              setMyItems(1)


            }
            else{
              
              let item = JSON.parse(localStorage.getItem("itemNo"))
  
              localStorage.setItem("itemNo",JSON.stringify(item+1))
              setMyItems(item+1)
            }
        }
        else{
            alert("Already added to cart");
        }
        


    }


    const addOrder=async(Name,City,Address,Postalcode,Email,Phone,Deliverycharges,Items,Paymentmethod)=>{
      const host = 'http://localhost:3000'
      const response = await fetch(`${host}/api/v1/shop/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: await JSON.stringify({Name,City,Address,Postalcode,Email,Phone,Deliverycharges,Items,Paymentmethod})
  
      });
      const json = await response.json();
    }


  return (
    <cartContext.Provider value={{handleAddCartClick,myItems , setMyItems ,addOrder}}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartState


