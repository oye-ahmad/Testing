import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>
        Welcome to Our Counter App
      </Text>

      <Text style={styles.counter}>
        Counter: {count}
      </Text>

      <Button
        title="Increase Counter +"
        onPress={() => setCount(count + 1)}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  counter: {
    fontSize: 20,
    marginBottom: 20,
  },

});