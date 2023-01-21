import React, { useEffect } from 'react'
import "./Gold.css"

function Gold(props) {

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

                <h1 style={{ color: "#f6c501" }}>GOLD</h1>
            </div>
            <div className="points">
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Cardio Section</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Selectorized Training Section</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Free Weights Section</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Cross Fit Area</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Locker System</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Access to Sauna and Steam</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Consultation – Once in three months</p>
                <p><i class="fa fa-arrow-right" aria-hidden="true"></i> Exclusive Merchandise DWR AB Shirt</p>

            </div>
        </>
    )
}

export default Gold
