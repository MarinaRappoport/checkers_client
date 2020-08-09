import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import * as actions from './actions';
import GameBoard from '../../components/GameBoard';
import GameInfo from '../../components/GameInfo';

const Game = ({ classes }) => {
    const dispatch = useDispatch();

    const board = useSelector(state => state.game.get('board'));
    const selectableSquares = useSelector(state => state.game.get('selectableSquares'));
    const selected = useSelector(state => state.game.get('selected'));
    const opponent = useSelector(state => state.game.get('opponent'));
    const currentPlayer = useSelector(state => state.game.get('currentPlayer'));
    const player = useSelector(state => state.game.get('player'));
    const onSelectSquare = ({row, column}) => dispatch(actions.onSelectSquare(row, column));
    const surrend = () => actions.surrend();

    return (
        <Grid container spacing={0}>
            <Grid item xs={3} className={classes.game_sidebar}>
                <h1>Game</h1>
                
                <GameInfo
                    opponent={opponent} player={player}
                    surrend={surrend} currentPlayerColor={currentPlayer.get('color')}
                />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
                <div className={classes.gameContainer}>
                    <GameBoard
                        board={board} selectableSquares={selectableSquares} selected={selected}
                        onSelectSquare={onSelectSquare} דור
                    />
                </div>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Game);