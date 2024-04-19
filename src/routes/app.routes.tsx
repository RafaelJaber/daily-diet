import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthLoginScreen } from "@/screens/AuthLoginScreen";
import { FeedbackRegistrationScreen } from "@/screens/FeedbackRegistrationScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { NewSnackScreen } from "@/screens/NewSnackScreen";
import { StatisticsScreen } from "@/screens/StatisticsScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="login" component={AuthLoginScreen} />
      <Screen name="home" component={HomeScreen} />
      <Screen name="statistics" component={StatisticsScreen} />
      <Screen name={"new"} component={NewSnackScreen} />
      <Screen name="feedback" component={FeedbackRegistrationScreen} />
    </Navigator>
  );
}
