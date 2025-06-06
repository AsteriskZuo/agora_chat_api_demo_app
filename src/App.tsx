import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// import { multiply } from 'react-native-agora-chat';

export default function App() {
  const [result] = React.useState<number | undefined>();

  React.useEffect(() => {
    // multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Pressable
        style={{ height: 100, width: 100, backgroundColor: 'red' }}
        onPress={() => {
          console.log('test:onclicked');
        }}
      >
        <Text>{'test'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
