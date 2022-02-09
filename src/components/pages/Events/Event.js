import React from 'react'
import './Event.css';
import Nav from '../templates/navbar/Nav'
import FooterNav from '../templates/footer/FooterNav';

import Grid from '@mui/material/Grid';

import Card1 from '../../assets/images/events/card1.jpg'
import Card2 from '../../assets/images/events/card2.jpg'
import Card3 from '../../assets/images/events/card3.jpg'
import Card4 from '../../assets/images/events/card4.jpg'
import Card5 from '../../assets/images/events/card5.jpg'
import Card6 from '../../assets/images/events/card6.jpg'
import Card7 from '../../assets/images/events/card7.jpg'
import Card8 from '../../assets/images/events/card8.jpg'

export default function Event() {
    return (
        <div>
            <Nav />

            <div className="events_mainbggg">
            <div className="events_main">
                <div className="events_container">
                    <h1 className="events_h1">Event Calendar</h1>
                    <p className="events_p" >Upcoming events happening on the Stanford campus</p>
                
                    <Grid className="events_cards"  container spacing={1}>
                          <Grid item md={2.8}>
                              <div className="events_card1">
                                    <img className="events_card1_img" src={Card1} alt="photo" />
                                    <div className="events_card_txt">
                                        <div className="date_events">
                                            <p>Jan</p>/
                                            <h4>16</h4>
                                        </div> 
                                        <h2>LECTURE</h2>
                                        <h4>Kyla Schuller: Counterhistories of Feminism</h4>
                                        <p>11:00 AM</p>
                                    </div>
                              </div>
                          </Grid>
                          
                          <Grid item md={2.8}>
                                <div className="events_card1">
                                        <img className="events_card1_img" src={Card2} alt="photo" />
                                        <div className="events_card_txt">
                                            <div className="date_events">
                                                <p>Jan</p>/
                                                <h4>14</h4>
                                            </div> 
                                            <h2>LECTURE</h2>
                                            <h4>CCSRE Chautauqua | Gregory Ablavsky | Governing Property and Violence in the First U.S. Territories</h4>
                                            <p>3:30 PM</p>
                                        </div>
                                </div>
                          </Grid>
                          
                          <Grid item md={2.8}>
                              <div className="events_card1">
                                    <img className="events_card1_img" src={Card3} alt="photo" />
                                    <div className="events_card_txt">
                                        <div className="date_events">
                                                <p>Jan</p>/
                                                <h4>19</h4>
                                        </div> 
                                        <h2>SCREENING</h2>
                                        <h4>The World House Documentary Film Festival</h4>
                                        <p>through January 17, 2022</p>
                                    </div>
                              </div>
                          </Grid>
                          
                          <Grid item md={2.8}>
                                <div className="events_card1">
                                        <img className="events_card1_img" src={Card4} alt="photo" />
                                        <div className="events_card_txt">
                                            <div className="date_events">
                                                <p>Jan</p>/
                                                <h4>11</h4>
                                            </div> 
                                            <h2>CONFERENCE</h2>
                                            <h4>Aspects of Britain: William Morris, Bloomsbury and Virginia Woolf, George Orwell</h4>
                                            <p>10:00 AM</p>
                                        </div>
                                </div>
                          </Grid>
                    </Grid>

                    <Grid className="events_cards"  container spacing={1}>
                          <Grid item md={2.8}>
                              <div className="events_card1">
                                    <img className="events_card1_img" src={Card5} alt="photo" />
                                    <div className="events_card_txt">
                                        <div className="date_events">
                                                <p>Jan</p>/
                                                <h4>15</h4>
                                        </div> 
                                        <h2>SCREENING</h2>
                                        <h4>Camera as Witness Presents four UNAFF documentaries at the World House Documentary Film Festival</h4>
                                        <p>05:00 AM</p>
                                    </div>
                              </div>
                          </Grid>
                          
                          <Grid item md={2.8}>
                                <div className="events_card1">
                                        <img className="events_card1_img" src={Card6} alt="photo" />
                                        <div className="events_card_txt">
                                            <div className="date_events">
                                                <p>Jan</p>/
                                                <h4>13</h4>
                                            </div> 
                                            <h2>LECTURE</h2>
                                            <h4>China's Sharp Power in Africa (Part 1)</h4>
                                            <p>10:00 AM</p>
                                        </div>
                                </div>
                          </Grid>
                          
                          <Grid item md={2.8}>
                              <div className="events_card1">
                                    <img className="events_card1_img" src={Card7} alt="photo" />
                                    <div className="events_card_txt">
                                        <div className="date_events">
                                                <p>Jan</p>/
                                                <h4>24</h4>
                                        </div> 
                                        <h2>LECTURE</h2>
                                        <h4>Hate Crimes, Terrorism, and The Framing of White Supremacist Violence</h4>
                                        <p>10:00 AM</p>
                                    </div>
                              </div>
                          </Grid>
                          
                          <Grid item md={2.8}>
                                <div className="events_card1">
                                        <img className="events_card1_img" src={Card8} alt="photo" />
                                        <div className="events_card_txt">
                                            <div className="date_events">
                                                <p>Jan</p>/
                                                <h4>16</h4>
                                            </div> 
                                            <h2>LECTURE</h2>
                                            <h4>A Conversation with Saleemul Huq, International Centre for Climate Change and Development</h4>
                                            <p>10:00 AM</p>
                                        </div>
                                </div>
                          </Grid>
                    </Grid>

                    <button className="btn_events">More Standford Events</button>

                </div>
            </div>
            </div>
            
            <FooterNav />
        </div>
    )
}
