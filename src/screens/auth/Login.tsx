import Button from "@/components/Button";
import CustomInput from "@/components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import KrediLogo from "@/images/svgs/kredi-svglogo.svg";
import { useDispatch } from "react-redux";
import { login } from "@/store/reducers/userSlice";

export default function Login() {
  const dispatch = useDispatch();

  //useful to disable button when there is no input
  const [inputValues, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // function to login the user
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        // to test dummy loading
        setIsLoading(false);
        dispatch(login("success"));
      }, 1000);
    } catch (error: any) {}
  };
  const theme = useTheme();
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.secondary }}
    >
      <View style={styles.svgCon}>
        <KrediLogo />
      </View>
      <View style={styles.con}>
        <Text style={styles.welcomeText}>Welcome back!👏</Text>

        <CustomInput
          outerContainerStyle={styles.inputCon}
          placeholder="Email address"
          value={inputValues.email}
          onChange={(text) => {
            setInputValue({
              ...inputValues,
              email: text,
            });
          }}
        />
        <CustomInput
          outerContainerStyle={{ ...styles.inputCon }}
          password
          placeholder="Password"
          value={inputValues.password}
          onChange={(text) => {
            setInputValue({
              ...inputValues,
              password: text,
            });
          }}
        />
        <TouchableOpacity>
          <Text style={styles.fpwd}>Forgot Password</Text>
        </TouchableOpacity>
        <Button
          onPress={() => handleLogin()}
          disabled={!inputValues.email || !inputValues.password || isLoading}
          title="Login"
          processingColor={theme.colors.secondary}
          processing={isLoading}
        />
      </View>
      <Text style={styles.txt}>
        Dont't have an account ? <Text style={styles.txt2}>Register</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    padding: 24,
  },
  iconCon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: 17,
  },
  txt: {
    textAlign: "center",
    color: "#4F4F4F",
  },
  txt2: {
    color: "#F15C44",
    fontFamily: "interMedium",
  },
  text2: {
    lineHeight: 24,
    marginTop: 8,
  },
  con: { flex: 1 },
  welcomeText: {
    fontFamily: "interBold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },
  inputCon: {
    marginBottom: 8,
  },
  svgCon: {
    marginVertical: 36,
    alignSelf: "center",
  },
  fpwd: {
    color: "#F15C44",
    textAlign: "right",
    marginBottom: 16,
  },
});
