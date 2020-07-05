import { range, times, isEqual } from 'lodash';


export const BLACK = 'black';
export const WHITE = 'white';

export const parsePlayerColor = (color) => {
    switch (color.toLocaleLowerCase()) {
        case WHITE.toLowerCase():
            return WHITE;
        case BLACK.toLowerCase():
            return BLACK;
        default:
            return null;
    }
}

export const cleanBoard = () => {
    const board = [];
    for (let i of range(0, 8)) {
        board.push([]);
        times(8, () => board[i].push(null));
    }
    return board;
};

export const decreasePosition = (pos) => {
    return {
        row: pos.row - 1,
        column: pos.column - 1
    };
};

export const comparePoints = (p1, p2) => isEqual(p1, p2);

export const compareJsonPoints = (p1, p2) => {
    return p1?.row === p2?.row && p1?.column === p2?.column;
};

export const jsonPointToArray = (point) => {
    return [point.row, point.column];
};

export const isPointInList = (points, point) => {
    return points.some(p => comparePoints(p, point));
};

export const preprocessLegalMoves = (moves) => {
    return moves.map(move => ({
        ...move,
        from: decreasePosition(move.from),
        to: decreasePosition(move.to)
    }));
}
