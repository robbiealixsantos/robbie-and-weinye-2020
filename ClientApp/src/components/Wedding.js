import React, { Component } from 'react';
import './Wedding.css';

export class Wedding extends Component {
    render() {
        return (
            <div id="canvas">
                <div id="upper-logo">
                    <h1 class="logo" data-content-field="site-title">
                        <a href="/wedding">Wedding</a>
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
                    <img id="main-image" src={require('../images/rengstorff_house.jpg')} />
                    <div class="page-divider"></div>
                </div>

                <div id="info-div">
                    <h1 class="logo-body">
                        <a href="/wedding">Venue</a>
                    </h1>
                    <h3 class="info-div-body">The Wedding Ceremony and Reception will take place at The Rengstorff House, located at 3070 N. Shoreline Boulevard. It is located within Shoreline at Mountain View, a 750-acre wildlife and recreation area on the edge of the San Francisco Bay.</h3>
                    <h1 class="logo-body">
                        <a href="/wedding">Gifts and Registry</a>
                    </h1>
                    <h3 class="info-div-body">We are especially grateful for the love and support from our family and friends. In the cross-cultural spirit of our wedding, we have decided to go with the Chinese tradition of giving red packets (红包 hóngbāo) instead of a  registry. If you are inclined, your participation in this tradition will help us begin our married lives together in Malaysia. If you’re able, you can contribute as much or as little as you can. And if not, your presence on our big day is enough. Either way, we’re so grateful for each and every one of you.</h3>
                    <h1 class="logo-body">
                        <a href="/wedding">For More Information</a>
                    </h1>
                    <h3 class="info-div-body">Please contact us if you'd like to know more</h3>
                    <h3 class="info-div-body">Robbie - robbiealixsantos@gmail.com</h3>
                    <h3 class="info-div-body">Weinye - weinyechen@gmail.com</h3>
                </div>

            </div>
        );
    }
}