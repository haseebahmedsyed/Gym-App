import React, { useEffect } from 'react'
import './Facilities.css'
import trainer from '../../trainer.jpg'
import yoga_mt from '../../yoga-mat.jpg'
import ropes from '../../ropes.jpg'
import punching_bags from '../../punching-bags.jpg'
import Footer from '../Footer/Footer'

function Facilities(props) {

    useEffect(() => {
        window.addEventListener("scroll", reveal);

        function reveal() {
            let reveals = document.querySelectorAll('.reveal2');

            for (let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let revealTop = reveals[i].getBoundingClientRect().top;
                let revealPoint = 150;

                if (revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add('active2');
                }
                else {
                    reveals[i].classList.remove('active2');
                }
            }
        }

        props.progress(50);
        setTimeout(() =>{
            props.progress(75);
            props.progress(100);
    
        },500)
    }, [])


    return (

        <>


            <div id="header2">
                <h1 id="facilities-section-heading2">FACILITIES</h1>
                <div className="header-images2">
                    <img src={ropes} alt="" />
                    <img src={punching_bags} alt="" />
                    <img src={trainer} alt="" />
                    <img src={yoga_mt} alt="" />
                </div>
            </div>
            <section id="facilities-section2">

                <div className="main-content2" style={{margin:'75px 0px'}}>
                    <div className="rectangular-box2">
                        <img src="https://atmosphere.com.pk/wp-content/uploads/2020/10/Cardio.jpg?id=1463" alt="" />
                        <div id="cardio-section2" className="inner-content2 reveal2">
                            <h1>Cardio <span>Section</span></h1>
                            <p>Top-of-the-line Life Fitness equipment that includes treadmills with shock absorption, Flex Striders, Ellipticals and a Stairmaster.</p>
                            <p>All with digital integration and you can watch Youtube or Netflix while you workout.</p>
                        </div>
                    </div>

                    <div className="rectangular-box2">
                        <div id="strength2" className="inner-content2 reveal2">
                            <h1>Strength</h1>
                            <p>State-of-the-art Life Fitness equipment for strength training. You’ll have the luxury to chose from free weights to the sectorized strength training machines that give you the reps you put in.</p>
                        </div>
                        <img src="https://atmosphere.com.pk/wp-content/uploads/2020/10/Strength.jpg?id=1460" alt="" />
                    </div>

                    <div className="rectangular-box2">
                        <img src="https://atmosphere.com.pk/wp-content/uploads/2020/10/functional-fit-new-img.png?id=1679" alt="" />
                        <div id="functional-fit2" className="inner-content2 reveal2">
                            <h1>Functional <span>Fit</span></h1>
                            <p>The new kind of fitness that has come about in the recent times. A combination of strength, stamina and endurance.</p>
                            <p>As the name suggests, this workout is a test of your character.</p>
                        </div>
                    </div>

                    <div className="rectangular-box2">
                        <div id="studio2" className="inner-content2 reveal2">
                            <h1>Studio</h1>
                            <p>This is where all the energy is put in. A section specially designed for group classes to take place, it can easily house upto 20 people at a single time.</p>
                        </div>
                        <img src="https://atmosphere.com.pk/wp-content/uploads/2020/10/Studio.jpg?id=1461" alt="" />
                    </div>

                    <div className="rectangular-box2">
                        <img src="https://atmosphere.com.pk/wp-content/uploads/2020/10/boxing-img-new.png?id=1675" alt="" />
                        <div id="boxing2" className="inner-content2 reveal2">
                            <h1>Boxing</h1>
                            <p>Apart from being a combat sport, it is a perfect combination of speed, strength and endurance. Body movement and breathing significantly improves as agility too is a significant gain.</p>
                            <p>An arena measuring 12 sq. ft, it is literally the survival of the fittest.</p>
                        </div>
                    </div>

                    <div className="rectangular-box2">
                        <div id="rejuvenation2" className="inner-content2 reveal2">
                            <h1>Rejuvenation</h1>
                            <p>Atmosphere’s rejuvenation experience after a tough workout is the right away to reward your mind, body and soul.</p>
                            <p>The Steam, Sauna, Cold Shower and Jacuzzi provide you the perfect relaxing combo you need after a tough day or a crazy workout session.</p>
                        </div>
                        <img src="https://atmosphere.com.pk/wp-content/uploads/2020/10/Rejuvenation.jpg?id=1465" alt="" />
                    </div>

                    <div className="rectangular-box2">
                        <img src="https://atmosphere.com.pk/wp-content/uploads/2020/10/cricket.jpg?id=1453" alt="" />
                        <div id="cricket2" className="inner-content2 reveal2">
                            <h1>Cricket <span>Academy</span></h1>
                            <p>Cricket is at the heart of every Pakistani’s sporting passions and the roads of Pakistan have been forced to become makeshift cricket grounds. Yet, the sprawling Nadil Burhani grounds, where Atmosphere Gym is located, boasts of a top-notch, yet affordable cricket academy where young, budding cricket enthusiasts come to realize their dreams. When trained by qualified coaches, these cricketers reap maximum benefit of this gentleman’s sport by learning endurance, stamina, balance, coordination and above all, team work.</p>
                        </div>
                    </div>

                    <div className="rectangular-box2">
                        <div id="archery2" className="inner-content2 reveal2">
                            <h1>Archery</h1>
                            <p>Atmosphere Gym boasts of one of the most popular archery courses executed by qualified archery experts who train young children, amateurs and even pros. Al Nadil Burhani, the grounds where Atmosphere Gym is located on Queens Road, has been host to several crash courses for archery and national and international archery tournaments. The coaches will help you attain your potential and enjoy this ancient sport that allows you to enhance focus, hone hand-eye coordination, increase your upper body strength, accomplish better social skills and amplify confidence.</p>
                        </div>
                        <img src="https://atmosphere.com.pk/wp-content/uploads/2020/10/archery.jpg?id=1452" alt="" />
                    </div>

                    <div className="rectangular-box2">
                        <img src="https://atmosphere.com.pk/wp-content/uploads/2020/10/football.jpg?id=1454" alt="" />
                        <div id="football2" className="inner-content2 reveal2">
                            <h1>Football <span>Academy</span></h1>
                            <p>Football is a hot favorite among young boys and teens who are enthralled by the glamour of this highly popular team sport. The Football Academy at Al Nadil Burhani allows young athletes to improve aerobic capacity as well as cardiovascular health. The coaches train these young players to enhance coordination, learn teamwork all the while helping them to tone their muscles, enhance bone strength and increase cognitive brain functions.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>

        </>

    )
}

export default Facilities
