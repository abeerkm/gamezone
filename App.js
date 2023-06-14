import React, { useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
  'BeVietnamPro-Black': require('./assets/fonts/BeVietnamPro-Black.ttf'),
  'BeVietnamPro-BlackItalic': require('./assets/fonts/BeVietnamPro-BlackItalic.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}