import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UsersLists from '../../components/UsersList';
import * as actions from './actions';
import styles from './styles';

class Lobby extends React.Component {
    componentWillMount() {
        this.props.fetchAllPlayers();
    }

    render() {
        const { classes, allUsers } = this.props;

        return (
            <Grid container spacing={0} direction="column" alignContent="center" justify="center">
                <Grid item xs={10} lg={6} className={classes.lobbyBox}>
                    <UsersLists users={allUsers} />
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    allUsers: state.lobby.get('allUsers')
});

const mapDispatchToProps = (dispatch, props) => bindActionCreators({
    fetchAllPlayers: actions.fetchAllPlayers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Lobby));
