import { SELECT_PIECE } from "./consts";

export const onSelectPiece = (row, column) => {
    return {type: SELECT_PIECE, payload: { row, column }};
};