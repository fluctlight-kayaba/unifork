import { createIconSet } from '@expo/vector-icons';
import { type FC } from 'react';
import { type TextProps, type TextStyle } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import lucideGlyphs from '@/components/lucideGlyphs.json';
import { Sizing } from '@/utils/unistyle/shared';

const LucideIcon = createIconSet(
  lucideGlyphs,
  'ludice',
  require('@/assets/fonts/Lucide.ttf'),
);

export type IconName = keyof typeof lucideGlyphs;
type Props = TextProps & {
  name: IconName;
  size?: keyof Sizing | number;
  color?: TextStyle['color'];
};

export const Icon: FC<Props> = ({ name, color, size = 'm', ...restProps }) => {
  const { theme } = useUnistyles();
  const themedColor = color || theme.colors.text;
  let themedSize = typeof size === 'number' ? size : theme.spacing[size];

  return (
    <LucideIcon
      name={name}
      color={themedColor}
      size={themedSize}
      {...restProps}
    />
  );
};
