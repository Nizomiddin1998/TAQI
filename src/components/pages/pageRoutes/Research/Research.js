import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../../templates/footer/FooterNav';
import Nav from '../../templates/navbar/Nav';
import ImgExritec from "../Scientific/imges/events4.png";
import images from "./imges/tadqiqImg.png";
import "./research.css";

export default function Research() {
    return <div >
        <img className="igm_taqi1" src={images} alt="my-img" />

        <div>

            <div className='Research'>
                <div className='haqida_father'>

                    <div className='haqida_left'>
                        <div className='umumiy'>
                            <p><b>Ilmiy-tadqiqot markazlari va laboratoriyalari</b> </p>
                            <p><a href='#'>Ilmiy-tadqiqot markazlari ro'yxati</a> </p>
                            <p>  <a href='#'>Laboratoriyalar ro'yxati</a>  </p>
                            <p> <a href='#'> Markaziy Laboratoriya </a> </p>
                            <p> </p>
                            <p> <b>  Tadqiqotchilar uchun  </b>  </p>
                            <p> <a href='#'>  Tadqiqot @ TAQI</a>  </p>
                            <p> <a href='#'>  Homiylik loyihalari idorasi  </a>  </p>
                            <p> <a href='#'> Texnologiyalar  </a>  </p>
                            <p><a href="#">Transferi Byurosi</a></p>
                            <p><a href="#">TAQI tezislar to'plami qidiruv </a></p>
                            <p><a href="#">TAQI tezislar to'plami qidiruv </a></p>
                           
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
