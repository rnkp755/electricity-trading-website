import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

import frames00007 from "../images/frames00007.png";
import frames00010 from "../images/frames00010.png";
import frames00013 from "../images/frames00013.png";
import frames00016 from "../images/frames00016.png";
import frames00019 from "../images/frames00019.png";
import frames00022 from "../images/frames00022.png";
import frames00025 from "../images/frames00025.png";
import frames00028 from "../images/frames00028.png";
import frames00031 from "../images/frames00031.png";
import frames00034 from "../images/frames00034.png";
import frames00037 from "../images/frames00037.png";
import frames00040 from "../images/frames00040.png";
import frames00043 from "../images/frames00043.png";
import frames00046 from "../images/frames00046.png";
import frames00049 from "../images/frames00049.png";
import frames00052 from "../images/frames00052.png";
import frames00055 from "../images/frames00055.png";
import frames00058 from "../images/frames00058.png";
import frames00061 from "../images/frames00061.png";
import frames00064 from "../images/frames00064.png";
import frames00067 from "../images/frames00067.png";
import frames00070 from "../images/frames00070.png";
import frames00073 from "../images/frames00073.png";
import frames00076 from "../images/frames00076.png";
import frames00079 from "../images/frames00079.png";
import frames00082 from "../images/frames00082.png";
import frames00085 from "../images/frames00085.png";
import frames00088 from "../images/frames00088.png";
import frames00091 from "../images/frames00091.png";
import frames00094 from "../images/frames00094.png";
import frames00097 from "../images/frames00097.png";
import frames00100 from "../images/frames00100.png";
import frames00103 from "../images/frames00103.png";
import frames00106 from "../images/frames00106.png";
import frames00109 from "../images/frames00109.png";
import frames00112 from "../images/frames00112.png";
import frames00115 from "../images/frames00115.png";
import frames00118 from "../images/frames00118.png";
import frames00121 from "../images/frames00121.png";
import frames00124 from "../images/frames00124.png";
import frames00127 from "../images/frames00127.png";
import frames00130 from "../images/frames00130.png";
import frames00133 from "../images/frames00133.png";
import frames00136 from "../images/frames00136.png";
import frames00139 from "../images/frames00139.png";
import frames00142 from "../images/frames00142.png";
import frames00145 from "../images/frames00145.png";
import frames00148 from "../images/frames00148.png";
import frames00151 from "../images/frames00151.png";
import frames00154 from "../images/frames00154.png";
import frames00157 from "../images/frames00157.png";
import frames00160 from "../images/frames00160.png";
import frames00163 from "../images/frames00163.png";
import frames00166 from "../images/frames00166.png";
import frames00169 from "../images/frames00169.png";
import frames00172 from "../images/frames00172.png";
import frames00175 from "../images/frames00175.png";
import frames00178 from "../images/frames00178.png";
import frames00181 from "../images/frames00181.png";
import frames00184 from "../images/frames00184.png";
import frames00187 from "../images/frames00187.png";
import frames00190 from "../images/frames00190.png";
import frames00193 from "../images/frames00193.png";
import frames00196 from "../images/frames00196.png";
import frames00199 from "../images/frames00199.png";
import frames00202 from "../images/frames00202.png";


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.state = {
            images: [],
            imageSeq: { frame: 0 }, // Start with first frame
            frameCount: 66
        };
    }

    componentDidMount() {
        gsap.registerPlugin(ScrollTrigger);

        const locoScroll = new LocomotiveScroll({
            el: document.querySelector("#main"),
            smooth: true
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy("#main", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        this.setupCanvas();
        this.loadImages();

        ScrollTrigger.refresh();
    }

    componentDidUpdate() {
        this.renderCanvas();
    }
    setupCanvas() {
        console.log("Canvas setup");
        const canvas = this.canvasRef.current;
        this.context = canvas.getContext("2d");

        window.addEventListener("resize", this.renderCanvas.bind(this));

        ScrollTrigger.create({
            trigger: "#page3",
            pin: true,
            scroller: "#main",
            start: "top top",
            end: "250% top"
        });
    }

    loadImages() {
        const { frameCount } = this.state;
        const images = [];

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.onload = () => {
                this.renderCanvas();
            };
            img.onerror = () => {
                console.error("Error loading image:", img.src);
            };
            img.src = this.getImageSource(i);
            images.push(img);
        }

        this.setState({ images });
    }


    getImageSource(index) {
        switch (index) {
            case 0: return frames00007;
            case 1: return frames00010;
            case 2: return frames00013;
            case 3: return frames00016;
            case 4: return frames00019;
            case 5: return frames00022;
            case 6: return frames00025;
            case 7: return frames00028;
            case 8: return frames00031;
            case 9: return frames00034;
            case 10: return frames00037;
            case 11: return frames00040;
            case 12: return frames00043;
            case 13: return frames00046;
            case 14: return frames00049;
            case 15: return frames00052;
            case 16: return frames00055;
            case 17: return frames00058;
            case 18: return frames00061;
            case 19: return frames00064;
            case 20: return frames00067;
            case 21: return frames00070;
            case 22: return frames00073;
            case 23: return frames00076;
            case 24: return frames00079;
            case 25: return frames00082;
            case 26: return frames00085;
            case 27: return frames00088;
            case 28: return frames00091;
            case 29: return frames00094;
            case 30: return frames00097;
            case 31: return frames00100;
            case 32: return frames00103;
            case 33: return frames00106;
            case 34: return frames00109;
            case 35: return frames00112;
            case 36: return frames00115;
            case 37: return frames00118;
            case 38: return frames00121;
            case 39: return frames00124;
            case 40: return frames00127;
            case 41: return frames00130;
            case 42: return frames00133;
            case 43: return frames00136;
            case 44: return frames00139;
            case 45: return frames00142;
            case 46: return frames00145;
            case 47: return frames00148;
            case 48: return frames00151;
            case 49: return frames00154;
            case 50: return frames00157;
            case 51: return frames00160;
            case 52: return frames00163;
            case 53: return frames00166;
            case 54: return frames00169;
            case 55: return frames00172;
            case 56: return frames00175;
            case 57: return frames00178;
            case 58: return frames00181;
            case 59: return frames00184;
            case 60: return frames00187;
            case 61: return frames00190;
            case 62: return frames00193;
            case 63: return frames00196;
            case 64: return frames00199;
            case 65: return frames00202;
            default: return ""; // Consider a default or error image path
        }
    }
    renderCanvas() {
        const canvas = this.canvasRef.current;
        const context = canvas.getContext('2d'); // Get 2D rendering context

        if (!context) {
            console.error("Error: Unable to obtain 2D rendering context");
            return;
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const { imageSeq, images } = this.state;
        const { frame } = imageSeq;

        context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

        if (images[frame]) {
            this.scaleImage(images[frame], context);
        } else {
            console.error("Error: Image not loaded");
        }
    }



    scaleImage(img, ctx) {
        const canvas = ctx.canvas;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }

    render() {
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
                        <canvas ref={this.canvasRef} style={{ width: '100%', height: '100%', zIndex: "555" }}></canvas>
                    </div>
                    <div id="page4">
                        <h3>Revolutionizing ENERGY Management with Blockchain Excellence</h3>
                        <h1>The shift towards renewables brings increasing uncertainty to the grid. So as more solar and wind sources come on the grid, we need to reconfigure it: From a centralised system to a distributed one.

                            Electrode’s technology enables players interacting on the grid to track, trace and trade energy in real-time. This is helping to create a flexible power system that is both resilient and stable in the coming years.</h1>
                    </div>
                    <div id="page5">
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