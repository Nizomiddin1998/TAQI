import React from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import NewsPage from '../News/NewsPage';
import FooterNav from '../templates/footer/FooterNav';
import Nav from '../templates/navbar/Nav';
import EventPage from '../Events/EventPage';

function PageRoute() {
    return (
        <div>
           
            <main>
            <Switch>
                    {/* /* <Route path="/about" component={About} />  */}


                    {/* <Route path="/academics" component={Academics} />
                    <Route path="/admission" component={Admission} /> */}
                    
                    {/* <Route path="/campus" component={Campus} /> */}
                    <Route path="/news" component={NewsPage} />
                   

                </Switch>
            </main>

            
        </div>
    );
}

export default PageRoute;