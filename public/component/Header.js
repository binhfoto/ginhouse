import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import SignOutIcon from 'material-ui-icons/ExitToApp';
import SignInIcon from 'material-ui-icons/Security';
import EditIcon from 'material-ui-icons/ModeEdit';
import GinHouseIcon from 'material-ui-icons/FilterVintage';/*Gesture*/
import InfoIcon from 'material-ui-icons/InfoOutline';
import { LinearProgress } from 'material-ui/Progress';

import {
    HOME_ROUTE,
    PRODUCT_MANAGEMENT_ROUTE,
    SIGN_IN_ROUTE
} from '../constants';

import {
    signOut
} from "../action";

import Token from '../service/token';

const Header = ({isSignedIn = false, title = 'Gin House', onSignOut, isLoading, location: {pathname}, history}) => {

    let logIn, logOut, products;

    const home = <IconButton color="inherit" onClick={() => {
        pathname !== HOME_ROUTE && history.push(HOME_ROUTE);
    }}><HomeIcon/></IconButton>;

    const info = <IconButton color="inherit" onClick={() => {
        /*pathname !== HOME_ROUTE && history.push(HOME_ROUTE);*/
    }}><InfoIcon/></IconButton>;

    const _onSignOut = () => {
        Token.remove();
        onSignOut();
        (pathname !== HOME_ROUTE) && history.push(HOME_ROUTE);
    };

    if (pathname !== SIGN_IN_ROUTE) {
        if (isSignedIn) {
            logOut = <IconButton color="inherit" onClick={_onSignOut}><SignOutIcon/></IconButton>;
            products = <IconButton color="inherit" onClick={() => history.push(PRODUCT_MANAGEMENT_ROUTE)}><EditIcon/></IconButton>
        } else {
            logIn =  <IconButton color="inherit" onClick={() => {history.push(SIGN_IN_ROUTE)}}><SignInIcon/></IconButton>;
        }
    }

    return (
        <div className="header">
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <GinHouseIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className="title">{title}</Typography>
                    {home}
                    {info}
                    {logIn}
                    {products}
                    {logOut}
                </Toolbar>
            </AppBar>
            {isLoading ? <LinearProgress color="secondary"/> : <div className="empty-progress-bar"/>}
        </div>
    );
};

export default withRouter(
    connect(
        ({isSignedIn, isLoading}) => ({isSignedIn, isLoading}),
        {onSignOut: signOut}
    )(Header)
);