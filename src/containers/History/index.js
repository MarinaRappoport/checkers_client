import React, { useEffect } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import * as actions from './actions';
import HistoryItem from '../../components/HistoryItem';
import { useDispatch, useSelector } from 'react-redux';

function History({ classes }) {
    const dispatch = useDispatch();
    const games = useSelector(state => state.history.get('games'));

    useEffect(() => {
        dispatch(actions.fetchHistoryGames());
    }, [dispatch]);

    return (
        <Grid container alignContent="center" justify="center">
            <Grid item lg={10}>
                <Grid container spacing={2}>
                    <HistoryItem games={games} />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(History);