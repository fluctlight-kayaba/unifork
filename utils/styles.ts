import { StyleSheet } from 'react-native-unistyles';

export const iStyles = StyleSheet.create(() => ({
  contentContainer: (limit = 1280) => ({
    paddingHorizontal: 18,
    marginHorizontal: 'auto',
    maxWidth: limit,
    width: '100%',
  }),
}));
