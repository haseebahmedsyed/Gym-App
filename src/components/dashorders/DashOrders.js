import React, { useEffect } from 'react'
import './DashOrders.css'
import { Link,Outlet} from 'react-router-dom'

function DashOrders(props) {

    useEffect(()=>{
        props.progress(50);
        setTimeout(() =>{
            props.progress(75);
            props.progress(100);
    
        },500)
    },[])

    return (
        <>
            <h1 id="order-status-heading">Orders</h1>
            <div class="div-of-order-status-btn">
                <Link className="my2btn" to='/orderinspect'>Total Orders</Link>
                <Link className="my2btn" to='/orderinspect/delivered'>Delivered Orders</Link>
                <Link className="my2btn" to='/orderinspect/pending'>Pending Orders</Link>
            </div>

            <div>
                <Outlet className='myOutlet'/>
            </div>
        </>
    )
}

export default DashOrders
