import { useState } from "react";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import { AppRegistry } from "react-native";
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

  return (
    <>
      {screen === 1 ? (
        <Screen1 onWalletClick={handleWalletClick} />
      ) : (
        <Screen2 onBackClick={handleBackClick} />
      )}
      <Toast ref={(ref) => Toast.setRef(React.forwardRef())} />
    </>
  );
}

AppRegistry.registerComponent(appName, () => Main);
