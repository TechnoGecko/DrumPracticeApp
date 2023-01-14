import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import theme from './config/theme';

interface UITheme {
    theme: string,
    color: string,
    background: string,
}

type LightDarkContextType = {
    light: UITheme,
    dark: UITheme
}

type CustomUserThemes = Array<UITheme>;


export const MyDarkNavTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: theme.dark.background,
        card: theme.dark.background,
        border: '#181818',
    }
}

export default UITheme;
export {LightDarkContextType, CustomUserThemes};