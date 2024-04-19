import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@/screens/HomeScreen";
import { NewSnackScreen } from "@/screens/NewSnackScreen";
import { StatisticsScreen } from "@/screens/StatisticsScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={HomeScreen} />
      <Screen name="statistics" component={StatisticsScreen} />
      <Screen name={"new"} component={NewSnackScreen} />
    </Navigator>
  );
}
