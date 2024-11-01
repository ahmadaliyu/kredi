import Button from "@/components/Button";
import { RootStackParamList } from "@/interfaces/types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "SuccessScreen"
>;

type RouteProps = RouteProp<RootStackParamList, "SuccessScreen">;

export default function SuccessScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();

  const route = useRoute<RouteProps>();
  const onComplete = () => navigation.replace("Home");
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={require("@/images/success.png")} style={styles.image} />
        <Text style={styles.txnText}>Transaction Completed</Text>
        <Text style={styles.scs}>
          You have successfully processed a transfer of{" "}
          <Text style={styles.amt}>₦${route?.params?.amount}</Text> to{" "}
          <Text style={styles.amt}>
            Olalekan Daramola (GTbank - 8078268937)
          </Text>
          .
        </Text>
      </View>
      <Button onPress={onComplete} title="Complete" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 124,
    height: 124,
    marginVertical: 24,
  },
  txnText: {
    fontFamily: "interBold",
    fontSize: 20,
    marginVertical: 8,
  },
  scs: {
    fontFamily: "interRegular",
    color: "#6B6B6B",
    textAlign: "center",
  },
  amt: {
    fontFamily: "interMedium",
    color: "#1B1B1B",
  },
});
