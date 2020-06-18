import React from 'react';
import { Switch, HashRouter as Router } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';
import PrivateRoute from '../../components/PrivateRoute';
import * as authActions from '../Authentication/actions';
import Authentication from '../Authentication';
import Game from '../Game';
import Notifier from './notifier';
import Lobby from '../Lobby';

class App extends React.Component {
    componentWillMount() {
        this.props.initLogin();
    }

    render() {
        const { isLogin, classes } = this.props;
        const loginRouteConfig = {
            redirectUrl: '/auth/login',
            redirected: !isLogin
        };

        return (
            <div className={classes.root}>
                <Notifier />
                <Router>
                    <Switch>
                        <PrivateRoute
                            path="/auth" component={Authentication}
                            config={{ redirectUrl: '/', redirected: isLogin }}
                        />
                        <PrivateRoute path="/game" component={Game} config={loginRouteConfig} />
                        <PrivateRoute path="/" component={Lobby} config={loginRouteConfig} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.get('isLogin')
});

const mapDispatchToProps = (dispatch, props) => bindActionCreators({
    initLogin: authActions.initLogin
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
