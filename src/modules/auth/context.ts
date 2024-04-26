import { createContext } from 'react';
import { Types } from 'modules/auth';

export  const AuthContext = createContext<Types.IContext>({} as Types.IContext);

