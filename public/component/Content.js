import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductGrid from "./product/ProductGrid";

import SignIn from "./SignIn";
import {
    HOME_ROUTE,
    SIGN_IN_ROUTE,
    /*PRODUCT_DETAIL_ROUTE,
    PRODUCT_MANAGEMENT_ROUTE*/
} from '../constants';

const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route path={HOME_ROUTE} exact component={ProductGrid}/>
                <Route path={SIGN_IN_ROUTE} component={SignIn}/>

                <Redirect to="/"/>
            </Switch>
        </div>
    );
};

export default Content;
/*
<Route path={PRODUCT_DETAIL_ROUTE(':id')} exact component={EventRoom}/>
<Route path={PRODUCT_MANAGEMENT_ROUTE} exact component={EventManagement}/>
                */