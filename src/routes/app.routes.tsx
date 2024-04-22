import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthLoginScreen } from "@/screens/AuthLoginScreen";
import { EditSnackScreen } from "@/screens/EditSnackScreen";
import { FeedbackRegistrationScreen } from "@/screens/FeedbackRegistrationScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { NewSnackScreen } from "@/screens/NewSnackScreen";
import { SnakeDetailsScreen } from "@/screens/SnakeDetailsScreen";
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
      <Screen name={"edit"} component={EditSnackScreen} />
      <Screen name="feedback" component={FeedbackRegistrationScreen} />
      <Screen name="snackDetails" component={SnakeDetailsScreen} />
    </Navigator>
  );
}
