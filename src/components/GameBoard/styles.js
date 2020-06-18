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
        paddingLeft: '10px',
        cursor: 'pointer'
    },
    black: {
        background: 'black',
        color: 'white'
    },
    white: {
        background: 'white'
    },
});
