import {MD3LightTheme as PaperLightTheme} from 'react-native-paper';
import {MD3DarkTheme as PaperDarkTheme} from 'react-native-paper';
import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import darkColors from './dark.json'

export const CustomDarkTheme = {
  ...PaperLightTheme,
  ...PaperDarkTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperLightTheme.colors,
    ...PaperDarkTheme.colors,
    ...NavigationDefaultTheme.colors,
    ...darkColors.colors,
  },
};
