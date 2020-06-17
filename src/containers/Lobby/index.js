import React, { Fragment } from 'react';
import { Grid, withStyles, Button } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UsersLists from '../../components/UsersList';
import GameController from '../../controllers/GameController';
import * as actions from './actions';
import * as AppActions from '../App/actions';
import styles from './styles';
import config from '../../config.json';

class Lobby extends React.Component {
    constructor(props) {
        super(props);

        this.onSelectUser = this.onSelectUser.bind(this);
        this.recivedInvitation = this.recivedInvitation.bind(this);
    }

    componentWillMount() {
        this.props.fetchAllPlayers();
    }

    componentDidMount() {
        GameController.bindAction(config.socketListen.gameInvitation, this.recivedInvitation);
    }

    recivedInvitation(invitation) {
        const { fromUser } = invitation;
        const { classes, closeSnackbar } = this.props;

        this.props.enqueueSnackbar({
            message: `הזמנה למשחק מאת ${fromUser}`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
                action: key => (
                    <Fragment>
                        <Button className={classes.acceptInvitationButton} onClick={() => alert(key)}>קבל</Button>
                        <Button onClick={() => closeSnackbar(key)}>בטל</Button>
                    </Fragment>
                ),
            },
        });
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
    invitePlayer: actions.invitePlayer,
    enqueueSnackbar: AppActions.enqueueSnackbar,
    closeSnackbar: AppActions.closeSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Lobby));
