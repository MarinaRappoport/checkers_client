import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import PlayerColor from './PlayerColor';

const GameInfo = ({ opponent }) => {
    return (
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
    );
};

export default GameInfo;