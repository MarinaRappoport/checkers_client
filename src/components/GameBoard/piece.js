import React from 'react';

const defaultStyle = {
    width: '80%',
    borderRadius: '30px',
    marginLeft: '5px',
    height: '80%'
};

export default function Piece({ piece, isSelected, onSelect }) {
    if (piece === null)
        return null;

    const style = { ...defaultStyle };
    style.background = (piece === 'black') ? '#000' : '#fff';
    style.border = isSelected ? '3px solid red' : null;

    return <div style={style} onClick={onSelect}></div>;
};