import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

function sleep(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

function App() {
  const [initialRouteName, setInitialRouteName] = useState(null);

  const checkIsLoggedIn = async () => {
    await sleep(5);

    if (keys.includes(value)) {
      setIsLoggedIn(true)
    }  else {
      setIsLoggedIn(false)
    }
    // local storage a bak
    // email kayitli mi diye
    // kontrol et
    // eger kayitli email varsa,
    // setIsLoggedIn(true)
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  if (initialRouteName === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center",  }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName}>
        <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

//this.props.navigation.navigate("Root", {screen: "Profile" }})
export default App;

// () => {
//   return (
//     <App
//       ref={(navigator) => { // @??
//       setNavigator(navigator);}}
//     />
//   );
// }
