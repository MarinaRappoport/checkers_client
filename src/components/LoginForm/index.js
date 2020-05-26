import React from 'react';
import { Grid, withStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './styles';

class LoginForm extends React.Component {
    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h1>התחבר</h1>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6}>
                            <Button variant="contained" color="primary" fullWidth>
                                התחבר
                            </Button>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Button variant="outlined" color="primary" fullWidth component={Link} to='/auth/register'>
                                הירשם
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(LoginForm);