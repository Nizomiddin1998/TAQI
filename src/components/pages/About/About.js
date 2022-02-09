import React from "react";
import images from '../../assets/images/about/images/rasm1.jpg'
import images1 from '../../assets/images/about/images/Leadership-1.jpg'
import images2 from '../../assets/images/about/images/Leadership-2.jpg'
import images3 from '../../assets/images/about/images/Leadership-3.jpg'
import images4 from '../../assets/images/about/images/Visiting1.jpg'
import images5 from '../../assets/images/about/images/Visiting2.jpg'
import images6 from '../../assets/images/about/images/Visiting3.jpg'
import images7 from '../../assets/images/about/images/be-here-360.webp'
import images8 from '../../assets/images/about/images/native-american-blanket.jpg'
import images9 from '../../assets/images/about/images/about-stanford-1.jpg'
import images10 from '../../assets/images/about/images/about-stanford-2.jpg'
import images11 from '../../assets/images/about/images/about-timeline.jpeg'
import FooterNav from "../templates/footer/FooterNav";
import './About.css'

import Nav from "../templates/navbar/Nav";




function About() {
    return (

        <div className="App">
            <Nav />
            <div className="About">
                <div className="body1">
                    <h1 className="title"> <strong>About Stanford</strong></h1>
                    <h3>A place for learning, discovery, innovation, expression and discourse </h3>
                </div>
                <div className="RASM1 container21">
                    <img className="igm_taqi1" src={images} alt="my-img" />
                </div>

                <div className="container21">
                    <hr />
                    <div className="Opened-in">

                        <div className="Opened-in-1">
                            <p>Opened in</p>
                            <h1>1891</h1>
                            <br />
                            <br />
                            <h1>15,157</h1>
                            <p>Students</p>
                        </div>

                        <div className="Opened-in-2">
                            <p>Located in</p>
                            <h1>Stanford, CA</h1>
                            <br />
                            <br />
                            <h1>2,279</h1>
                            <p>Faculty</p>

                        </div>

                    </div>

                    <hr />

                </div>

                <div className="Leadership-title">
                    <h1>Leadership</h1>
                </div>
                <div className="Leadership">

                    <div className="President">
                        <div>
                            <div className="rasm2">
                                <img title="Leadership-1" src={images1} alt="Leadership-1" />
                            </div>
                            <div >
                                <h1>
                                    President Marc <br />Tessier-Lavigne
                                </h1>
                                <p>
                                    Marc Tessier-Lavigne became Stanford University’s <br /> eleventh president on September 1, 2016.
                                </p>

                                <p><a href="#">Office of the President</a></p>

                            </div>

                        </div>
                    </div>



                    <div className="Provost">
                        <div>
                            <div className="rasm2">
                                <img title="Leadership-2" src={images2} alt="Leadership-2" />
                            </div>
                            <div>
                                <h1>
                                    Provost Persis Drell
                                </h1>
                                <p>
                                    Persis Drell is Stanford’s thirteenth provost, the chief <br /> academic and budgetary officer of the University.
                                </p>

                                <p><a href="#">Office of the Provost</a></p>

                            </div>

                        </div>
                    </div>

                    <div className="Other">
                        <div>
                            <div className="rasm2">
                                <img title="Leadership-3" src={images3} alt="Leadership-3" />
                            </div>
                            <div>
                                <h1>
                                    Other Administration
                                </h1>
                                <p>
                                    The University is also governed by a Board of Trustees <br /> and Faculty Senate and supported by numerous offices.
                                </p>

                                <p><a href="#">University Administration</a></p>

                            </div>

                        </div>
                    </div>

                </div>

                <div className="Visiting-title">
                    <h1>Visiting Stanford</h1>
                </div>
                <div className="Visiting">

                    <div className="Plan-a-Visit">
                        <div>
                            <div className="rasm2">
                                <img title="Leadership-1" src={images4} alt="Leadership-1" />
                            </div>
                            <div>
                                <h1>
                                    Plan a Visit
                                </h1>
                                <p>
                                    Stanford welcomes more than 150,000 visitors to campus <br /> annually. Whether you live in the neighborhood or are<br /> coming from far away, we look forward to seeing you <br />here on the Farm.
                                </p>

                                <p><a href="#">Visitor Information</a></p>

                            </div>

                        </div>
                    </div>

                    <div className="Provost">
                        <div>
                            <div className="rasm2">
                                <img title="Leadership-2" src={images5} alt="Leadership-2" />
                            </div>
                            <div>
                                <h1>
                                    Virtual Tours
                                </h1>
                                <p>
                                    Visitor Information offers several multimedia tours of Stanford,  <br /> including videos, slideshows and a self-guided tour.
                                </p>

                                <p><a href="#">Virtual Tours</a></p>

                            </div>

                        </div>
                    </div>

                    <div className="Other">
                        <div>
                            <div className="rasm2">
                                <img src={images6} alt="Visiting3" />
                            </div>
                            <div>
                                <h1>
                                    Other Resources
                                </h1>
                                <p>
                                    Have a delicious meal at one of Stanford’s numerous <br />     <a href="#">dining locations.</a>  If you want to do some  <a href="https://www.youtube.com/watch?v=emBoDloCze8"> shopping </a>during  <br /> your visit, we’ve got that covered too.  Our  <a href="https://www.google.com/maps/place/%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82+%D0%A1%D1%82%D0%B0%D0%BD%D1%84%D0%BE%D1%80%D0%B4/@37.4274745,-122.169719,15z/data=!4m5!3m4!1s0x0:0x29cdf01a44fc687f!8m2!3d37.4274745!4d-122.169719"> Maps & Directions </a> <br /> will help you find your way. and Faculty Senate and supported by numerous offices.
                                </p>

                                <p><a href="#">University Administration</a></p>

                            </div>

                        </div>
                    </div>

                </div>



                <div className="Be-here ">

                    <div className="container21 ">
                        <div className="sozlari">
                            <h1>“Be Here” – a virtual reality experience of Stanford</h1>
                            <br />
                            <p className="yozuvi">
                                What’s it like to be a Stanford undergraduate or graduate student? Students <br /> chart their own paths of discovery, learning and growth, and each journey is <br /> as unique as the individual. Experience the stories of five Stanford students in immersive 360° video.
                            </p>
                            <br />
                            <h3> <a href="#">Watch the video</a></h3>

                        </div>

                        <div className="rasmi44">
                            <img src={images7} alt="be-here-360" className="rasmi1" />
                        </div>

                    </div>

                </div>

                <h1 className="sarlavha">Stanford’s Relationships with Native Peoples</h1>

                <div className=" Peoples">

                    <div className="suratlari">

                        <img src={images8} alt="native-american-blanket" className="native-american-blanket" />
                    </div>

                    <div className="Gaplari ">

                        <h1>
                            Stanford University’s campus is located within the traditional territory of <br />the Muwekma Ohlone Tribe.</h1>
                        <p>The university has been engaged with Ohlone <br /> sites and communities since its founding in the mid-1880s. Today, <br />the university has a vibrant community of Native students, faculty, staff,<br /> and alumni.</p>


                        <h2>
                            <a href="#">Read our land acknowledgment statement and learn more.</a>
                        </h2>
                    </div>
                </div>

                <div className="sarlavha1">
                    <h1>History</h1>
                </div>
                <div className="Tarixide">

                    <div className="tarixi1">
                        <img src={images9} alt="about-stanford-1" />
                        <h1>Stanford History</h1>
                        <br />


                        <p>The Leland Stanford Junior University was founded in <br /> 1885 by California Senator Leland Stanford and his wife,<br /> Jane, in memory of their only child, Leland Jr., who died <br /> of typhoid fever at 15.</p>
                        <br />
                        <h2> <a href="#">A History of Stanford</a></h2>
                    </div>






                    <div className="tarixi2">
                        <img src={images10} alt="about-stanford-2"></img>
                        <h1>Stanford Then & Now</h1>
                        <br />
                        <p>Stanford has changed with the world over the last 125+ <br /> years, often leading the way with new ideas and <br /> discoveries. Here’s a look at Stanford people, places and <br /> experiences, past and present.</p>
                        <br />
                        <h2> <a href="https://125.stanford.edu/then-and-now/">Stanford Then & Now</a></h2>
                    </div>





                    <div className="tarixi3">
                        <img src={images11} alt="about-timeline"></img>

                        <h1>Stanford Timelines</h1>
                        <br />

                        <p>Our history is rich and inspiring. Our future will be cutting
                            <br /> edge and groundbreaking. Immerse yourself in our past
                            and see <br />into our future.</p>
                        <br />
                        <h2> <a href="https://125.stanford.edu/timelines/">Stanford Timelines</a></h2>
                    </div>

                </div>


                <FooterNav />
            </div>

        </div>
    );
}


export default About;