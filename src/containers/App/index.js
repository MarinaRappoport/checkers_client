import React from 'react';
import { Switch, HashRouter as Router } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import styles from './styles';
import Authentication from '../Authentication';
import PrivateRoute from '../../components/PrivateRoute';

class App extends React.Component {
    render() {
        const { isLogin, classes } = this.props;
        const loginRouteConfig = {
            redirectUrl: '/auth/login',
            redirected: !isLogin
        };

        return (
            <div className={classes.root}>
                <Router>
                    <Switch>
                        <PrivateRoute
                            path="/auth" component={Authentication}
                            config={{ redirectUrl: '/', redirected: isLogin }}
                        />
                        <PrivateRoute path="/" component={() => <div></div>} config={loginRouteConfig} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.get('isLogin')
});

export default connect(mapStateToProps)(withStyles(styles)(App));
