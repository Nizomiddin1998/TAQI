import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../../templates/footer/FooterNav';
import Nav from '../../templates/navbar/Nav';
import ImgExritec from "../Scientific/imges/events4.png";
import images from "./imges/qabulImg.png"
import "./acceptance.css"

export default function Acceptance() {
    return <div >
        <img className="igm_taqi1" src={images} alt="my-img" />

        <div>

            <div className='Acceptance'>
                <div className='haqida_father'>

                    <div className='haqida_left'>
                        <div className='umumiy'>
                            <p><a href='#'>Bakalavr</a> </p>
                            <p><a href='#'>Magistratura</a> </p>
                            <p>  <a href='#'>Tayanch doktarantura (PhD)</a>  </p>
                            <p> <a href='#'>Doktarantura (DsC) </a> </p>
                            <p> <a href='#'>irtqi bo’lim</a>  </p>
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
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>

                        </div>
                        <div className='row medCenter'>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>

                        </div>
                        <div className='row '>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>;
}
