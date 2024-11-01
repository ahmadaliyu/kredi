import Button from "@/components/Button";
import Header from "@/components/Header";
import CustomKeyboard from "@/components/CustomKeyboard";
import { RootStackParamList } from "@/interfaces/types";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "EnterAmount"
>;

export default function EnterAmount() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [amount, setAmount] = useState("");

  // Formats the number as currency
  const formatAmount = (value: string) => {
    if (!value) return "";
    return `₦${parseInt(value).toLocaleString()}`;
  };

  const onContinue = () => {
    navigation.navigate("EnterPin", {
      amount,
    });
  };

  // this function clears the amount that was inputed
  const handleKeyPress = (key: string) => {
    if (key === "Clear") {
      setAmount("");
    } else {
      setAmount((prev) => (prev === "" && key === "0" ? "" : prev + key));
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Send Money" />

      <View style={styles.main}>
        <View style={styles.amountInput}>
          <Text style={styles.label}>Enter Amount</Text>
          <Text style={styles.amountText}>{formatAmount(amount)}</Text>
        </View>
      </View>

      <CustomKeyboard onKeyPress={handleKeyPress} />

      <Button onPress={onContinue} title="Continue" disabled={!amount} />
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
  amountInput: {
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
  },
  amountText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
});
