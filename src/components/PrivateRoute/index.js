import React from 'react'
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ config: { redirected, redirectUrl }, component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => redirected ?
            <Redirect to={{pathname: redirectUrl, state: {from: props.location}}} /> :
            <Component {...props} />
        }
    />
);

export default PrivateRoute;
