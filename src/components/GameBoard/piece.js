import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const defaultStyle = {
    width: '80%',
    borderRadius: '30px',
    marginLeft: '5px',
    height: '80%',
    textAlign: 'center'
};

const kingCrownStyle = { color: '#b58500' };

export default function Piece({ piece, isSelected, onSelect }) {
    if (piece === null)
        return null;
    
    const color = piece.get('color'); 
    const isKing = piece.get('king');

    const style = { ...defaultStyle };
    style.background = (color === 'black') ? '#000' : '#fff';
    style.border = isSelected ? '3px solid red' : null;

    return <div style={style} onClick={onSelect}>
        {isKing && <AddCircleOutlineIcon style={kingCrownStyle} />}
    </div>;
};