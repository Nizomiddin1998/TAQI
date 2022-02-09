import React from 'react';
import { Link } from 'react-router-dom'
import images from './imges/netbook1.png';
import cardImg from './imges/newImg1.png';
import './NevsPage.css';


function NewsPage() {
    return (
        <div>
            <img className="igm_taqi1" src={images} alt="my-img" />

            <div>

                <div className='NewsPage'>
                    <div className='haqida_father'>
                        <div className='haqida_left' style={{ heigth: "715px" }}>
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
                                        <img className="imgNews" src={cardImg} alt="my-img" />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                <div className='card'>
                                        <img className="imgNews" src={cardImg} alt="my-img" />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                <div className='card'>
                                        <img className="imgNews" src={cardImg} alt="my-img" />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>

                            </div>
                            <div className='row medCenter'>
                                <div className='col-md-4'>
                                    <div className='card'>
                                        <img className="imgNews" src={cardImg} alt="my-img" />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                <div className='card'>
                                        <img className="imgNews" src={cardImg} alt="my-img" />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                <div className='card'>
                                        <img className="imgNews" src={cardImg} alt="my-img" />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>

                            </div>
                            <div className='row '>
                                <div className='col-md-4'>
                                    <div className='card'>
                                        <img className="imgNews" src={cardImg} alt="my-img" />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                <div className='card'>
                                        <img className="imgNews" src={cardImg} alt="my-img" />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                <div className='card'>
                                        <img className="imgNews" src={cardImg} alt="my-img" />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsPage;