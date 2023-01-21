import React, { useContext, useEffect } from 'react'
import Products from './Products'
import ProductArray from './ProductArray'
import './ShopItems.css'
import Footer from '../Footer/Footer'

import feesContext from '../.././context/contextFees/feescontext'


function ShopItems(props) {

    const context = useContext(feesContext);
    const {getAllItems,items} = context;

    useEffect(() => {
        getAllItems();
    })

    return (
    <>
        <div id="shop-gear-heading">
            <h1><span style={{color: 'white'}} >SHOP</span> GEAR</h1>
        </div>
        <Products  items={items}/>

        <Footer/>
     </>
    )
}


export default ShopItems
