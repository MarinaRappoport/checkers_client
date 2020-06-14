import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UsersLists from '../../components/UsersList';
import * as actions from './actions';
import styles from './styles';

class Lobby extends React.Component {
    constructor(props) {
        super(props);

        this.onSelectUser = this.onSelectUser.bind(this);
    }

    componentWillMount() {
        this.props.fetchAllPlayers();
    }

    onSelectUser(user) {
        this.props.invitePlayer(user);
    }

    render() {
        const { classes, allUsers } = this.props;

        return (
            <Grid container spacing={0} direction="column" alignContent="center" justify="center">
                <Grid item xs={10} lg={6} className={classes.lobbyBox}>
                    <UsersLists users={allUsers} onSelect={this.onSelectUser} />
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    allUsers: state.lobby.get('allUsers')
});

const mapDispatchToProps = (dispatch, props) => bindActionCreators({
    fetchAllPlayers: actions.fetchAllPlayers,
    invitePlayer: actions.invitePlayer
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Lobby));
