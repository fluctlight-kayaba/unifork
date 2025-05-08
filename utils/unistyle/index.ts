import '@/assets/style.css';

import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native-unistyles';

import { blueHighlights, grayColors } from './color';
import { ThemeColors } from './shared';
import { radius, spacing } from './size';

export const lightTheme = {
  dark: false,
  colors: {
    ...grayColors,
    ...blueHighlights,
    ...DefaultTheme.colors,
    icon: '#687076',
    tint: '#0a7ea4',
  } satisfies ThemeColors,
  radius,
  spacing,
  fonts: DefaultTheme.fonts,
  gap: (v: number) => v * 8,
};

export const darkTheme = {
  dark: true,
  colors: {
    ...grayColors,
    ...blueHighlights,
    ...DarkTheme.colors,
    background: '#141614',
    text: '#e8f8ec',
    icon: '#9BA1A6',
    tint: '#ffffff',
  } satisfies ThemeColors,
  radius,
  spacing,
  fonts: DarkTheme.fonts,
  gap: (v: number) => v * 8,
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    initialTheme: 'dark',
  },
  breakpoints,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  } as never,
});
