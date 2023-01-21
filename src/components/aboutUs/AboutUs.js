import React, { useEffect } from 'react'
import './AboutUs.css'
import logo from "../../logo.jpeg"
import { Link, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'

function AboutUs(props) {

    useEffect(()=>{
        props.progress(50);
        setTimeout(() =>{
            props.progress(75);
            props.progress(100);
    
        },500) 
      },[])

  return (
      <>
<div className="main-about-us">

<div className="fst-rw">
    <div className="logo-div">
        <img id="logo" src={logo} alt="TMS"/>
    </div>
    <div className="main-head">
        <h1 className="main-head-text">WE ARE <span className="font-yellow">THE MUSCLE STUDIO</span></h1>
        <p className="main-head-desc">Helping people live longer, happier and healthier!</p>
    </div>
</div>

<div className="ourStory">
    <div className="font-white main-ourStory">
        <h1 className="ourStory-main-text">OUR<span className="font-yellow spacePlease">STORY</span></h1>
        <p className="ourStory-main-desc">
            <span className="tms">The Muscle Studio</span> was founded in 2002 as a family owned and operated
            business specialising in
            supplying
            high-quality gym equipment at great prices.
        </p>
        <p className="ourStory-desc">
            Instead of being just another gym equipment retailer, our founders wanted to be the best in the
            industry and
            set their minds to doing so! Over the last two decades <span className="tms">The Muscle Studio</span>
            has grown into one of
            Australia's
            largest online fitness equipment retailers, helping thousands of customers live longer, happier and
            healthier lives.
        </p>
    </div>
</div>

<div className="ourValues">
    <div className="ourValues-main">
        <h1 className="font-white ourValues-main-text">OUR<span className="font-yellow spacePlease">VALUES</span></h1>
        <p className="ourValues-desc">For many years, helping customers reach their fitness goals has been at the
            heart of what we do and why we do it! We live and breathe our six core values — which speak of our
            commitment to our customers, staff, the industry and our business as a whole.</p>
    </div>

    <div className="sixCore">
        <div className="oneCore">
            <div className="colCore">
                <i className="fa fa-headphones fa-5x fa-aboutus" aria-hidden="true"></i>
                <h1 className="coreHeaders">Services</h1>
                <p className="coreDesc">Customers are why we exist and we're passionate about delivering
                    exceptional, personalised
                    customer service to all.</p>
            </div>
        </div>
        <div className="oneCore">
            <div className="colCore">
                <i className="fa fa-comments-o fa-5x fa-aboutus" aria-hidden="true"></i>
                <h1 className="coreHeaders">Communication</h1>
                <p className="coreDesc">We believe open, direct and supportive communication is the foundation of
                    any successful
                    organisation.</p>
            </div>
        </div>
        <div className="oneCore">
            <div className="colCore">
                <i className="fa fa-handshake-o fa-5x fa-aboutus" aria-hidden="true"></i>
                <h1 className="coreHeaders">Teamwork</h1>
                <p className="coreDesc">We're committed to common goals, with effective communication and
                    accountability making our team achieve greater results.</p>
            </div>
        </div>
    </div>

    <div className="sixCore">
        <div className="oneCore">
            <div className="colCore">
                <i className="fa fa-bolt fa-5x fa-aboutus" aria-hidden="true"></i>
                <h1 className="coreHeaders">Nimbagility</h1>
                <p className="coreDesc">Customers are why we exist and we're passionate about delivering
                    exceptional, personalised
                    customer service to all.</p>
            </div>
        </div>
        <div className="oneCore">
            <div className="colCore">
                <i className="fa fa-flag-checkered fa-5x fa-aboutus" aria-hidden="true"></i>
                <h1 className="coreHeaders">Consideration</h1>
                <p className="coreDesc">We believe open, direct and supportive communication is the foundation of
                    any successful
                    organisation.</p>
            </div>
        </div>
        <div className="oneCore">
            <div className="colCore">
                <i className="fa fa-rocket fa-5x fa-aboutus" aria-hidden="true"></i>
                <h1 className="coreHeaders">Innovation</h1>
                <p className="coreDesc">We're committed to common goals, with effective communication and
                    accountability making our team achieve greater results.</p>
            </div>
        </div>
    </div>


</div>

<div className="ourPeople">
    <div className="font-white main-ourPeople">
        <h1 className="ourPeople-main-text">OUR<span className="font-yellow spacePlease">PEOPLE</span></h1>
        <p className="ourPeople-main-desc">
            <span className="tms">The Muscle Studio</span> has a growing team of 60+ awesome superstars and we owe
            our success to each and every one of them!
        </p>

        <p className="ourPeople-desc">
            We have some pretty amazing people working with us, who hustle everyday to give you the best
            possible experience! You can find them in areas such as sales, marketing and e-commerce, customer
            service, warehousing, finance, human resources and management.
        </p>
    </div>
    <div className="ourPeople-Img-MainDiv">
        <div className="ourPeople-Img-Div"><img className="ourPeople-Img"
                src="https://i.shgcdn.com/c31b571d-9d74-4917-96a0-e01ae1e6a1b4/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt=""/></div>
        <div className="ourPeople-Img-Div"> <img className="ourPeople-Img"
                src="https://i.shgcdn.com/b83c63cd-ff7b-4b32-9eb1-671f78d762b3/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt=""/></div>
        <div className="ourPeople-Img-Div"><img className="ourPeople-Img"
                src="https://i.shgcdn.com/e9db82f3-8444-4715-95fb-31f8017d45b8/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt=""/></div>
    </div>
</div>

<div className="ourCulture">
    <div className="font-white main-ourCulture">
        <h1 className="ourCulture-main-text">OUR<span className="font-yellow spacePlease">CULTURE</span></h1>
        <p className="ourCulture-desc">
            We know that building a positive culture is incredibly important. We believe in encouraging,
            supporting, challenging, learning and growing to be the best! Our flexible working solutions, gym
            rebates and educational opportunities create a positive work/life balance for all our employees.
        </p>

        <p className="ourCulture-desc">
            We believe in giving back and offering time, money and products to volunteer services and community
            organisations. We're committed to improving individuals' health, fitness, and well-being by
            supporting global and local charities, local sports teams, and events.
        </p>
    </div>

    <div className="contactUsButton">
        <Link id="btn-ToContactUs" to='/contact'>Get In Touch</Link> 
    </div>
</div>


</div>
<Footer/>
</>


  )
}

export default AboutUs
