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
    if(!values.password_repeat) {
        errors.password_repeat = "חייב לאמת סיסמה";
    } else if(values.password_repeat !== values.password) {
        errors.password_repeat = "אימות סיסמה אינו תקין";
    }
    if(!values.name) {
        errors.name = "יש לציין שם מלא";
    }

    return errors;
};


class RegisterForm extends React.Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <h1>הירשם</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Field component={TextField} label="שם משתמש" name="username" type="text" />
                    </Grid>
                    <Grid item xs={12}>
                        <Field component={TextField} label="סיסמא" name="password" type="password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Field component={TextField} label="אימות סיסמה" name="password_repeat" type="password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Field component={TextField} name="name" type="text" label="שם מלא" />
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={6}>
                                <Button disabled={pristine || submitting} type="submit" variant="contained" fullWidth color="primary">
                                    {'הירשם'}
                                </Button>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Button variant="outlined" color="primary" fullWidth component={Link} to='/auth/login'>
                                    {'התחבר'}
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
    form: 'register',
    validate,
};
export default withStyles(styles)(reduxForm(formConfig)(RegisterForm));