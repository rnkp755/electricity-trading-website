import React from  'react';

class Home extends React.Component{
    render(){
        return (
        <div>
               <div id="main">
        <div data-scroll data-scroll-speed="-5" id="page1">
                <nav>
                    <div class="nav-bar">
                        <i class='bx bx-menu sidebarOpen' ></i>
                        <span class="logo navLogo"><a href="#">ELECTRODE</a></span>
                        <div class="menu">
                            <div class="logo-toggle">
                                <span class="logo"><a href="#">ELECTRODE</a></span>
                                <i class='bx bx-x siderbarClose'></i>
                            </div>
                            <ul class="nav-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="new.html">About</a></li>
                                <li><a href="http://localhost:3000/login">Login</a></li>
                                <li><a href="http://localhost:3000">Add Wallet</a></li>
                                <li><a href="#">Services</a></li>
                            </ul>
                        </div>
                        <div class="darkLight-searchBox">
                            <div class="dark-light">
                                <i class='bx bx-moon moon'></i>
                                <i class='bx bx-sun sun'></i>
                            </div>
                            <div class="searchBox">
                               <div class="searchToggle">
                                <i class='bx bx-x cancel'></i>
                                <i class='bx bx-search search'></i>
                               </div>
                                <div class="search-field">
                                    <input type="text" placeholder="Search..." />
                                    <i class='bx bx-search'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="bottom-page1">
                    <div class="heading-box">
                <h1>The next step toward a more sustainable grid</h1>
                </div><br />
                <div class="bottom-page1-inner">
                    <div class="text-box">
                        <h3>We make it easy for utilities and their customers, to know the exact value of clean energy choices. We are the catalyst for our clean energy future.</h3>
                    </div> 
                <button class="learn-more-button">LEARN MORE</button>  
                </div>
            </div> 
            <video
        style={{
          maxWidth: '100%',
          display: 'block',
          margin: '0 auto',
        }}
        src="/assets/images/video3.mp4"
        autoPlay
        loop
        muted
      ></video>

        </div>  
        <div id="page2">
            
<h1>We have developed an energy and flexibility trading platform that allows households, organisations and the grid itself to trade with each other. ‍
    We offer technology that supports a responsive market. Because the grid is only as good as the market behind it.
    </h1>
            
        </div> 
        <div id="page3">
            <canvas></canvas>
        </div>
        <div id="page4">
            <h3>Revolutionizing ENERGY Management with Blockchain Excellence</h3>
            <h1>The shift towards renewables brings increasing uncertainty to the grid. So as more solar and wind sources come on the grid, we need to reconfigure it: From a centralised system to a distributed one.

                Electrode’s technology enables players interacting on the grid to track, trace and trade energy in real-time. This is helping to create a flexible power system that is both resilient and stable in the coming years.</h1>
        </div>
        <div id="page5">
            <canvas></canvas>
        </div>
        <div id="page6">
            <h3>Empowering renewable energy communities to produce, consume, store and sell renewable energy        </h3>
            <h1>The smart contract ensures that the prosumer delivers the agreed-upon amount of electricity to the consumer. If the prosumer does not deliver the agreed-upon amount of electricity, the smart contract will automatically refund the consumer. smart contracts that implements time-of-use pricing and net metering.</h1>
        </div>
        <div id="page7">
            <div class="page7-cir">
                <div class="page7-cir-inner">
                    <img src="/assets/images/f.png" alt="Image description" class="fixed-image" />

                    <div class="progress-text">0%<br /><h3>binded by smart contracts</h3></div>
                </div>
            </div>
            <canvas></canvas>

        </div>
        <div id="page8">
            <div class="page8-bottom">
                <h1>ELECTRODE</h1>
                <button>LEARN MORE</button>
            </div>
            <video
        style={{
          maxWidth: '100%',
          display: 'block',
          margin: '0 auto',
        }}
        src="/assets/images/v.mp4"
        autoPlay
        loop
        muted
      ></video>
        </div>
        <div id="page9">
            <div class="left9">
                <h1>What is <br /> ELECRODE</h1>
            </div>
            <div class="right9">
                <div class="container">
                    <div class="video-container">
                    <video
        style={{
          width: '98%',
          height: 'auto',
        }}
        src="/assets/images/6.mp4"
        autoPlay
        loop
        muted
      ></video>
                </div>
             </div>
         </div>
              
        </div>
        <div id="page10">
            <div class="right10">
                <div class="right10-inner">
                    <h1>Energy trading and traceability
                    </h1>
                    <p>Our platform’s track and trade features help you stay on top of the provenance and flow of energy. It can give consumers choice over the energy they’re using and facilitate peer to peer trading. Solar P2P energy trading can deal with excess solar in the grid without subsidy.</p>
                </div>
                <div class="right10-inner">
                    <h1>The SMART meters</h1>
                    <p> platform integrates with smart meters to track the energy generated by assets of any size and capacity and location automatically, guaranteeing traceability of energy right back to its source.It enables energy retailers to unlock and create new revenue streams, as well as retain existing customers</p>
                </div>
                <div class="right10-inner">
                    <h1>P2P Trading</h1>
                    <p>Tenables households and businesses to sell energy generated from their solar panels to other energy consumers connected to the same electricity grid. It can do this with customers with the same electricity utility or across different utilities; it doesn’t make a difference. The blockchain system will keep track of it all.</p>
                </div>
            </div>
        </div>
        <div id="page14">
            <div class="page14-inner">
                <h1>Twitter</h1>
                <i class="ri-arrow-right-up-line"></i>
                <div class="center14"></div>
            </div>
            <div class="page14-inner">
                <h1>LinkedIn</h1>
                <i class="ri-arrow-right-up-line"></i>
                <div class="center14"></div>

            </div>
            <div class="page14-inner">
                <h1>Instagram</h1>
                <i class="ri-arrow-right-up-line"></i>
                <div class="center14"></div>

            </div>
        </div>
        </div>

        </div>
        );
    }
}
export default Home;