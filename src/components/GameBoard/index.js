import React from 'react';
import { withStyles } from '@material-ui/core';
import classnames from 'classnames';
import styles from './styles';
import Piece from './piece';

const GetSquareColor = (row, column) => {
    if (row % 2 === 0) {
        if (column % 2 === 0)
            return 'white';
        return 'black';
    } else {
        if (column % 2 === 0)
            return 'black';
        return 'white';
    }
};

const isPossibleSquare = (row, column, possibleSquares) => {
    return possibleSquares.filter(([x, y]) => x === row && y === column).size > 0
};

const GameBoard = ({ classes, board, possibleSquares, selected, onSelectPiece }) => {
    return (
        <table className={classes.board}>
            {board.map((squares, row) => (
                <tr key={row}>
                    {squares.map((square, column) => (
                        <td
                            key={column}
                            className={classnames(
                                classes.square, classes[GetSquareColor(row, column)],
                                { [classes.optionSquare]: isPossibleSquare(row, column, possibleSquares) }
                            )}
                            onClick={() => onSelectPiece({ row, column })}
                        >
                            <Piece
                                piece={square}
                                isSelected={selected.get(0) === row && selected.get(1) === column}
                            />
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    );
};

export default withStyles(styles)(GameBoard);