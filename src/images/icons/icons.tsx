import { forwardRef } from "react";
import {
  Image,
  StyleProp,
  ImageStyle,
  Pressable,
  GestureResponderEvent,
  View,
} from "react-native";

const icons = {
  eye: require("./eye.png"),
  "eye-white": require("./eye-white.png"),
  "chevron-back": require("./chevron-back.png"),
  "chevron-down": require("./chevron-down.png"),
  bell: require("./bell.png"),
  gt: require("./gt.png"),
  delete: require("./delete.png"),
};

interface TAppIcons {
  name: keyof typeof icons;
  style?: StyleProp<ImageStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  size?: number;
}

const AppIcons = forwardRef<View, TAppIcons>(function (
  { name, style, size = 20, onPress },
  ref
) {
  return (
    (onPress && (
      <Pressable
        onPress={onPress}
        ref={ref}
        style={[{ width: size, height: size }, style]}
      >
        <Image
          style={[{ width: size, height: size }, style]}
          source={icons[name]}
        />
      </Pressable>
    )) || (
      <Image
        style={[{ width: size, height: size }, style]}
        source={icons[name]}
      />
    )
  );
});

export default AppIcons;
