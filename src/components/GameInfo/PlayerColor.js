import React from 'react';

const PlayerColor = ({ color }) => {
    const style = {
        background: color || '#cccccc',
        font: '16px bold',
        color: 'red',
        textAlign: 'center',
        width: '20px',
        height: '20px',
        border: '1px solid #000'
    };

    return (
    <div style={style}>{color === null && <>X</>}</div>
    );
};


export default PlayerColor;
