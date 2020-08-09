import React, { Fragment } from 'react';
import { Grid, withStyles, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UsersLists from '../../components/UsersList';
import GameIOController from '../../controllers/GameIOController';
import UsersController from '../../controllers/UsersController';
import * as actions from './actions';
import * as AppActions from '../App/actions';
import * as GameActions from '../Game/actions';
import styles from './styles';
import config from '../../config.json';

class Lobby extends React.Component {
    constructor(props) {
        super(props);

        this.onSelectUser = this.onSelectUser.bind(this);
        this.recivedInvitation = this.recivedInvitation.bind(this);
        this.gameStart = this.gameStart.bind(this);
        this.checkIfAlreadyInGame = this.checkIfAlreadyInGame.bind(this);
    }

    componentWillMount() {
        this.props.fetchAllPlayers();
    }

    componentDidMount() {
        GameIOController.bindAction(config.socketListen.gameInvitation, this.recivedInvitation);
        GameIOController.bindAction(config.socketListen.gameStart, this.gameStart);
        this.checkIfAlreadyInGame();
    }

    async checkIfAlreadyInGame() {
        const username = this.props.loggedUser.get('username');
        UsersController.get_current_game(username)
            .then((game) => {
                this.gameStart(game);
            });
    }

    gameStart(game) {
        const { loadGame, history, loggedUser } = this.props;
        loadGame(game, loggedUser.get('username'));
        history.push('/game');
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
        const action = key => (
            <Button style={{color:'white'}} onClick={() => this.props.closeSnackbar(key)}>
                {`אישור`}
            </Button>
        );
        if (user.username === this.props.loggedUser.get('username')) {
            this.props.enqueueSnackbar({
                message: 'לא ניתן להזמין את עצמך למשחק',
                options: {
                    key: new Date().getTime() + Math.random(),
                    variant: 'outlined',
                    action
                }
            });
        }

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
    allUsers: state.lobby.get('allUsers'),
    loggedUser: state.auth.get('user')
});

const mapDispatchToProps = (dispatch, props) => bindActionCreators({
    fetchAllPlayers: actions.fetchAllPlayers,
    invitePlayer: actions.invitePlayer,
    acceptPlayer: actions.acceptPlayer,
    enqueueSnackbar: AppActions.enqueueSnackbar,
    closeSnackbar: AppActions.closeSnackbar,
    loadGame: GameActions.loadGame,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Lobby)));
