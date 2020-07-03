import React, { Fragment } from 'react';
import { Table, TableBody, TableCell, TableRow, Divider } from '@material-ui/core';
import PlayerColor from './PlayerColor';

const GameInfo = ({ opponent, player }) => {
    return (
        <Fragment>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>צבע שחקן</TableCell>
                        <TableCell><PlayerColor color={player.get('color')} /></TableCell>
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
        </Fragment>
    );
};

export default GameInfo;