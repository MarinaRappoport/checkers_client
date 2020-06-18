import React from 'react';
import { withStyles } from '@material-ui/core';
import classnames from 'classnames';
import styles from './styles';

const RenderSquare = (piece) => {
    if(piece === null)
        return null;
    
    let style = {
        width: '80%',
        borderRadius: '30px',
        height: '80%'
    };
    if(piece === 'black') {
        style = {
            ...style,
            background: 'black'
        };
    } else {
        style = {
            ...style,
            background: 'white'
        };
    }

    return <div style={style}></div>;
};

const GetColor = (row, column) => {
    if(row % 2 === 0) {
        if(column % 2 === 0)
            return 'white';
        return 'black';
    } else {
        if(column % 2 === 0)
            return 'black';
        return 'white';
    }
};

const GameBoard = ({ classes, board }) => {
    return (
        <table className={classes.board}>
            {board.map((squares, row) => (
                <tr key={row}>
                    {squares.map((square, column) => (
                        <td
                            key={column}
                            className={classnames(classes.square, classes[GetColor(row, column)])}
                        >
                            {RenderSquare(square)}
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    );
};

export default withStyles(styles)(GameBoard);