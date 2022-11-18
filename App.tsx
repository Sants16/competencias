import { StatusBar } from 'react-native';
import { Inicial } from './src/telas/Inicial';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="default" />
      <Inicial/>
    </NativeBaseProvider>
  );
}