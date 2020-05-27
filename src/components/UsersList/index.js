import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, withStyles } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import styles from './styles';

const UsersLists = ({ classes, users }) => (
    <List component="nav" aria-labelledby="nested-list-subheader">
        {users.map((user, index) => (
            <ListItem button onClick={() => alert('test')} className={classes.lobbyItem} key={index}>
                <ListItemIcon>
                    <Person />
                </ListItemIcon>
                <ListItemText primary={user.get('username')} />
            </ListItem>
        ))}
    </List>
);

export default withStyles(styles)(UsersLists);
