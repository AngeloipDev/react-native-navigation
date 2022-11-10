import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../screens/home/Settings";
import SettingsDetail from "../screens/home/SettingsDetail";
import { ROUTES } from "../constants/routes";

const Stack = createStackNavigator();

function SettingsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
