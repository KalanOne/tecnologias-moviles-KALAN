import { useState } from "react";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import { AppRegistry, Platform } from "react-native";
import { name as appName } from "./app.json";
import Toast from "react-native-toast-message";

AppRegistry.registerComponent(appName, () => App);

export default function Main() {
  const [screen, setScreen] = useState(1);

  const handleWalletClick = () => {
    setScreen(2);
  };

  const handleBackClick = () => {
    setScreen(1);
  };

  console.log(Platform);

  const CustomScreen = Platform.select({
    web: Screen1,
    default: Screen2,
  });

  // return (
  //   <>
  //     {Platform.OS === "web" ? (
  //       <Screen1 onWalletClick={handleWalletClick} />
  //     ) : (
  //       <Screen2 onBackClick={handleBackClick} />
  //     )}
  //     <Toast ref={(ref) => Toast.setRef(React.forwardRef())} />
  //   </>
  // );

  return (
    <>
      <CustomScreen onWalletClick={handleWalletClick} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}

AppRegistry.registerComponent(appName, () => Main);
