import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div >
            <div id="div-of-footer">
                <div className="left">
                    <h1 className='footer-heading'>Opening Hours</h1>
                    <div>
                        <i class="fa fa-clock-o fa-footer" aria-hidden="true"></i>
                        <span id="upper-div-of-left">Mon &#8211; Sun &nbsp;&nbsp;<i class="fa fa-male fa-2x fa-footer" aria-hidden="true"></i> 7:00am to 10:00pm</span>
                    </div>

                    <div>
                        <i class="fa fa-clock-o fa-footer" aria-hidden="true"></i>
                        <span id="lower-div-of-left">Mon &#8211; Sun &nbsp;&nbsp;<i class="fa fa-female fa-2x fa-footer" aria-hidden="true"></i> 7:00am to 10:00pm</span>
                    </div>
                </div>

                <div className="mid">
                    <h1 className='footer-heading'>Contact Info</h1>
                    <div className="nedLocation"><i class="fa fa-map-marker fa-footer fa-footer-contact" aria-hidden="true"></i> &nbsp;   NED University Of Engineering and Technology</div>
                    <div><i className="fa fa-phone fa-footer fa-footer-contact" aria-hidden="true"></i> 021-12343445</div>
                    <div><i className="fa fa-envelope fa-footer fa-footer-contact" aria-hidden="true"></i> TheMuscleStudio123@gmail.com</div>
                </div>

                <div className="right">
                    <h1 className='footer-heading'>Message Us</h1>
                    <div>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i className="fa fa-facebook fa-3x fa-footer" aria-hidden="true" id="facebook-logo"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i className="fa fa-instagram fa-3x fa-footer" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.whatsapp.com/" target="_blank">
                            <i className="fa fa-whatsapp fa-3x fa-footer" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.twitter.com/" target="_blank">
                            <i className="fa fa-twitter fa-3x fa-footer" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>

            <footer id="footer">&copy;2022 &#8211; THE MUSCLE STUDIO &#8211; ALL RIGHTS RESERVED</footer>
        </div>
    )
}

export default Footer
