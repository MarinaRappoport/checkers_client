import React, { Fragment } from 'react';
import { Table, TableBody, TableCell, TableRow, Divider, Button } from '@material-ui/core';
import PlayerColor from './PlayerColor';

const GameInfo = ({ opponent, player, currentPlayerColor, surrend }) => {
    const onSurrend = () => {
        if(window.confirm('בטוח אתה רוצה להיכנע?')) {
            surrend();
        }
    };

    return (
        <Fragment>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>צבע שחקן</TableCell>
                        <TableCell><PlayerColor color={player.get('color')} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>תור השחקן</TableCell>
                        <TableCell><PlayerColor color={currentPlayerColor} /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Divider />
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>יריב</TableCell>
                        <TableCell>{opponent.get('username')}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>צבע יריב</TableCell>
                        <TableCell><PlayerColor color={opponent.get('color')} /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Divider />
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Button variant="contained" onClick={onSurrend} color="primary">היכנע</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Fragment>
    );
};

export default GameInfo;