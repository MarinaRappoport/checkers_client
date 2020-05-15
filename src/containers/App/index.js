import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Authentication from '../Authentication';
import PrivateRoute from '../../components/PrivateRoute';

class App extends React.Component {
    render() {
        const loginRouteConfig = {
            redirectUrl: '/auth/login',
            redirected:false
        };

        return (
            <Router>
                <Switch>
                    <PrivateRoute
                        exact path="/" component={() => <div></div>}
                        config={loginRouteConfig}
                    />
                    <Route path="/auth" component={Authentication} />
                </Switch>
            </Router>
        );
    }
}

export default App;
