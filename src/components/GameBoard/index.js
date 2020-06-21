import React from 'react';
import { withStyles } from '@material-ui/core';
import classnames from 'classnames';
import styles from './styles';

const RenderSquare = ({piece, isSelected, onSelect}) => {
    if (piece === null)
        return null;

    let style = {
        width: '80%',
        borderRadius: '30px',
        marginLeft: '5px',
        height: '80%'
    };
    if (piece === 'black') {
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

    if(isSelected) {
        style['border'] = '3px solid red';
    }

    return <div style={style} onClick={onSelect}></div>;
};

const GetColor = (row, column) => {
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

const GameBoard = ({ classes, board, possibleSquares, selected, onSelectPiece }) => {
    return (
        <table className={classes.board}>
            {board.map((squares, row) => (
                <tr key={row}>
                    {squares.map((square, column) => (
                        <td
                            key={column}
                            className={classnames(
                                classes.square, classes[GetColor(row, column)],
                                {[classes.optionSquare]: possibleSquares.filter(([x,y]) => x === row && y === column).size > 0}
                            )}
                            onClick={() => onSelectPiece({row, column})}
                        >
                            {RenderSquare({
                                piece: square,
                                isSelected: selected.get(0) === row && selected.get(1) === column
                            })}
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    );
};

export default withStyles(styles)(GameBoard);