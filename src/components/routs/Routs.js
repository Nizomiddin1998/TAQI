import React from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
// import About from '../pages/About/About';
import Academics from '../pages/Academics/Academics';
import Admission from '../pages/Admission/Admission';
import Campus from '../pages/Campus_life/Campus';
import EventPage from '../pages/Events/EventPage';
import Main from '../pages/main/Main';
import News from '../pages/pageRoutes/PageRoute';
import Ins_tarixi from '../Haqida/Umumiy/Ins_tarixi';
import Mamuriyat from '../Haqida/Umumiy/Mamuriyat/mamuriyat';
import Tashkilot from '../Haqida/Umumiy/Tashkilot/Tashkilot';
import UmumiyMalumot from '../Haqida/Umumiy/UmumiyMalumotlar/UmumiyMalumot';
import Senat from '../Haqida/Umumiy/Senat/Senat';
import Sifat from '../Haqida/Umumiy/SifatniTaminlash/Sifat';
import Boshqaruv from '../Haqida/Umumiy/Boshqaruv/Boshqaruv';
import Kengash from '../Haqida/Umumiy/Kengash/Kengash';
import IlmiyPage from '../pages/pageRoutes/Scientific/IlmiyPage';
import Research from '../pages/pageRoutes/Research/Research';
import Acceptance from '../pages/pageRoutes/Acceptance/Acceptance';


const Routs = () => {
    return (
        <div>

            <BrowserRouter>

                <Switch>
                    {/* /* <Route path="/about" component={About} />  */}


                    <Route path="/academics" component={Academics} />
                    <Route path="/admission" component={Admission} />
                    <Route path="/tadbir1" component={EventPage} />
                    <Route path="/campus" component={Campus} />
                    <Route path="/news" component={News} />
                    <Route path="/about" component={Ins_tarixi} />
                    <Route path="/mamuriyat" component={Mamuriyat} />
                    <Route path="/tashkilot" component={Tashkilot} />
                    <Route path="/umumiy" component={UmumiyMalumot} />
                    <Route path="/senat" component={Senat} />
                    <Route path="/sifat" component={Sifat} />
                    <Route path="/boshqaruv" component={Boshqaruv} />
                    <Route path="/kengash" component={Kengash} />
                    <Route path="/ilmiy1" component={IlmiyPage} />
                    <Route path="/tadqiqot1" component={Research} />
                    <Route path="/qabul1" component={Acceptance} />

                    <Route path="/" component={Main} />

                </Switch>

            </BrowserRouter>

        </div>
    );
}

export default Routs;
