import AppIcons from "@/images/icons/icons";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Delete from "@/images/svgs/delete.svg";

type CustomKeyboardProps = {
  onKeyPress: (key: string) => void;
};

export default function CustomKeyboard({ onKeyPress }: CustomKeyboardProps) {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <View style={styles.container}>
      <View style={styles.keyboard}>
        {keys.map((key) => (
          <TouchableOpacity
            key={key}
            style={styles.key}
            onPress={() => onKeyPress(key)}
          >
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.key} onPress={() => onKeyPress(".")}>
          <Text style={styles.keyText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.key} onPress={() => onKeyPress("0")}>
          <Text style={styles.keyText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.key}
          onPress={() => onKeyPress("Clear")}
        >
          <Delete />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    marginVertical: 16,
  },
  key: {
    width: "33%",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  keyText: {
    fontSize: 19,
    fontFamily: "interBold",
  },
  clearKeyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f44336",
  },
});
