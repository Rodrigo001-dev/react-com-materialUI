import React, { useContext } from 'react';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import UsersContext from '../contexts/Users/Context';

interface UsersListProps {
}

export const UserList: React.FunctionComponent<UsersListProps> = (props) => {
  const [users] = useContext(UsersContext);

  return (
    <List>
      {users.map((user, key) => (
        <ListItem button key={key}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
};