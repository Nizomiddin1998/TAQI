import React from 'react';
import { Switch, Route , Link, BrowserRouter } from 'react-router-dom';
import Ins_tarixi from '../Umumiy/Ins_tarixi.js';
import Mamuriyat from '../Umumiy/Mamuriyat/Mamuriyat.js';


function RoutsH() {
    return (
        <div>
            <BrowserRouter>

                <Switch>
                    <Route path="/mamuriyat" component={Mamuriyat} />
                    <Route path="/" component={Ins_tarixi} />
                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default RoutsH;