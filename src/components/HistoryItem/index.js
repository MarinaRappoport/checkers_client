import React from 'react';
import { Grid, Table, TableHead, TableRow, TableCell, TableBody, Card } from '@material-ui/core';
import PlayerColor from '../GameInfo/PlayerColor';

function HistoryItem() {
    return (
        <Grid container justify="center" alignContent="center">
            <Grid item>
                <Card>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Player 1</TableCell>
                            <TableCell>Player 2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell>AAA</TableCell>
                            <TableCell>BBB</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Color</TableCell>
                            <TableCell><PlayerColor color="white" /></TableCell>
                            <TableCell><PlayerColor color="black" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Points</TableCell>
                            <TableCell>120</TableCell>
                            <TableCell>130</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Status</TableCell>
                            <TableCell>Won</TableCell>
                            <TableCell>Lost</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </Card>
            </Grid>
        </Grid>
    );
}

export default HistoryItem;