import React from "react";
import './Admission.css'
import Admission_imag1 from '../../assets/images/Admission/Admission1.jpg'
import Admission_imag2 from '../../assets/images/Admission/Admission2.jpg'
import Admissio3 from '../../assets/images/Admission/Admissio3.webp'
import Nav from "../templates/navbar/Nav";
import FooterNav from "../templates/footer/FooterNav";
function Admission() {
    return (
        <div className="Admission">
            <Nav />
            <div>
                <div className="Admission_body1">
                    <h1 className="Admission-title"> <strong>Admission</strong></h1>
                    <p>Stanford students come from across the U.S. and the world, <br /> representing diverse experiences, backgrounds and cultures. </p>
                </div>

                <div className="Admission_RASM">
                    <img className="image" src={Admission_imag1} alt="my-img" />
                </div>

                <br />
                <br />
                <br />
                <hr />


                <div className="yozuv1">
                    <div className="Undergraduate">
                        <h1>
                            6,994
                        </h1>

                        <p>
                            Undergraduate Students
                        </p>
                    </div>

                    <div className="from">
                        <h1>
                            Class of 2023
                        </h1>

                        <p>
                            from 77 countries + 48 states
                        </p>
                    </div>


                    <div className="Graduate">
                        <h1>
                            9,390
                        </h1>

                        <p>
                            Graduate Students
                        </p>
                    </div>


                </div>

                <hr />


                <h1 className="Admission-title"> <strong>Undergraduates</strong></h1>
                <div className="Container">

                    <div className="Undergraduate_Admission1">
                        <h2 className="Undergraduate_Admission"> <strong>Undergraduate Admission</strong> </h2>
                        <br />
                        <p>
                            About 1,700 freshmen and 30 transfer students are admitted to Stanford each year. We review each applicant with an eye to academic excellence, intellectual vitality and personal context.
                        </p>
                        <br />
                        <p><a href="https://www.youtube.com/watch?v=DNCAvA9Ch5w">Undergraduate Admission</a></p>

                        <h2 className="Undergraduate_Financial"> <strong>Undergraduate Financial Aid</strong> </h2>
                        <br />
                        <p>
                            Stanford meets the full financial need of every admitted undergrad who qualifies for assistance. Tuition is covered for undergrads with family incomes under $150,000. Tuition, room and board are covered for undergrads with family incomes below $75,000.
                        </p>
                        <br />
                        <p><a href="https://www.youtube.com/watch?v=DNCAvA9Ch5w">Undergraduate Financial Aid</a></p>

                        <h2 className="Profile"> <strong>Profile of the Class of 2022</strong> </h2>
                        <br />
                        <p><a href="https://www.stanford.edu/admission">Class of 2022</a></p>
                    </div>



                    <div>
                        <img className="image2" src={Admission_imag2} alt="my-img" />
                    </div>

                </div>


                <div className="Graduate_Studies">
                    <h1 className="Graduate">Graduate Studies</h1>

                    <div className="Studies">

                        <div className="image3">
                            <img className="image4" src={Admissio3} alt="my-img" />
                        </div>

                        <div className="Graduat_oq">

                            <h2 className="Undergraduate_Admission"> <strong>Graduate Admission</strong> </h2>
                            <br />
                            <p>
                                More than 65 departments and programs offer graduate and professional degrees at Stanford. Admission requirements vary greatly among them.
                            </p>
                            <br />
                            <p><a href="https://www.youtube.com/watch?v=DNCAvA9Ch5w">Graduate Admissions</a></p>

                            <h2 className="Undergraduate_Admission"> <strong>Financing Graduate Study</strong> </h2>
                            <br />
                            <p>
                                The cost of graduate study at Stanford — and the resources available for financial support — vary by degree, school and enrollment status. About 82% of Stanford graduate students receive financial assistance.
                            </p>
                            <br />
                            <p><a href="https://www.youtube.com/watch?v=DNCAvA9Ch5w">Graduate Student Funding</a></p>

                            <h2 className="Undergraduate_Admission"> <strong>Vice Provost for Graduate Education</strong> </h2>
                            <br />
                            <p>
                                The Office of the Vice Provost for Graduate Education offers information for prospective students of the nearly 100 departments and programs offering graduate degrees.
                            </p>
                            <br />
                            <p><a href="https://www.youtube.com/watch?v=DNCAvA9Ch5w">VPGE Information for Prospective Students</a></p>

                        </div>

                    </div>

                </div>

                <div className="Financial">
                    <h1 className="Admission-title"> <strong>Financial Aid</strong></h1>

                    <p className="We_are">We are committed to making a world-class education affordable.</p>
                    <br />
                    <br />
                    <div className="Financial_father">

                        <div className="Financial_left">

                            <h2>About 80%</h2>
                            <p>of all students receive financial aid</p>
                            <br />
                            <br />
                            <h2>Tuition, room & board covered</h2>
                            <p>for undergrads with family incomes below $75,000</p>

                        </div>

                        <div className="Financial_right">

                            <h2>Tuition covered</h2>
                            <p>for undergrads with family incomes below $150,000</p>
                            <br />
                            <br />
                            <h2>Graduate aid available</h2>
                            <p>based on available funds and academic merit</p>

                        </div>


                    </div>

                    <button className="More_About"><strong>More About Financial Aid</strong></button>

                </div>

                <h1 className="Admission-title"> <strong>Applying To Other Programs</strong></h1>
                <div className="Applying">
                    <div className="Summer">
                        

                            <div>
                                <h1>
                                    President Marc Tessier-Lavigne
                                </h1>
                                <p>
                                    Marc Tessier-Lavigne became Stanford University’s <br /> eleventh president on September 1, 2016.
                                </p>

                                <p><a href="https://www.youtube.com/watch?v=DNCAvA9Ch5w">Office of the President</a></p>

                            </div>

                    </div>

                    <div className="Lifelong">
                        <div>

                            <div>
                                <h1>
                                    Provost Persis Drell
                                </h1>
                                <p>
                                    Persis Drell is Stanford’s thirteenth provost, the chief <br /> academic and budgetary officer of the University.
                                </p>

                                <p><a href="https://www.youtube.com/watch?v=DNCAvA9Ch5w">Office of the Provost</a></p>

                            </div>

                        </div>
                    </div>

                    <div className="Postdocs">
                        <div>

                            <div>
                                <h1>
                                    Other Administration
                                </h1>
                                <p>
                                    The University is also governed by a Board of Trustees <br /> and Faculty Senate and supported by numerous offices.
                                </p>

                                <p><a href="https://www.youtube.com/watch?v=DNCAvA9Ch5w">University Administration</a></p>

                            </div>

                        </div>
                    </div>
                </div>




            </div>
            <FooterNav />
        </div>
    );
}
export default Admission;
