export default (theme) => ({
    board: {
        direction: 'ltr',
        border: '1px solid #000',
        borderCollapse: 'collapse',
        borderSpacing: 0,
    },
    square: {
        width: '60px',
        height: '60px',
        cursor: 'pointer'
    },
    black: {
        background: 'black',
        color: 'white'
    },
    white: {
        background: 'white'
    },
    optionSquare: {
        background: '#03ff03',
        opacity: 0.8
    },
});
