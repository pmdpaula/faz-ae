import { useState, useEffect, useCallback } from "react";

import { StatusBar } from "expo-status-bar";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import * as Font from "expo-font";

import * as SplashScreen from "expo-splash-screen";

import { Home } from "./src/screens/Home";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // const [fontsLoaded] = useFonts({
  //   Inter_400Regular,
  //   Inter_700Bold,
  // });

  // if (!fontsLoaded) {

  // }

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({ Inter_400Regular, Inter_700Bold });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#0D0D0D" />
      <Home />
    </>
  );
}
