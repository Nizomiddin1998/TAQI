import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../../templates/footer/FooterNav';
import Nav from '../../templates/navbar/Nav';
import ImgExritec from "./imges/events4.png";
import images from "./imges/ilmBino.png"
import "./ilmiyPage.css"

export default function IlmiyPage() {
    return <div >
        <img className="igm_taqi1" src={images} alt="my-img" />

        <div>

            <div className='IlmiyPage'>
                <div className='haqida_father'>

                    <div className='haqida_left'>
                        <div className='umumiy'>
                            <p><b>Akademik birliklar va dasturlar</b> </p>
                            <p><a href='#'>Fakultetlar, institutlar va maktablar</a> </p>
                            <p>  <a href='#'>Litsenziya dasturlari</a>  </p>
                            <p> <a href='#'> Bitiruvchilar dasturlari </a> </p>
                            <p> <a href='#'>  Xalqaro qo'shma dasturlar  </a>  </p>
                            <p> <a href='#'>  Erasmus dasturi </a>  </p>
                            <p> <a href='#'>  Masofaviy ta'lim dasturlari  </a>  </p>
                            <p> <a href='#'> Fakul'tet o'quv dasturi (A. B.)  </a>  </p>
                           
                            <p> </p>

                        </div>

                        <div className='Mamuriy'>
                            <p><b>Akademik axborot </b></p>
                            <p><a href="#">Ilmiy taqvim</a></p>
                            <p><a href="#">Ilmiy katalog </a></p>
                            <p><a href="#">Dastur malaka axborot paketi </a></p>
                            <p><a href="#">Akademik ma'lumotlarni </a></p>
                            <p><a href="#">boshqarish tizimi (Avensis)</a></p>
                            <p><a href="#">TAQIsinf </a></p>
                            <p><a href='#'>TAQIga kirish</a></p>
                            <p> </p>
                        </div>
                        <div className='Mamuriy'>
                            <p><b>Talabalar uchun</b></p>
                            <p><a href="#">Registratsiya</a></p>
                            <p><a href="#">Akademik qoidalar va qoidalar</a></p>
                            <p><a href="#">TAQI tasvirlar bilan</a></p>
                            <p><a href="#">Talabalar portali</a></p>
                            <p><a href="#">Xalqaro talabalar byurosi</a></p>
                            <p><a href="#">Xalqaro hamkorlik byurosi</a></p>
                            <p><a href="#">Talabalar vakillari kengashi</a></p>
                            <p><a href="#">Online Dasturlar</a></p>
                            <p> </p>

                            <p><b>Ta'lim va kurslar </b></p>
                            <p><a href="#">Uzluksiz ta'lim markazi</a></p>
                            <p><a href="#">Chet tili kurslari</a></p>
                            <p><a href="#">TAQI dasturi</a></p>

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
