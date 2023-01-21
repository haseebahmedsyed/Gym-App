import React, { useEffect } from 'react'
import './Dashboard.css'
import { Link, useLocation } from 'react-router-dom'


export default function Dashboard(props) {

    useEffect(()=>{        
        props.progress(50);
        setTimeout(() =>{
            props.progress(75);
            props.progress(100);
    
        },500)
    },[])

  return (
    <>
        <h1 className='dashboard-main-heading'>DASH<span>BOARD</span></h1>
        <div className="container">
            <div className="box-of-dashboard1 box-of-dashboard">
                <p className="mydash">Fee Inspection</p>
                <div className='details-btn-div'>
                
                    <Link className='mybtn3' to='/feeinspect'>View Details</Link>
                    <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>

                </div>
            </div>

            <div className="box-of-dashboard2 box-of-dashboard">
                <p className="mydash">Order Inspection</p>
                <div className='details-btn-div'>
                <Link className='mybtn3' to='/orderinspect'>View Details</Link>
                <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>

                </div>
            </div>
        </div>

        <div className="container">
            <div className="box-of-dashboard3 box-of-dashboard">
                <p className="mydash">Shopping Management</p>
                <div className='details-btn-div'>
                    <Link to='/additem' className='mybtn3'>View Details</Link>
                    <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>

                </div>
            </div>

            <div className="box-of-dashboard4 box-of-dashboard">
                <p className="mydash">Contacts Inspection</p>
                <div className='details-btn-div'>
                    <Link to="/contactInspect" className='mybtn3'>View Details</Link>
                    <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>

                </div>
            </div>
        </div>
    </>
  )
}
