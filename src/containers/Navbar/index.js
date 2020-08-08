import React from 'react';
import { withStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import * as authActions from '../Authentication/actions';

const Navbar = ({ classes }) => {
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.auth.get('isLogin'));
    const user = useSelector(state => state.auth.get('user'));
    const logout = () => dispatch(authActions.logout(user.get('id')));

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    {'Checkers'}
                </Typography>
                {
                    !isLogin &&
                    <Button color="inherit">Login</Button>
                }
                {
                    isLogin &&
                    <>
                        <Typography variant="inherit">{user.get('username')}</Typography>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </>
                }
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(Navbar);