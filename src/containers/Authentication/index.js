import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from './actions';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import styles from './styles';

class Authentication extends React.Component {
    constructor(props) {
        super(props);

        this.submitRegister = this.submitRegister.bind(this);
    }

    submitRegister(event) {
        try {
            this.props.register(event);
        } catch(err) {
            throw new SubmissionError({username: "שם משתמש כבר קיים"});
        }
    }

    render() {
        const { classes, match } = this.props;

        return (
            <Grid container spacing={0} direction="column" alignContent="center" justify="center">
                <Grid item xs={10} lg={6} className={classes.authBox}>
                    <Route
                        exact path={`${match.path}/register`}
                        component={() => <RegisterForm onSubmit={this.submitRegister} />}
                    />
                    <Route
                        exact path={`${match.path}/login`}
                        component={LoginForm}
                    />
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, props) => bindActionCreators({
    register: actions.register
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Authentication));
