import React from 'react';
import { Modal, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
});

const GameOver = ({ classes, open, winnerUsername, onClose }) => {
    const message = winnerUsername !== '' ? `The winner is ${winnerUsername}` : `Draw!`;

    return (
        <Modal open={open} className={classes.modal} onClose={onClose}>
            <div className={classes.paper}>
                <h2 id="transition-modal-title">Game over</h2>
                <p id="transition-modal-description">
                    {message}
                </p>
                <p><button onClick={onClose}>Exit</button></p>
            </div>
        </Modal>
    );
}


export default withStyles(styles)(GameOver);
