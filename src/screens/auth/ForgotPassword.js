import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const ForgotPassword = () => {
  const {
    params: { userId, name }
  } = useRoute();
  return (
    <View style={styles.container}>
      <Text>
        ID: {userId} - name: {name}
      </Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
