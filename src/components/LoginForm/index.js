import React from 'react';
import { Grid, withStyles, FilledInput, Button } from '@material-ui/core';
import styles from './styles';

class LoginForm extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h1>התחבר</h1>
                </Grid>
                <Grid item xs={12}>
                    <FilledInput placeholder="שם משתמש" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <FilledInput placeholder="סיסמא" type="password" />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item lg={2}></Grid>
                        <Grid item xs={10} lg={4}>
                            <Button variant="contained" color="primary" fullWidth>
                                התחבר
                            </Button>
                        </Grid>
                        <Grid item xs={10} lg={4}>
                            <Button variant="outlined" color="primary" fullWidth>
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