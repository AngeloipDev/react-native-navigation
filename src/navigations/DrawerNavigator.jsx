import { createDrawerNavigator } from "@react-navigation/drawer";
import { ROUTES } from "../constants/routes";
import { COLORS } from "../constants/colors";
import Notifications from "../screens/home/Notifications";
import Wallet from "../screens/home/Wallet";
import ButtomTabNavigator from "./BottomTabNavigator";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20
        }
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={ButtomTabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name={"home"} size={20} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name={ROUTES.WALLET_DRAWER}
        component={Wallet}
        options={{
          title: "Wallet",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name={"wallet"} size={20} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
        options={{
          title: "Notifications",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name={"notifications-sharp"} size={20} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
