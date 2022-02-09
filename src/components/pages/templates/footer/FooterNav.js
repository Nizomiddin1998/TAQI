import React from 'react'
import './FooterNav.css'
import microsoft from '../../../assets/images/main/Microsoft_icon.png'
import location from '../../../assets/images/main/locat.png'
import magento from '../../../assets/images/main/Magento.png'
import logo from '../../../assets/images/main/logoo.png'
import { ImTelegram } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

    




export default function FooterNav() {
    return (
        <div>

            <div className="bg_footer">

                <div className="linebggg">
                    <div className="line_bg">
                        <div className="line_black">

                            <ImTelegram className="icon_social telegram" />
                            <AiFillInstagram className="icon_social instagram" />
                            <ImYoutube className="icon_social youtube" />
                            <ImTwitter className="icon_social twitter" />
                        </div>
                    </div>
                </div>


                <div className="footerbgg">
                    <div className="footer_contner">
                        
                        <div className="footer_nav">
                           
                            <div className="logo_sec_taqi" >
                                <h2>TOSHKENT ARXITEKTURA - QURILISH INSTITUTI</h2>
                                <img src={logo} alt="photo" className="logo_taqi" />
                            </div>
                            

                            <div className="footer_informatsia">
                                <h3>ИНФОРМАЦИЯ</h3>
                                <p> В Ташкентском архитектурно-строительном институте есть 4 факультета: <span>Управление строительством, Строительство зданий и сооружений, Архитектура, Строительная инфраструктура</span> </p>
                            </div>

                           
                         <div className="footer_informatsia">
                                <h3>СТРАНИЦЫ</h3>
                                <ul className="footer_ul" >
                                    <li><a href="#"> О нас</a></li>
                                    <li><a href="#"> Факультеты</a></li>
                                    <li><a href="#">Кафедры</a></li>
                                    <li><a href="#"> Интерактивные услуги</a></li>
                                    <li><a href="#">  Для обращение</a></li>
                                </ul>
                         </div>
                        
                         <div className="footer_btn" >
                            <button className="btn_footer_page">Applying</button>
                            <button className="btn_footer_page">Visiting</button>
                            <button className="btn_footer_page">Giving</button>
                            <button className="btn_footer_page">Careers</button>
                            <button className="btn_footer_page">Contact</button>
                         </div>

                        </div>

                    </div>

                    <div className="footer_2">
                        <div className="footer_contner container222">
                                
                                <div className="footer2_informatsia">
                                    <h3>АДРЕС / ДЛЯ ОБРАЩЕНИЙ</h3>
                                    <p>Адрес: Г.Ташкент,  ул.Навои13,  Э-почта:<span>devon@taqi.uz</span>   Телефон: +99871234-11-78   Рабочая время: Пон-Суб: 9.00 - 18.00</p>
                                </div> 
                       
                        </div>
                    </div>

                    <div className="brand_footer" >
                        <p>All rights reserved. QWERTY AL-FAJR | Tashkent,Uzbekistan. </p>
                    </div>

                </div>




            </div>


        </div>
    )
}



