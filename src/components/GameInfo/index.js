import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

const GameInfo = ({ opponent }) => {
    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>יריב</TableCell>
                    <TableCell>{opponent.get('username')}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default GameInfo;