import React from 'react';
import moment from 'moment';
import { Grid, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import PlayerColor from '../GameInfo/PlayerColor';

const getPlayerInfo = (game, color) => `${game.getIn([color,'username'])} (${game.getIn([color,'score'])})`;
const gameDate = (game) => moment(game.get('timestamp')).format("DD/MM/YYYY HH:mm:ss");

function HistoryItem({ games }) {
    return (
        <Grid container justify="center" alignContent="center">
            <Grid item>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>White</TableCell>
                            <TableCell>Black</TableCell>
                            <TableCell>Winner</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {games.map(game => (    
                            <TableRow key={game.get('gameId')}>
                                <TableCell>{game.get('gameId')}</TableCell>
                                <TableCell>{getPlayerInfo(game, 'white')}</TableCell>
                                <TableCell>{getPlayerInfo(game, 'black')}</TableCell>
                                <TableCell><PlayerColor color={game.get('winner')} /></TableCell>
                                <TableCell>{gameDate(game)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
}

export default HistoryItem;