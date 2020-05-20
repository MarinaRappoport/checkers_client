import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { Route } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import styles from './styles';

class Authentication extends React.Component {
    render() {
        const { classes, match, isLogin } = this.props;

        return (
            <Grid container spacing={0} direction="column" alignContent="center" justify="center">
                <Grid item xs={10} lg={6} className={classes.authBox}>
                    <Route exact path={`${match.path}/register`} component={RegisterForm} />
                    <Route exact path={`${match.path}/login`} component={LoginForm} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Authentication);
