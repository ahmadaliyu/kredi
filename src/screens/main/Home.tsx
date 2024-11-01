import React, { useRef, useState, useCallback } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/reducers/userSlice";
import AppIcons from "@/images/icons/icons";
import BottomSheet from "@/components/RBSheet";
import Button from "@/components/Button";
import ScrollContainer from "@/components/ScrollContainer";
import Credit from "@/images/svgs/credit.svg";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "@/interfaces/types";

const dummyTransactions = [
  {
    id: 1,
    name: "Olalekan Daramola",
    amount: "-₦20,000",
    status: "success",
    type: "sent",
  },
  {
    id: 2,
    name: "Olalekan Daramola",
    amount: "-₦20,000",
    status: "success",
    type: "sent",
  },
  {
    id: 3,
    name: "Olalekan Daramola",
    amount: "+₦20,000",
    status: "success",
    type: "recieve",
  },
  {
    id: 4,
    name: "Olalekan Daramola",
    amount: "-₦20,000",
    status: "success",
    type: "sent",
  },
  {
    id: 5,
    name: "Olalekan Daramola",
    amount: "-₦20,000",
    status: "success",
    type: "sent",
  },
  {
    id: 6,
    name: "Olalekan Daramola",
    amount: "-₦20,000",
    status: "success",
    type: "sent",
  },
];

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function HomeScreen() {
  const refRBSheet = useRef<any>([]);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [showAmount, setShowAmount] = useState(false);

  // opens the sheet to logout
  const openLogoutSheet = useCallback(() => {
    refRBSheet?.current[1]?.open();
  }, []);

  const cancelLogout = useCallback(() => {
    refRBSheet?.current[1]?.close();
  }, []);

  // logs the user out
  const handleLogout = useCallback(() => {
    dispatch(logout());
    refRBSheet?.current[1]?.close();
  }, [dispatch]);

  const onSend = () => {
    navigation.navigate("SelectBank");
  };

  return (
    <ScrollContainer disableScroll>
      <Text style={styles.welcome}>Welcome back</Text>
      <View style={styles.row}>
        <Text style={styles.nameText}>Merilek Ventures 👋</Text>
        <TouchableOpacity onPress={openLogoutSheet}>
          <AppIcons name="bell" size={40} />
        </TouchableOpacity>
      </View>

      <ImageBackground
        source={require("@/images/card-bg.png")}
        style={styles.img}
      >
        <Text style={styles.txt}>Account Balance</Text>
        <View style={styles.amtCon}>
          <Text style={styles.amt}>
            {showAmount ? "₦120,000.00" : "********"}
          </Text>
          <TouchableOpacity onPress={() => setShowAmount((prev) => !prev)}>
            <AppIcons name="eye-white" />
          </TouchableOpacity>
        </View>
        <Button onPress={onSend} style={styles.bt} title="Send Money" />
      </ImageBackground>

      <View style={styles.accountInfo}>
        <Credit />
        <View>
          <Text style={styles.accNumText}>0023456789</Text>
          <Text style={styles.bnkText}>Kredi Money Microfinance Bank LTD</Text>
        </View>
      </View>

      <Text style={styles.trxText}>Recent Transactions</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dummyTransactions}
        renderItem={({ item }) => (
          <View style={styles.itemCon}>
            <View style={styles.arrowText}>
              <Image
                style={styles.arrow}
                source={
                  item.type === "sent"
                    ? require("@/images/arrow-up.png")
                    : require("@/images/arrow-down.png")
                }
              />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.time}>{item.status}</Text>
              </View>
            </View>
            <View>
              <Text
                style={[
                  styles.name,
                  { color: item.type === "sent" ? "#EB5757" : "#219653" },
                ]}
              >
                {item.amount}
              </Text>
              <Text style={styles.time}>12:30pm</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <BottomSheet
        otherStyles={styles.otherStyles}
        height={202}
        refRBSheet={(ref: any) => (refRBSheet.current[1] = ref)}
        closeOnPressMask={false}
      >
        <View style={styles.sheetCon}>
          <Text style={styles.warnText}>Are you sure you want to Logout</Text>
          <View style={styles.btns}>
            <Button
              onPress={cancelLogout}
              variant="outline"
              style={styles.btn}
              title="Cancel"
            />
            <Button
              onPress={handleLogout}
              type="danger"
              style={styles.btn}
              title="Logout"
            />
          </View>
        </View>
      </BottomSheet>
    </ScrollContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameText: {
    fontFamily: "interMedium",
    fontSize: 20,
  },
  welcome: {
    marginTop: 32,
    fontFamily: "interRegular",
    color: "#828282",
  },
  input: {
    marginVertical: 8,
  },
  cancel: {
    fontSize: 16,
    fontFamily: "interMedium",
  },
  sheetCon: {
    marginTop: 10,
  },
  text: {
    fontSize: 16,
  },
  warnText: {
    fontFamily: "interMedium",
    textAlign: "center",
    fontSize: 16,
  },
  btns: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    alignSelf: "center",
    marginTop: 24,
  },
  btn: { width: "40%" },
  bt: { top: 24 },
  title: {
    fontSize: 22,
    fontFamily: "interBold",
  },
  markText: {
    fontSize: 18,
    fontFamily: "interMedium",
  },
  img: {
    width: 335,
    height: 168,
    alignSelf: "center",
    marginTop: 24,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  txt: { color: "#F0F0F0", fontFamily: "interRegular" },
  amt: { color: "#F0F0F0", fontFamily: "interBold", fontSize: 28 },
  amtCon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  accountInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
    borderColor: "#E8E8E8",
    borderWidth: 0.8,
    borderRadius: 4,
    marginTop: 16,
    width: 335,
    alignSelf: "center",
  },
  accNumText: {
    fontFamily: "interBold",
    fontSize: 16,
  },
  bnkText: {
    fontFamily: "interRegular",
    marginTop: 4,
  },
  trxText: {
    fontFamily: "interBold",
    fontSize: 16,
    color: "#161616",
    marginTop: 16,
    marginBottom: 16,
  },
  arrow: {
    width: 48,
    height: 48,
  },
  itemCon: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrowText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  name: {
    fontFamily: "interMedium",
  },
  time: { fontFamily: "interRegular", color: "#828282" },
});
