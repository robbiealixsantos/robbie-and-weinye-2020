import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div id="canvas">
                <div id="upper-logo">
                    <h1 class="logo" data-content-field="site-title">
                        <a href="/">Robbie &amp; Weinye</a>
                    </h1>
                </div>

                <div id="topNav">
                    <nav class="main-nav" data-content-field="navigation">
                        <ul>
                            <li class="page-collection active-link">
                                <a href="/">Home</a>
                            </li>
                            <li class="page-collection">
                                <a href="/wedding">Wedding</a>
                            </li>
                            {/*<li class="page-collection">
                                <a href="/photos">Photos</a>
                            </li>*/}
                            {/*<li class="page-collection">
                                <a href="/registry">Registry</a>
                            </li>*/}
                            <li class="page-collection">
                                <a href="/rsvps">RSVP</a>
                            </li>
                        </ul>
                        <div class="page-divider"></div>
                    </nav>
                </div>

                <div id="main-container">
                    <img id="main-image" src={require('../images/robbie-weinye-champagne.jpg')} />
                    <div class="page-divider"></div>
                </div>

                <div id="info-div">
                    <h3 class="info-div-top">Come celebrate our wedding</h3>
                    {/*<div class="page-divider-info"></div>                    
                    <div class="info-div-main">
                        <h1><b>Robbie Santos</b></h1>
                        <h2>-<em>&</em>-</h2>
                        <h1><b>Weinye Chen</b></h1>
                    </div>
                    <div class="page-divider-info"></div>*/}
                    <h3 class="info-div-bottom">Saturday, August 1, 2020</h3>
                </div>


                <div class="footer-content-div">
                    <div id="footer-content-div">Robbie and Weinye joyfully request the pleasure of your company as we speak our vows and join in marriage in the presence of family and friends.</div>
                    <br/>
                    <div id="jane-link-footer-div">Photography by <a id="jane-link" target="_blank" href="https://www.hellojanelee.com/">Jane Lee</a>.</div>
                </div>
            </div>
        );
    }
}
