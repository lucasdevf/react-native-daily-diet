
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts
} from '@expo-google-fonts/nunito-sans';
import { StatusBar, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home';
import { theme } from './src/styles/theme';

export default function App() { 
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>

      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <Home /> : <Text>Carregando...</Text>}
    </ThemeProvider>
  )
}