import React, { useEffect } from 'react'
import "./Titanium.css"

function Titanium(props) {

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

                <h1 style={{ color: "#f6c501" }}>TITANIUM</h1>
            </div>
            <div className="points">
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Cardio Section</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Selectorized Training Section</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Free Weights Section</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Functional Fit Area</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Studio (except for classes)</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Locker System</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Sauna and Steam</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Consultation – Unlimited</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Group Classes – Four per month</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Choose Any Two of Archery, Cricket or Football</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Jogging Track and Cricket Ground for warm-up</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Exclusive Merchandise – Titanium Set</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> In Gym Access to Netflix</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Pro Package for Digital Experience</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Premium Parking</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> 8 Personal Training Sessions</p>

            </div>
        </>

    )
}

export default Titanium
