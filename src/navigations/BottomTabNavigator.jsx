import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Notifications from "../screens/home/Notifications";
import Profile from "../screens/home/Profile";
import Settings from "../screens/home/Settings";
import SettingsDetail from "../screens/home/SettingsDetail";
import Wallet from "../screens/home/Wallet";
import { ROUTES } from "../constants/routes";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import SettingsNavigator from "./SettingsNavigator";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let Icon;
          if (route.name === ROUTES.HOME_TAB) {
            Icon = Ionicons;
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            Icon = Ionicons;
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === ROUTES.WALLET) {
            Icon = Ionicons;
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            Icon = Ionicons;
            iconName = focused
              ? "notifications-sharp"
              : "notifications-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
      <Tab.Screen name={ROUTES.WALLET} component={Wallet} />
      <Tab.Screen
        name={ROUTES.NOTIFICATIONS}
        component={Notifications}
        options={{ tabBarBadge: 10 }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{ tabBarLabel: "Settings" }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
