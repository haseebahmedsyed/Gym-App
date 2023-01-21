import React, { useEffect } from 'react'
import "./Platinium.css"

function Platinium(props) {

    useEffect(()=>{
        props.progress(50);
        setTimeout(() =>{
            props.progress(75);
            props.progress(100);
    
        },500)
    },[])

    return (
        <>
            <div className="headings">

                <h1 style={{ color: "#f6c501" }}>PLATINIUM</h1>
            </div>
            <div className="points">
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Cardio Section</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Selectorized Training Section</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Free Weights Section</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Functional Fit Area</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Studio (except for classes)</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Boxing Area</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Sauna and Steam</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Consultation – Once a month</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Group Classes – Four per month</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Choose Any Two of Archery, Cricket or Football</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Exclusive Merchandise – Platinum Set</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Pro Package for Digital Experience</p>

            </div>
        </>
    )
}

export default Platinium
