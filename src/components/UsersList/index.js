import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { Person } from '@material-ui/icons';
import styles from './styles';


const iconClassName = (classes, available) => classNames({
    [classes.iconAvailable]: available,
    [classes.iconUnavailable]: !available
});

const UsersLists = ({ classes, users, onSelect }) => (
    <List component="nav" aria-labelledby="nested-list-subheader">
        {users.map((user, index) => (
            <ListItem button onClick={() => onSelect(user.toJS())} className={classes.lobbyItem} key={index}>
                <ListItemIcon>
                    <Person className={iconClassName(classes, user.get('available'))} />
                </ListItemIcon>
                <ListItemText primary={user.get('username')} />
            </ListItem>
        ))}
    </List>
);

export default withStyles(styles)(UsersLists);
