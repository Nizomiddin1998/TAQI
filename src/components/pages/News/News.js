import React from 'react'
import './News.css';
import FooterNav from '../templates/footer/FooterNav';
import Nav from '../templates/navbar/Nav';
import Grid from '@mui/material/Grid';

import newsCard1 from '../../assets/images/news/newsCard.jpg'
import newsCard2 from '../../assets/images/news/newsCard2.jpg'
import newsCard4 from '../../assets/images/news/newsCard4.jpg'

export default function News() {
    return (
        <>
            <Nav />
            <div className="news_main">
                <div className="news_main_bg">
                    <div className="news_container">
                        <h1 className="news_h1">Stanford News</h1>
                        <p className="news_p" >Recent stories from around campus, published daily</p>
                    
                        <Grid className="news_cards"  container spacing={1}>
                            <Grid item md={2.8}>
                                <div className="news_card1">
                                        <img className="news_card1_img" src={newsCard1} alt="photo" />
                                        <div className="news_card_txt">
                                            <h2>HUMANITIES</h2>
                                            <h4>Lerone A. Martin on what we know – and don’t know – about Martin Luther King, Jr.</h4>
                                        </div>
                                </div>
                            </Grid>
                            
                            <Grid item md={2.8}>
                                    <div className="news_card1">
                                            <img className="news_card1_img" src={newsCard2} alt="photo" />
                                            <div className="news_card_txt">
                                                <h2>AWARDS</h2>
                                                <h4>Second cohort of CZ Biohub Investigators includes 33 Stanford faculty</h4>
                                            </div>
                                    </div>
                            </Grid>
                            
                            <Grid item md={2.8}>
                                <div className="news_card1">
                                        <img className="news_card1_img" src={newsCard1} alt="photo" />
                                        <div className="news_card_txt">
                                            <h2>SCIENCE & TECHNOLOGY</h2>
                                            <h4>Words matter: The text of online job postings can predict salaries</h4>
                                        </div>
                                </div>
                            </Grid>
                            
                            <Grid item md={2.8}>
                                    <div className="news_card1">
                                            <img className="news_card1_img" src={newsCard4} alt="photo" />
                                            <div className="news_card_txt">
                                                <h2>OBITUARIES</h2>
                                                <h4>Sculptor Aristides ‘Aris’ Demetrios, maker of MemClaw, dies at 89</h4>
                                            </div>
                                    </div>
                            </Grid>
                        </Grid>

                        <Grid className="news_cards"  container spacing={1}>
                            <Grid item md={2.8}>
                                <div className="news_card1">
                                        <img className="news_card1_img" src={newsCard1} alt="photo" />
                                        <div className="news_card_txt">
                                            <h2>HUMANITIES</h2>
                                            <h4>Lerone A. Martin on what we know – and don’t know – about Martin Luther King, Jr.</h4>
                                        </div>
                                </div>
                            </Grid>
                            
                            <Grid item md={2.8}>
                                    <div className="news_card1">
                                            <img className="news_card1_img" src={newsCard2} alt="photo" />
                                            <div className="news_card_txt">
                                                <h2>AWARDS</h2>
                                                <h4>Second cohort of CZ Biohub Investigators includes 33 Stanford faculty</h4>
                                            </div>
                                    </div>
                            </Grid>
                            
                            <Grid item md={2.8}>
                                <div className="news_card1">
                                        <img className="news_card1_img" src={newsCard1} alt="photo" />
                                        <div className="news_card_txt">
                                            <h2>SCIENCE & TECHNOLOGY</h2>
                                            <h4>Words matter: The text of online job postings can predict salaries</h4>
                                        </div>
                                </div>
                            </Grid>
                            
                            <Grid item md={2.8}>
                                    <div className="news_card1">
                                            <img className="news_card1_img" src={newsCard4} alt="photo" />
                                            <div className="news_card_txt">
                                                <h2>OBITUARIES</h2>
                                                <h4>Sculptor Aristides ‘Aris’ Demetrios, maker of MemClaw, dies at 89</h4>
                                            </div>
                                    </div>
                            </Grid>
                        </Grid>

                        <button className="btn_news">More Standford News</button>

                    </div>
                </div>
                
            </div>
        
            <FooterNav />

        </>
    )
}
