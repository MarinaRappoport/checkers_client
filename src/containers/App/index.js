import React from 'react';
import { Switch, HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Authentication from '../Authentication';
import PrivateRoute from '../../components/PrivateRoute';

class App extends React.Component {
    render() {
        const { isLogin } = this.props;
        const loginRouteConfig = {
            redirectUrl: '/auth/login',
            redirected: !isLogin
        };

        return (
            <Router>
                <Switch>
                    <PrivateRoute
                        path="/auth" component={Authentication}
                        config={{ redirectUrl: '/', redirected: isLogin }}
                    />
                    <PrivateRoute path="/" component={() => <div></div>} config={loginRouteConfig} />
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.get('isLogin')
});

export default connect(mapStateToProps)(App);
