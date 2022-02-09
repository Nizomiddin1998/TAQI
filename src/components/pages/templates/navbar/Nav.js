import React, { useState, useEffect } from "react";
import { Search } from "@mui/icons-material";
import "./Nav.css";
import "../../Search/Search"
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../../assets/images/main/logo2.png'
import ClearIcon from '@mui/icons-material/Clear';
import haqda from '../../About/About.js'
import { BiSearch } from "react-icons/bi";
import { NavLink, Link } from 'react-router-dom';


const Nav = () => {

  const [state, setState] = useState(false)
  const [navActive, setNavActive] = useState('')
  function oncheng() {
    setState(p => !p)
  }

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


  const naviBGStyle = {
    display: 'block',
  };

  return (
    <>
      <nav className="navigation">

        <div className={"nav_div1"}  >
          <div className={"bgtop"}  >
            <nav className="navigation-top">
              <h2 className="logo">
                <Link className="link-logo" to="/#" >
                  <span>TOSHKENT ARXITEKTURA QURILISH INSTITUTI</span>
                  {/* <span> QURILISH INSTITUTI</span> */}
                </Link>

              </h2>
              <div className="nav-top-link">
                <ul>
                  <li>
                    <a href="#"> Talabalar </a>
                  </li>
                  <li>
                    <a href="#"> Xodimlar </a>
                  </li>
                  <li>
                    <a href="#"> Biturichilar </a>
                  </li>
                  <li>
                    <a href="#"> Tadqiqotchilar </a>
                  </li>
                  <li>
                    <a href="#"> Ommaviy axborot vositalari</a>
                  </li>
                  <li>
                    <div className="nav-search">
                      <button onClick={oncheng} type="submit" className="buttonsearch ">
                        {
                          state ?
                            <span  >
                              <ClearIcon className="clear1" />
                              Yopish
                            </span>
                            :
                            <span>
                              <SearchIcon className="clear1" />
                              Qidiruv
                            </span>
                        }
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="nav-lang">
                      <button className="uz"> UZ </button>
                      <button> RU </button>
                      <button> EN </button>
                    </div>
                  </li>

                </ul>
              </div>


            </nav>
          </div>



          <div className={"bgbtoon"}>
            <nav className="navigation-bottom">

              <ul className="nav-bottom-link" >

                <li>
                  <NavLink activeClassName="active" className={"link"} to="/about"  >Haqida</NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" className={"link"} to="/news"   >Habarlar</NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" className="link" to="/tadbir1"  >Tadbirlar</NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" className="link" to="/ilmiy1"  >Ilmiy</NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" className="link" to="/tadqiqot1" className="link" > Tadqiqot </NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" className="link" to="/qabul1" >Qabul</NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" className={"link "} to="/campus1" >Campus Life</NavLink>
                </li>
                <li>
                  {/* <NavLink
                    
                    className={({ isActive }) => (isActive ? 'active' : 'link')}
                  >
                    Posts
                  </NavLink> */}
                </li>
              </ul>
            </nav>
          </div>
        </div>


        <div className={"divs1 "} style={state ? naviBGStyle : {}}>

          <div className="searchText">
            <h3> Qidiruv  </h3>
            <span>
              <input type="radio" name="search" />
              web
            </span>
            <span>
              <input type="radio" name="search" />
              peopele
            </span>
          </div>
          <div className="searchButtons">
            <input type="text" placeholder="   Qidiruv TAQI websayt " />
            <button> <SearchIcon /> Qidiruv  </button>
          </div>
          <div className="serarchFooter">
            Qidiruvning boshqa usullari:
            <a target="_blank" href=" 
            https://www.google.com/maps/place/Toshkent+Arxitektura+Qurilish+Instituti/@41.3597783,69.3025876,17z/data=!3m1!4b1!4m5!3m4!1s0x38aef3e6ddff9841:0xb895faaef342b335!8m2!3d41.3597743!4d69.3047763
            "> Xarita </a>
            <a href=""> Profillari </a>

          </div>

        </div>


      </nav>
    </>
  );
};

export default Nav;
