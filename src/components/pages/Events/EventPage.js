import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../templates/footer/FooterNav';
import Nav from '../templates/navbar/Nav';
import eventImg1 from "./imges/events3.png";
import images from "./imges/imgEvent.png"
import './eventPage.css'

export default function EventPage() {
    return <div>
        <Nav />
        <img className="igm_taqi1" src={images} alt="my-img" />

        <div>

            <div className='EventPage'>
                <div className='haqida_father'>
                    <div className='haqida_left' >
                        <div className='umumiy' >
                            <p><b>Institut yangiliklari</b> </p>
                            <p><a href='#'>Rejalashtirilgan tadbirlar</a> </p>

                            <p> </p>
                            <p> </p>
                            <p> </p>
                            <p> </p>
                            <p> </p>

                        </div>
                    </div>

                    <div className='haqida_reight'>

                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={eventImg1} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={eventImg1} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={eventImg1} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>

                        </div>
                        <div className='row medCenter'>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={eventImg1} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={eventImg1} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={eventImg1} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>

                        </div>
                        <div className='row '>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={eventImg1} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={eventImg1} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={eventImg1} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <FooterNav />
    </div>;
}
