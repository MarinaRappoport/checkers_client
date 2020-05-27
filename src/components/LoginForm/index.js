import React from 'react';
import { Grid, withStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import TextField from '../TextField';
import styles from './styles';


const validate = (values) => {
    const errors = {};

    if(!values.username) {
        errors.username = "חייב לציין שם משתמש";
    }
    if(!values.password) {
        errors.password = "חייב לציין סיסמא";
    }

    return errors;
};


class LoginForm extends React.Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <h1>התחבר</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Field component={TextField} label="שם משתמש" name="username" type="text" />
                    </Grid>
                    <Grid item xs={12}>
                        <Field component={TextField} label="סיסמא" name="password" type="password" />
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={6}>
                                <Button disabled={pristine || submitting} type="submit" variant="contained" fullWidth color="primary">
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
    form: 'login',
    validate,
};
export default withStyles(styles)(reduxForm(formConfig)(LoginForm));