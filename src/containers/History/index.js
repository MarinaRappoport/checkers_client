import React, { useEffect } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import * as actions from './actions';
import HistoryItem from '../../components/HistoryItem';
import { useDispatch, useSelector } from 'react-redux';

function History({ classes }) {
    const dispatch = useDispatch();
    const games = useSelector(state => state.history.get('games'));
    const userId = useSelector(state => state.auth.getIn(['user', 'id']));

    useEffect(() => {
        dispatch(actions.fetchHistoryGames(userId));
    }, [dispatch, userId]);

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