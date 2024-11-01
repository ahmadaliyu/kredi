import Button from "@/components/Button";
import CustomKeyboard from "@/components/CustomKeyboard";
import Header from "@/components/Header";
import { RootStackParamList } from "@/interfaces/types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "EnterPin"
>;

type RouteProps = RouteProp<RootStackParamList, "EnterPin">;

export default function EnterPin() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [pin, setPin] = useState<string>("");

  const route = useRoute<RouteProps>();

  // Handles key press for the PIN input
  const handleKeyPress = (key: string) => {
    if (key === "Clear") {
      setPin("");
    } else if (pin.length < 4) {
      setPin((prev) => prev + key);
    }
  };

  const onConfirm = () => {
    // Assuming the pin is correct
    navigation.replace("SuccessScreen", {
      amount: route?.params?.amount,
    });
  };

  const renderPinBoxes = () => {
    return Array.from({ length: 4 }).map((_, index) => (
      <View key={index} style={styles.pinBox}>
        <Text style={styles.pinText}>{pin[index] ? "•" : ""}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Header title="Confirm Transaction" />

      <View style={styles.main}>
        <View style={styles.pinInput}>
          <Text style={styles.label}>
            To confirm your transfer of{" "}
            <Text style={styles.amt}>₦${route?.params?.amount}</Text> to
            <Text style={styles.amt}>
              Olalekan Daramola (GTbank - 8078268937)
            </Text>
            . please enter your 4-digit PIN.
          </Text>
          <View style={styles.pinBoxes}>{renderPinBoxes()}</View>
        </View>
      </View>

      <CustomKeyboard onKeyPress={handleKeyPress} />

      <Button
        onPress={onConfirm}
        title="Confirm Transaction"
        disabled={pin.length !== 4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  main: { flex: 1, justifyContent: "center" },
  pinInput: {
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
    fontFamily: "interRegular",
  },
  pinBoxes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  pinBox: {
    width: 49,
    height: 49,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    backgroundColor: "#F4F4F4",
  },
  pinText: {
    fontSize: 24,
    fontFamily: "interBold",
    color: "#121212",
  },
  amt: { fontFamily: "interMedium" },
});
