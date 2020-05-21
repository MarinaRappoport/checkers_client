import React from 'react';
import { Grid, withStyles, FilledInput, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import styles from './styles';

class RegisterForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <h1>הירשם</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Field component={FilledInput} placeholder="שם משתמש" name="username" type="text" />
                    </Grid>
                    <Grid item xs={12}>
                        <Field component={FilledInput} placeholder="סיסמא" name="password" type="password" />
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={6}>
                                <Button variant="contained" color="primary" fullWidth>
                                    {'התחבר'}
                                </Button>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Button variant="outlined" color="primary" fullWidth component={Link} to='/auth/register'>
                                    {'הירשם'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

const formConfig = {
    form: 'register'
};
export default withStyles(styles)(reduxForm(formConfig)(RegisterForm));