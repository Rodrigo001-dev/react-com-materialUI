import React, { useState } from 'react';

import { User } from '../../models';
import UsersContext from './Context';

export const UserProvider: React.FunctionComponent = (props) => {
  const usersState = useState<User[]>([]);

  return (
    <UsersContext.Provider value={usersState}>
      {props.children}
    </UsersContext.Provider>
  );
};