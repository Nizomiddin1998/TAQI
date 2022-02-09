import React from 'react'
import Nav from '../templates/navbar/Nav';
import './Academics.css';

import header21 from '../../assets/images/academics/ac_header.jpg'

export default function Academics() {
    return (
        <div>
            <div >
                <Nav />
                <div className="academics_main">

                <div className="academics_cont">
                    <div className="academics_header">
                        <h1 className="academics_h1" >Academics</h1>
                        <p className="academics_p" >Stanford students create and apply knowledge by thinking and doing, preparing for leadership in a rapidly changing world.</p>
                    </div>
                   
                   <img src={header21} alt="photo" className="ac_header" />

                    <div className="academics_numb">
                        <div className="ac_member">
                            <h4>2,279</h4>
                            <p>Faculty members</p>
                        </div>

                        <div className="ac_member">
                            <h4>5:1</h4>
                            <p>Student-to-faculty ratio</p>
                        </div>

                        <div className="ac_member">
                            <h4>Nearly 200</h4>
                            <p>Graduate fields of study</p>
                        </div>
                    </div>

                    <h1 className="under_h1" >Undergraduate Studies</h1>
                </div>
                
                </div>
            </div>
        </div>
    )
}
