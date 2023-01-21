import React from 'react'
import './dashboard.css'
import { Link, useLocation } from 'react-router-dom'

function dashboard() {
  return (
    <div id="mainDashboard">
        <div id="dashboardHeader">
            <h1 id="dashboard"><span class="whiteFont">Dash</span><span class="yellowFont">board</span></h1>
        </div>
        <div class="DivofdashboardBoxes">

            <a class="boxesText" href="">
                <div class="boxes">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><Link to='/feeinspect'>Fee Inspection</Link></span>
                </div>
            </a>
            <a class="boxesText" href="">
                <div class="boxes">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><Link to='/orderinspect'>Orders Inspection</Link></span>
                </div>
            </a>
            <a class="boxesText" href="">
                <div class="boxes">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Box 3
                </div>
            </a>
            <a class="boxesText" href="">
                <div class="boxes">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Box 4
                </div>
            </a>


        </div>
    </div>
  )
}

export default dashboard
