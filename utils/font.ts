import { loadAsync } from 'expo-font';
import { Platform } from 'react-native';

export type FontFamily = 'Poppins' | 'SpaceMono';
export type FontWeight =
  | 'Thin'
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'SemiBold'
  | 'Bold';
export type FontStyle = 'normal' | 'italic';

const getFontName = (
  family: FontFamily,
  weight: FontWeight = 'Regular',
  style: FontStyle = 'normal',
): string => {
  // if (Platform.OS === 'ios') {
  //   return family;
  // }

  if (style === 'italic') {
    return `${family}-${weight}Italic`;
  }

  return `${family}-${weight}`;
};

export const getFontWeight = (
  weight: FontWeight,
): '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' => {
  const weightMap: Record<
    FontWeight,
    '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  > = {
    Thin: '100',
    Light: '300',
    Regular: '400',
    Medium: '500',
    SemiBold: '600',
    Bold: '700',
  };

  return weightMap[weight];
};

export const getFont = (
  family: FontFamily,
  weight: FontWeight = 'Regular',
  style: FontStyle = 'normal',
): {
  fontFamily: string;
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  fontStyle?: 'normal' | 'italic';
} => {
  const fontFamily = getFontName(family, weight, style);

  if (Platform.OS === 'ios') {
    return {
      fontFamily,
      fontWeight: getFontWeight(weight),
      fontStyle: style,
    };
  }

  return {
    fontFamily,
  };
};

if (Platform.OS === 'web') {
  loadAsync({
    Lucide: require('../assets/fonts/Lucide.ttf'),
    'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Poppins-ThinItalic': require('../assets/fonts/Poppins-ThinItalic.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-LightItalic': require('../assets/fonts/Poppins-LightItalic.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-MediumItalic': require('../assets/fonts/Poppins-MediumItalic.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-SemiBoldItalic': require('../assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-BoldItalic': require('../assets/fonts/Poppins-BoldItalic.ttf'),
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'SpaceMono-Italic': require('../assets/fonts/SpaceMono-Italic.ttf'),
    'SpaceMono-Bold': require('../assets/fonts/SpaceMono-Bold.ttf'),
    'SpaceMono-BoldItalic': require('../assets/fonts/SpaceMono-BoldItalic.ttf'),
  });
}
