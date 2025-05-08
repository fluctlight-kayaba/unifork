import { type FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { Icon, type IconName } from '@/components/ThemedIcon';
import { Text } from '@/components/ThemedText';

type Props = TouchableOpacityProps & {
  type?: 'outline';
  size?: 'small';
  color?: string;
  icon?: IconName;
  title?: string;
};

export const Button: FC<Props> = ({
  type,
  size,
  color,
  icon,
  children,
  title,
  activeOpacity = 0.72,
  ...restProps
}) => {
  styles.useVariants({ type, size });
  const { theme } = useUnistyles();
  const iconColor = color || theme.colors.text;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={activeOpacity}
      {...restProps}
    >
      {icon && <Icon name={icon} color={iconColor} />}
      {children || (title && <Text style={styles.title(color)}>{title}</Text>)}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: theme.spacing.s,
    borderRadius: theme.radius.s,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: theme.colors.primary,
    _web: {
      _classNames: 'themed-button',
      _hover: {
        backgroundColor: '#359aff',
      },
    },
    variants: {
      type: {
        outline: {
          borderColor: theme.colors.gray5,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          _web: {
            _hover: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      },
      size: {
        small: {
          padding: theme.spacing.xs,
        },
      },
    },
  },
  title: (color?: string) => ({
    color: color || theme.colors.text,
  }),
}));
