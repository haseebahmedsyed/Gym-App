import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel'
import './Home.css'
import diet from '../../diet.png'
import lifting from '../../lifting.png'
import pushUp from '../../push-up.png'
import jumping from '../../jumping.png'
import pooshups from '../../push-ups.png'
import climber from '../../climber.png'
import squats from '../../squats.png'
import Footer from '../Footer/Footer'

function Home(props) {

  const [firstBtnState, setFirstBtnState] = useState(true);
  const [secondBtnState, setSecondBtnState] = useState(true);
  const [thirdBtnState, setThirdBtnState] = useState(true);

  useEffect(()=>{
    props.progress(50);
    setTimeout(() =>{
        props.progress(75);
        props.progress(100);

    },500)

  },[])

  return (
    <>



      <div className="carousel" style={{ marginBottom: '0px', paddingBottom: '0px' }}>
        <Carousel />
      </div>


      <div className="full" style={{ padding: '0px', marginTop: '0px' }}>
        <div className="us text-center " style={{ padding: '0px', marginTop: '0px' }}>
          <h1 className="whyus-header" style={{ fontSize: '60px', color: 'white',paddingTop:'25px', marginTop: '-10px' }}>WHY <h1 style={{ color: "#f6c501", display: 'inline', fontSize: '60px' }}>US?</h1></h1>
        </div>

        <div className='because-we-care-div'>
          <img id='imageee' src="https://thebravogym.com/img/gym.jpg" alt="" />
          <div className="content-of-because-we-care">
            <h1 id='because-we-care-heading'>Because We Care</h1>
            <p style={{fontSize:'23px'}}><span style={{color:'#f6c501'}}>The Muscle Studio</span> helps you get the most out of yourself with progressive individual and small group fitness programs. These combine elements of tactical training, functional training and high intensity interval training. The raw, no-nonsense and balanced approach to fitness offers a more complete training program to help you achieve your fitness goals.</p>
          </div>

        </div>
      </div>

      <div className='All-progress'>
        <h1 className='text-center heading' style={{ color: 'white', fontSize: '50px' }}>ALL PROGRESS TAKES PLACE OUTSIDE THE <h1 style={{ color: "#f6c501", fontSize: '50px' }}>COMFORT ZONE!</h1></h1>

        <div className="motivation my-5 mx-5">
          <div className="text my-5">
            <p >
              <span style={{ color: 'yellow', fontStyle: 'italic' }}>The Muscle Studio</span> is dedicated to pushing you out of your comfort zone into the ‘feel-fantastic’ zone.
            </p>
            <br />
            <p>
              It is a best gym in Karachi and lifestyle fitness facility that incorporates cutting edge technology enabled training equipment targeting Strength, Cardio, HIIT, Functional Fit and Aerobics.
            </p>
            <br />
            <p>
              The gym is managed by a top notch team of health and fitness gurus who are part of Muscle Studio Training and Consulting team. These qualified trainers will devise a work-out regime perfectly suited to your lifestyle, yet, that will push you beyond limits that you never imagined possible.
            </p>impor
            <br />
            <p>
              Watch your body feel stimulus that its never felt before; tone muscles you never knew existed; go that extra mile to keep seeking your true potential.
            </p>
            <br />
            <p>
              Let off steam as our team of power-packed professional trainers treat you to some life changing work out videos that will help you feel better while you are facing a lockdown. Until the world has healed and we are up and running– stay fit, stay safe!


            </p>
          </div>
          <div className="image">
            <img style={{ height: '485px' }} src="https://powerhousegym.com/wp-content/themes/basic-hunchfree/img/tee.jpg" />
          </div>
        </div>

      </div>

      <div id="ourOffersMainDiv">

        <h1 className="main-text"><span className="main-text-first">Our </span><span className="main-text-second">Offers</span></h1>
        <br />
        <div className="main-of">

          <div className="box">
            <div className="ouroffersImg">
              <img className="img-ourOffers" src={diet} alt="diet" />
            </div>
            <div className="ourOffersHeading">
              <h3 className="ourOffers-subhead">DIET PLAN</h3>
            </div>
            <div className="content1">
              <p className="ourOffers-text" id="p1">
                There is no special "bodybuilding diet." There's just common sense nutrition and daily calorie targets. You
                can follow any diet you want: ketogenic, paleo, whatever. So long as you hit your protein and calorie
                targets, you're fine. Every day for as long as you want to build or maintain muscle, you must eat enough to
                reach your calorie target. <span id="dots">{!firstBtnState ? "If your day's target is 2,000 calories, and you've chosen to eat the majority of your calories from brown rice (200 calories per can),that's 10 cups of brown rice to eat.In practice, I'd vary it up a bit so you balance your nutrients. The intersection of ease, price, and taste makes brown rice, and oatmeal the go-to muscle building core foods." : "..." }</span>
              </p>
              <button onClick={() => {
                  let btn1 = document.getElementById('myBtn')
                  let mainDiv = document.getElementById('ourOffersMainDiv')
                if (firstBtnState ===false && secondBtnState===true && thirdBtnState===true ) {
                  btn1.style.marginTop = "20px";
                  mainDiv.style.height = "710px";

                  setFirstBtnState(true)


                }
                
                
                else {
                  btn1.style.marginTop = "60px";
                  mainDiv.style.height = "950px";
                  btn1.style.padding = '11px';
                  setFirstBtnState(false)
                }
              }} className="ourOffers-button" id="myBtn"> {firstBtnState ? "Read more" : "Read Less"}</button>
            </div>
          </div>

          <div className="box">
            <div className="ouroffersImg">
              <img className="img-ourOffers" src={lifting} alt="lifting" />
            </div>
            <div className="ourOffersHeading">
              <h3 className="ourOffers-subhead">LIFTING</h3>
            </div>
            <div className="content1">
              <p className="ourOffers-text" id="p2">
                Using too much weight, too soon; always start lower than your expected ability and work your way up that
                first workout. If your form suffers, you are swinging the weight, or using momentum, this indicates you may
                be using too much weight. Greater momentum increases the potential for injury and reduces the effectiveness
                to the muscle group being targeted.<span id="dots2">{secondBtnState ?  "..." : "Moving through repetitionstoo quickly, going too fast; there is nothing gained by lifting weights fast. Some of the perks of lifting weight in a slow and controlled manner, include more total muscle tension and force produced, moremuscle-fiber activation both slow and fast twitch fibers, and less tissue trauma."}</span>
              </p>
              <button onClick={() => {
                let mainDiv = document.getElementById('ourOffersMainDiv')
                if (secondBtnState === false && firstBtnState === true && thirdBtnState === true) {
                  document.getElementById('myBtn2').style.marginTop = "20px";
                  mainDiv.style.height = "710px";
                  setSecondBtnState(true)
                }
          
                else {
                  let btn2 = document.getElementById('myBtn2')
                  btn2.style.marginTop = "60px";
                  btn2.style.padding = '11px';
                  mainDiv.style.height = "950px";
                  setSecondBtnState(false)
                }
              }} className="ourOffers-button" id="myBtn2"> {secondBtnState ? "Read more" : "Read Less"}</button>
            </div>
          </div>

          <div className="box">
            <div className="ouroffersImg">
              <img className="img-ourOffers" src={pushUp} alt="pushups" />
            </div>
            <div className="ourOffersHeading">
              <h3 className="ourOffers-subhead">PUSHUP</h3>
            </div>
            <div className="content1">
              <p className="ourOffers-text" id="p3">
                Pushups are the ultimate adapter exercise. They can be done anywhere. They recruit more than half the
                muscles in the upper body, as well as much of the core. And they're safe to do. Turns out, they're also a
                measurement of overall health.Why pushups? It's both their simplicity (everyone knows them; they require
                zero equipment) and that they test.<span id="dots3"> {thirdBtnState ?  "..." :"strength and cardiocapacity. “This was a quick and dirty assessment of the robustness of someone's health and functional status,” says study author Stefanos N. Kales, M.D., at Harvard Medical School. His team tried using a treadmill stress test, but participants had to go to a cardiologist's office to do it."}</span>
              </p>
              <button onClick={() => {
                  let btn3 = document.getElementById('myBtn3')
                  let mainDiv = document.getElementById('ourOffersMainDiv')
                if (secondBtnState === true && firstBtnState === true && thirdBtnState === false) {
                  btn3.style.marginTop = "20px";
                  mainDiv.style.height = "710px";
                  setThirdBtnState(true)
                }
              
                else {
                  btn3.style.marginTop = "60px";
                  mainDiv.style.height = "950px";
                  btn3.style.padding = '11px'
                  setThirdBtnState(false)

                }
              }} className="ourOffers-button" id="myBtn3"> {thirdBtnState ? "Read more" : "Read Less"}</button>
            </div>
          </div>
          
        </div>

      </div>

       <section  id="home-workout-section1">
        <h1 id="home-workout-heading">Home <span>Workout</span></h1>

        <div className="main-div1">
            <div className="box1">
                <div className="hidden-content1">
                    <h2 className="homeWorkoutList">Jumping Jacks</h2>
                    <h3>
                    <ul>
                        <li>15 Rep</li>
                         
                        <li>2 min Rest</li>
                      
                        <li>15 Rep</li>
                      
                        <li>2 min Rest</li>
                        
                        <li>15 Rep</li> 
                    </ul>
                        
                    </h3>
                </div>
                
                <div id="jumping-jacks1" className="image-div1">
                    <img className='immg'  src={jumping} alt=""/>
                </div> 

            </div>

            <div className="box1">
                <div className="hidden-content1">
                    <h2 className="homeWorkoutList">Squats</h2>
                    <h3>
                    <ul>
                        <li>15 Rep</li>
                         
                        <li>2 min Rest</li>
                      
                        <li>15 Rep</li>
                      
                        <li>2 min Rest</li>
                        
                        <li>15 Rep</li> 
                    </ul>
                        
                    </h3>
                </div>
    
                <div id="squats1" className="image-div1">
                    <img className='immg' src={squats} alt=""/>
                </div>
            </div>
        </div>

        <div className="main-div1">
            <div className="box1">
                <div className="hidden-content1">
                    <h2 className="homeWorkoutList">Mountain Climbers</h2>
                    <h3>
                    <ul>
                        <li>3 Mountain Climbersp</li>
                         
                        <li>2 min Rest</li>
                      
                        <li>3 Mountain Climbers</li>
                      
                        <li>2 min Rest</li>
                        
                        <li>3 Mountain Climbers</li> 
                    </ul>
                        
                    </h3>
                    
                </div>
                
                <div id="mountain-climbers1" className="image-div1">
                    <img className='immg' src={climber} alt=""/>
                </div>
            </div>

            <div className="box1">
                <div className="hidden-content1">
                    <h2 className="homeWorkoutList">Push Ups</h2>
                    <h3>
                    <ul>
                        <li>20 Rep</li>
                         
                        <li>1 min Rest</li>
                      
                        <li>20 Rep</li>
                      
                        <li>1 min Rest</li>
                        
                        <li>20 Rep</li> 
                    </ul>
                        
                    </h3>
                    
                </div>
    
                <div id="push-ups1" className="image-div1">
                    <img className='immg' src={pooshups} alt=""/>
                </div>
            </div>
        </div> 
     </section> 

     <Footer/>



    </>
  )
}

export default Home
