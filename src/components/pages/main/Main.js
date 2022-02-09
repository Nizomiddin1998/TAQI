import React,{useEffect, useState} from "react";
import { Link } from 'react-router-dom';

import "./Main.css";
import "./media.css";
import Nav from "../templates/navbar/Nav";
import Button from "@mui/material/Button";
import { AiFillCaretDown } from "react-icons/ai";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';



import Grid from "@mui/material/Grid";

import institut from "../../assets/images/main/institut.png";

import habarlar1 from "../../assets/images/main/habarlar1.png";
import habarlar2 from "../../assets/images/main/habarlar2.png";
import habarlar3 from "../../assets/images/main/habarlar3.png";

import habarlar4 from "../../assets/images/main/habarlar4.png";
import habarlar5 from "../../assets/images/main/habarlar5.png";
import habarlar6 from "../../assets/images/main/habarlar6.png";

import events1 from "../../assets/images/main/events1.png";
import events2 from "../../assets/images/main/events2.png";
import events3 from "../../assets/images/main/events3.png";
import events4 from "../../assets/images/main/events4.png";

import Card1 from '../../assets/images/events/card1.jpg'
import Card2 from '../../assets/images/events/card2.jpg'
import Card3 from '../../assets/images/events/card3.jpg'
import Card4 from '../../assets/images/events/card4.jpg'

import academics1 from "../../assets/images/main/academics1.png";
import academics2 from "../../assets/images/main/academics2.png";
import academics3 from "../../assets/images/main/academics3.png";

import research_bg from "../../assets/images/main/research_bg.png";
import FooterNav from "../templates/footer/FooterNav";
import events11 from "../../assets/images/main/15.jpg";
import events21 from "../../assets/images/main/16.jpg";
import events31 from "../../assets/images/main/18.jpg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SchoolIcon from '@mui/icons-material/School';
const Main = () => {


  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
  }



  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <>
      <div className="main-container">
        <div className="header">
          <Nav />

          <div className="carousel1" >
            <Carousel fade interval="5000" >

              <Carousel.Item>
                <img className="imgCarousel" src={events11} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="imgCarousel" src={events21} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="imgCarousel" src={events31} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>


          <div className="btnzindex"  >
            <ArrowDropDownIcon className="arrow" />
            <a href="#habarlar" className="blank1">INSTITUT BILAN TANISHING </a>
            <ArrowDropDownIcon className="arrow" />
          </div>

        </div>

        {/* tashtech page */}

        <div className="main-tashtech" id="habarlar" style={scrollY > 10? {marginTop:"112px"}:{}}>
          <div className="tashtechWidth">
            <h3 className="main_tash_h3"> HABARLAR </h3>

            <div className="tashtech2">
              <Grid
                className="space_container tashtech_news "
                container
                spacing={1}
              >
                <Grid className="tashCard_1" item md={5.8}>
                  <img className="imghabar" src={habarlar1} alt="photo" />
                  <div className="tashtech_cont">
                    Lorem ipsum dolor sit amet consectetur,in earum excepturi
                    magni minus totam enim inventore reiciendis omnis alias,
                    quia non, reprehenderit provident id neque accusantium.
                  </div>
                </Grid>
                <Grid className="tashCard_2" item md={2.8}>
                  <img className="tashcard2_img" src={habarlar2} alt="photo" />
                  <a className="tashcard2_txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem, atque.
                  </a>
                </Grid>
                <Grid className="tashCard_2" item md={2.8}>
                  <div className="tashcard2_img">
                    <img src={habarlar3} alt="photo" />
                  </div>

                  <a className="tashcard2_txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem, atque.
                  </a>
                </Grid>
              </Grid>

              <Grid
                className="space_container tashtech_news "
                container
                spacing={1}
              >
                <Grid className="tashCard_2" item md={2.7}>
                  <div className="tashcard2_img">
                    <img src={habarlar4} alt="photo" />
                  </div>
                  <a className="tashcard2_txt">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem, atque.

                  </a>
                </Grid>
                <Grid className="tashCard_2" item md={2.7}>
                  <div className="tashcard2_img">
                    <img src={habarlar5} alt="photo" />
                  </div>
                  <a className="tashcard2_txt">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem, atque.

                  </a>
                </Grid>
                <Grid className="tashCard_1" item md={5.9}>
                  <img src={habarlar6} alt="photo" />
                  <div className="tashtech_cont">

                    Lorem ipsum dolor sit amet consectetur,in earum excepturi
                    magni minus totam enim inventore reiciendis omnis alias,
                    quia non, reprehenderit provident id neque accusantium.

                  </div>
                </Grid>
              </Grid>

              <div className="divButton">
                <button className="buttonDavomi">
                  Davom etish ...
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* events_page */}

        <div className="events_page">
          <div className="eventsota">

            <h1 className="event_h1">Events</h1>
            <p className="event_p">What's happening on campus</p>

            <Grid className="event_cards" container spacing={1}>

              <Grid item md={2.8}>
                <div className="event_card1">
                  <div className="events_img_box">
                    <img className="event_card1_img" src={events1} alt="photo" />
                  </div>
                  <div className="event_card_txt">
                    <div className="date_event">
                      <h4>16/04</h4>
                    </div>
                    <p className="h4Text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ultrices c
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item md={2.8}>
                <div className="event_card1">
                  <div className="events_img_box">
                    <img className="event_card1_img" src={events2} alt="photo" />
                  </div>
                  <div className="event_card_txt">
                    <div className="date_event">
                      <h4>16/04</h4>
                    </div>
                    <p className="h4Text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ultrices c
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item md={2.8}>
                <div className="event_card1">
                  <div className="events_img_box">
                    <img className="event_card1_img" src={events3} alt="photo" />
                  </div>
                  <div className="event_card_txt">
                    <div className="date_event">
                      <h4>16/04</h4>
                    </div>
                    <p className="h4Text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ultrices c
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item md={2.8}>
                <div className="event_card1">
                  <div className="events_img_box">
                    <img className="event_card1_img" src={events4} alt="photo" />
                  </div>
                  <div className="event_card_txt">
                    <div className="date_event">
                      <h4>16/04</h4>
                    </div>
                    <p className="h4Text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ultrices c
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>

            <div className="divButton">
              <button className="buttonDavomi">
                Davom etish ...
              </button>
            </div>

          </div>
        </div>

        {/* Academics page */}

        <div className="academicss_page">
          <h1 className="academicss_h1">Academics</h1>
          <p className="academicss_p">
            Preparing students to make meaningful contributions to <br />{" "}
            society as engaged citizens and leaders in a complex world
          </p>

          <div className="academicss_card_bg">
            <div className="academicss_card_main">
              <Grid
                className="academicss_container academicss_cards "
                container
                spacing={1}>

                <Grid className="academicss_card" item md={3.7}>
                  <img src={academics1} alt="photo" />

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. loremm
                    ipsum dLoremolor sit amet consectetur adipisicing elit. loremm
                  </p>

                </Grid>

                <Grid className="academicss_card" item md={3.7}>
                  <img src={academics2} alt="photo" />

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. loremm
                    ipsum dLoremolor sit amet consectetur adipisicing elit. loremm
                  </p>

                </Grid>

                <Grid className="academicss_card" item md={3.7}>
                  <img src={academics3} alt="photo" />

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. loremm
                    ipsum dLoremolor sit amet consectetur adipisicing elit. loremm
                  </p>

                </Grid>

              </Grid>
            </div>
          </div>

          <div className="academics_navbg">

            <h5 className="academicss_h3">
              Seven schools in which to pursue your passions
            </h5>
            <ul className="academicss_ul">
              <li>
                <a href="#">Medice</a>
              </li>
              |
              <li>
                <a href="#">Law</a>
              </li>|

              <li>
                <a href="#">Humanities & Sciences</a>
              </li>|

              <li>
                <a href="#">Engineering</a>
              </li>|

              <li>
                <a href="#">Education</a>
              </li>|

              <li>
                <a href="#">Earth Business</a>
              </li>
            </ul>


            <div className="divButton">
              <button className="buttonDavomi">
                Davom etish ...
              </button>
            </div>

          </div>
        </div>

        <div className="hr">

        </div>
        {/* Research page */}

        <div className="research_page">
          <h1 className="research_h1">Research</h1>
          <p className="research_p">
            Preparing students to make meaningful contributions to <br />{" "}
            society as engaged citizens and leaders in a complex world
          </p>

          <div className="research_number">
            <div className="research_numb_container">
              <div className="research_num">
              <SchoolIcon className="iconsss"/> 
                <h2>18</h2>
                <p>Institutes</p>
              </div>

              <div className="research_num">
              <LocalLibraryIcon className="iconsss"/>
                <h2>20</h2>
                <p>Libraries</p>
              </div>

              <div className="research_num">
              <AttachMoneyIcon className="iconsss"/>
                <h2>$1.93</h2>
                <p>Billion</p>
              </div>
            </div>
          </div>


          <div className="research_card_main">
            <Grid
              className="academicss_container academicss_cards "
              container
              spacing={1}>
              <Grid className="academicss_card" item md={3.7}>
                <img src={academics1} alt="photo" />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

              </Grid>
              <Grid className="academicss_card" item md={3.7}>
                <img src={academics2} alt="photo" />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

              </Grid>
              <Grid className="academicss_card" item md={3.7}>
                <img src={academics3} alt="photo" />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

              </Grid>
            </Grid>
          </div>

          <div className="divButton">
            <button className="buttonDavomi">
              Davom etish ...
            </button>
          </div>



        </div>

        {/* Qabul page */}
        <div className="divotabe">

          <div className="yellowLIne">
          </div>
          
        </div>

        <div className="qabul_page">
          <h1 className="qabul11">Qabul</h1>
          <p>Before you discover something, discover yourself ...</p>

          <div className="imgQabul">
            <img src={institut} alt="photo" className="qabul_img" />
          </div>

          <div className="qabul_main_cont">
            <div className=" qabul_container">
              <Grid className="qabul_cont" container spacing={1}>
                <Grid item md={5.7}>
                  <h4>
                    <span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </span>{" "}
                    Distinctio quis harum nam sequi neque? Omnis perspiciatis
                    atque placeat beatae, voluptatem ducimus a aspernatur sint in
                    inventore quas esse? Voluptatem, aliquid.
                  </h4>
                </Grid>
                <Grid item md={5.7}>
                  <h4>
                    <span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </span>{" "}
                    Dolorem odit iure excepturi error consequatur dicta laudantium
                    eius placeat? At officia, nulla dolor voluptatibus numquam
                    quisquam molestiae minus. Obcaecati, impedit labore!
                  </h4>
                </Grid>
              </Grid>
            </div>
          </div>



        </div>

        <FooterNav />
      </div>
    </>
  );
};

export default Main;


