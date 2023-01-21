import React, { useContext, useEffect } from 'react'
import cartContext from '../../context/cartContext';
import './Products.css'

function Products(props) {

    const context = useContext(cartContext);



    return (
        <div className='row'  >
            {props.items.map((element) => {
                return <div className='col-md-4 my-3' style={{paddingLeft:'-5px',marginLeft:"-5px"}}>
                    <div className='card' style={{backgroundColor:'black',border:'3px solid white',borderRadius:'5' }}>
                        <img src={element.ProductImage} className="card-img-top" alt="image" />
                        <div className="card-body">
                            <h5 className="card-price text-center">${element.ProductPrice}</h5>
                            <h5   className="card-title text-center">{element.ProductName} </h5>
                            <button onClick={()=>{context.handleAddCartClick(element)}} disabled={element.ProductQuantity<=0} className="btn my-3"> {element.ProductQuantity<=0 ? 'Out Of Stock':'Add to cart'}</button>
                        </div>
                    </div>
                </div>
            })}
        </div>

    )
}

export default Products

