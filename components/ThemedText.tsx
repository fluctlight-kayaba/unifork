import { Text as RNText, type TextProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { getFont } from '@/utils/font';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'bold' | 'sub' | 'semiBold' | 'subHeading' | 'heading';
  color?: 'dimmed' | 'link';
};

export function Text({
  style,
  lightColor,
  darkColor,
  type,
  color,
  ...rest
}: ThemedTextProps) {
  styles.useVariants({ type, color });
  return <RNText style={[styles.themedText, style]} {...rest} />;
}

const styles = StyleSheet.create((theme) => ({
  themedText: {
    ...getFont('Poppins'),
    fontSize: 16,
    color: theme.colors.text,
    variants: {
      type: {
        bold: {
          ...getFont('Poppins', 'Bold'),
        },
        semiBold: {
          ...getFont('Poppins', 'SemiBold'),
        },
        sub: {
          ...getFont('Poppins'),
          fontSize: 14,
        },
        subHeading: {
          ...getFont('SpaceMono'),
          fontSize: 20,
        },
        heading: {
          ...getFont('SpaceMono'),
          fontSize: 32,
        },
      },
      color: {
        dimmed: {
          color: theme.colors.gray9,
        },
        link: {
          color: theme.colors.tint,
        },
      },
    },
    compoundVariants: [
      {
        color: 'link',
        styles: {
          color: '#0a7ea4',
          textDecorationLine: 'underline',
        },
      },
    ],
  },
}));
