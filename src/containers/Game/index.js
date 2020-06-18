import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import GameBoard from '../../components/GameBoard';

class Game extends React.Component {
    render() {
        const { classes } = this.props;
        const board = [
            [null, 'white', null, 'white', null, 'white', null, 'white'],
            ['white', null, 'white', null, 'white', null, 'white', null],
            [null, 'white', null, 'white', null, 'white', null, 'white'],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 'black', null, 'black', null, 'black', null, 'black'],
            ['black', null, 'black', null, 'black', null, 'black', null],
            [null, 'black', null, 'black', null, 'black', null, 'black'],
        ];

        return (
            <Grid container spacing={0} direction="column" alignContent="center" justify="center">
                <Grid item xs={12} className={classes.title}><h1>Game</h1></Grid>
                <Grid item xs={6}>
                    <GameBoard board={board} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Game);