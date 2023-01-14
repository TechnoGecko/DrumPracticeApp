import React, {createContext} from 'react';
import { LightDarkContextType } from '../interfaces';

const themeContext = createContext<LightDarkContextType | {}>({});

export default themeContext;