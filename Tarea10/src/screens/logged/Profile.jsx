import React, { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { UseAuth } from "../../hooks/UseAuth";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const {
    user,
    handleLogin,
    handleRegister,
    handleLogout,
    isLogged,
    handleUpdate,
  } = UseAuth();
  const navigation = useNavigation();
  useEffect(() => {
    if (!isLogged()) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Welcome" }],
      });
    }
  }, []);
  const [name, setName] = useState(user?.name);
  const [username, setUsername] = useState(user?.username);
  const [password, setPassword] = useState("");

  const handleName = (text) => {
    setName(text);
  };
  const handleUsername = (text) => {
    setUsername(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };

  const handleLocalUpdate = () => {
    const updateResponse = handleUpdate(user.id, name, username, password);
    if (updateResponse) {
      Alert.alert("Success", "Updated successfully");
    } else {
      Alert.alert("Error", "Something went wrong");
    }
  };

  const handleLocalLogout = () => {
    handleLogout();
    navigation.reset({
      index: 0,
      routes: [{ name: "Welcome" }],
    });
  };

  if (user === null) {
    return <></>;
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>My Profile</Text>
        <View style={styles.profileContainer}>
          <Text style={styles.profileText}>Name: {user?.name}</Text>
          <Text style={styles.profileText}>Username: {user?.username}</Text>
        </View>
        <View style={styles.changeInfoContainer}>
          <Text style={styles.changeInfoText}>Change Info</Text>
          <CustomInput
            handleChange={handleName}
            label={"Name"}
            secure={false}
            value={name}
          />
          <CustomInput
            handleChange={handleUsername}
            label={"Username"}
            secure={false}
            value={username}
          />
          <CustomInput
            handleChange={handlePassword}
            label={"Password"}
            secure={true}
            value={password}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={handleLocalUpdate}
            style={styles.updateButton}
          >
            <Text style={styles.updateTextButton}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLocalLogout}
            style={styles.logoutButton}
          >
            <Text style={styles.logoutTextButton}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfcfe",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    // color: "#7C7C7C",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
  },
  profileContainer: {
    width: "100%",
    height: 100,
    // backgroundColor: "#F2F2F2",
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#21b2b2",
  },
  profileText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#7C7C7C",
  },
  changeInfoContainer: {
    width: "100%",
    // height: 300,
    paddingVertical: 20,
    // backgroundColor: "#F2F2F2",
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#21b2b2",
  },
  changeInfoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7C7C7C",
    marginBottom: 20,
  },
  buttonsContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "row",
    gap: 20,
  },
  updateButton: {
    backgroundColor: "#21b2b2",
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
  },
  updateTextButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#ff0062",
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
  },
  logoutTextButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
