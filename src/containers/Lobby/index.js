import React, { Fragment } from 'react';
import { Grid, withStyles, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
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
        this.gameStart = this.gameStart.bind(this);
    }

    componentWillMount() {
        this.props.fetchAllPlayers();
    }

    componentDidMount() {
        GameController.bindAction(config.socketListen.gameInvitation, this.recivedInvitation);
        GameController.bindAction(config.socketListen.gameStart, this.gameStart);
    }

    gameStart(info) {
        this.props.history.push('/game');
    }

    recivedInvitation(invitation) {
        const { fromUser } = invitation;
        const { classes, closeSnackbar, acceptPlayer } = this.props;

        const action = key => (
            <Fragment>
                <Button
                    className={classes.acceptInvitationButton}
                    onClick={() => { acceptPlayer(fromUser); closeSnackbar(key); }}
                >
                    {`קבל`}
                </Button>
                <Button onClick={() => closeSnackbar(key)}>
                    {`בטל`}
                </Button>
            </Fragment>
        );

        this.props.enqueueSnackbar({
            message: `הזמנה למשחק מאת ${fromUser}`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
                action,
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
    acceptPlayer: actions.acceptPlayer,
    enqueueSnackbar: AppActions.enqueueSnackbar,
    closeSnackbar: AppActions.closeSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Lobby)));
