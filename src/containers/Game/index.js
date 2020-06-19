import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import * as actions from './actions';
import GameBoard from '../../components/GameBoard';

const Game = ({ classes }) => {
    const dispatch = useDispatch();

    const board = useSelector(state => state.game.get('board'));
    const selectOptions = useSelector(state => state.game.get('selectOptions'));
    const selected = useSelector(state => state.game.get('selected'));
    const onSelectPiece = ({row, column}) => dispatch(actions.onSelectPiece(row, column));

    return (
        <Grid container spacing={0} direction="column" alignContent="center" justify="center">
            <Grid item xs={12} className={classes.title}><h1>Game</h1></Grid>
            <Grid item xs={6}>
                <GameBoard
                    board={board} selectOptions={selectOptions} selected={selected}
                    onSelectPiece={onSelectPiece}
                />
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Game);