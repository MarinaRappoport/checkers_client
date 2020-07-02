import React from 'react';

const PlayerColor = ({ color }) => {
    const style = {
        background: color,
        width: '20px',
        height: '20px',
        border: '1px solid #000'
    };
    return (
        <div style={style}></div>
    );
};


export default PlayerColor;
