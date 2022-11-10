import { createDrawerNavigator } from "@react-navigation/drawer";
import { ROUTES } from "../constants/routes";
import { COLORS } from "../constants/colors";
import Home from "../screens/home/Home";
import Notifications from "../screens/home/Notifications";
import Wallet from "../screens/home/Wallet";
import ButtomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white
      }}
    >
      <Drawer.Screen name={ROUTES.HOME_DRAWER} component={ButtomTabNavigator} />
      <Drawer.Screen name={ROUTES.WALLET_DRAWER} component={Wallet} />
      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
