import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import HistoryItem from '../../components/HistoryItem';

function History({ classes }) {
    return (
        <Grid container alignContent="center" justify="center">
            <Grid item lg={10}>
                <Grid container spacing={2}>
                    {Array(5).fill(0).map((i) => (
                        <Grid item xs={6} lg={6}>
                            <HistoryItem />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(History);