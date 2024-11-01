import Button from "@/components/Button";
import CustomInput from "@/components/CustomInput";
import Header from "@/components/Header";
import AppIcons from "@/images/icons/icons";
import { RootStackParamList } from "@/interfaces/types";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "SelectBank"
>;

export default function SelectBank() {
  const navigation = useNavigation<ScreenNavigationProp>();

  const onContinue = () => {
    navigation.navigate("EnterAmount");
  };
  return (
    <View style={styles.container}>
      <Header title="Send Money" />
      <View style={styles.main}>
        <Pressable style={styles.inputContainer}>
          <View style={styles.gtCon}>
            <AppIcons name="gt" size={24} />
            <Text style={styles.gtText}>Guaranty Trust Bank</Text>
          </View>
          <AppIcons name="chevron-down" />
        </Pressable>
        <CustomInput
          outerContainerStyle={styles.inputCon}
          placeholder="Account number"
          keyboardType="number-pad"
        />
        <CustomInput
          outerContainerStyle={styles.inputCon}
          placeholder="Narration"
        />
      </View>
      <Button onPress={onContinue} title="Continue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    padding: 24,
    backgroundColor: "#fff",
  },
  main: { flex: 1 },
  inputCon: {
    marginVertical: 8,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    borderWidth: 0,
    marginBottom: 5,
    paddingVertical: 2,
    alignItems: "center",
    height: 54,
  },
  gtCon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  gtText: {
    fontFamily: "interRegular",
  },
});
