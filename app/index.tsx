import { type FC } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Text } from '@/components/ThemedText';
import { Button } from '@/components/ThemedButton';

export const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Text color="link">Compound variant, color make Underline</Text>
      <Button title="just a villager" size="small" />
      <Button type="outline" title="outlier" size="small" />
      <Button type="outline" icon="plus" size="small" />
      <Text color="dimmed">(icon button)</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: rt.insets.top,
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.s,
  },
}));
