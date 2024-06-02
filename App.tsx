import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Splash from './src/screens/Splash';
import Navigator from './src/navigator/Navigator'
import Intro from './src/screens/Intro';
import Signin from './src/screens/Signin';

export default function App() {
  const [appInitialized, setAppInitialized] = React.useState(false);

  React.useEffect(() => {
    // Perform any app initialization logic here
    // For example, you can fetch data, check authentication, etc.
    //
    // Simulate an asynchronous initialization process
    setTimeout(() => {
      setAppInitialized(true);
    }, 3000); // 3 seconds delay
  }, []);

  if (!appInitialized) {
    // Show the splash screen until the app is initialized
    // return <Splash/>;

    return <Splash/>
  }

  return (
    <View style={{flex:1,justifyContent:'center'}}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Intro/>
    </View>
  );
}

