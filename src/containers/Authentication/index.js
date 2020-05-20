import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import LoginForm from '../../components/LoginForm';
import styles from './styles';

class Authentication extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={0} direction="column" alignContent="center" justify="center">
                <Grid item xs={10} lg={6} className={classes.authBox}>
                    <LoginForm />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Authentication);
