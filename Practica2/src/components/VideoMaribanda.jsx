import { Camera, CameraType } from "expo-camera";
import { useState, useRef } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

export default function VideoMaribanda({ setShared, shared }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [permissionAudio, requestPermissionAudio] =
    Camera.useMicrophonePermissions();
  const [permissionResponse, requestPermissionMedia] =
    MediaLibrary.usePermissions();
  const [flash, setFlash] = useState(false);
  const [video, setVideo] = useState(null);
  const [recording, setRecording] = useState(false);
  const reproducir = useRef(null);
  const [status, setStatus] = useState({});
  let camera = useRef();

  //ahora quiero guardar el video en el dispositivo
  const handleSaveVideo = async (video) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(video);
      await MediaLibrary.createAlbumAsync("Expo", asset, false);
    }
  };

  const handleStartRecording = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    setRecording(true);
    let newVideo = await camera.recordAsync(options);
    setVideo(newVideo.uri);
    console.log("handleStartRecording", newVideo);
  };

  const share = (uri) => {
    Sharing.shareAsync(uri);
    setShared([...shared, uri]);
  };

  if (!permission || !permissionAudio || !permissionResponse) {
    // Camera permissions are still loading
    return <View />;
  }

  if (
    !permission.granted ||
    !permissionAudio.granted ||
    !permissionResponse.granted
  ) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission camera" />
        <Button
          onPress={requestPermissionAudio}
          title="grant permission audio"
        />
        <Button
          onPress={requestPermissionMedia}
          title="grant permission file"
        />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const handleStopRecording = async () => {
    setRecording(false);
    const record = await camera.stopRecording();
    console.log(record);
  };

  //Muestrame el video

  // const handleSaveImage = async () => {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //   if (status === 'granted') {
  //     const asset = await MediaLibrary.createAssetAsync(photo);
  //     await MediaLibrary.createAlbumAsync('Expo', asset, false);
  //   }
  // }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash ? "torch" : "off"}
        focusDepth={1}
        ratio="4:3"
        quality={0}
        zoom={0}
        whiteBalance="auto"
        onCameraReady={() => console.log("ready")}
        onMountError={(error) => console.log("error", error)}
        ref={(r) => (camera = r)}
      >
        <View style={styles.buttonContainer}>
          {/* Grabar video  */}
          {!recording ? (
            <TouchableOpacity
              style={styles.button}
              onPress={handleStartRecording}
            >
              <View style={styles.circulo}>
                <Entypo name="controller-record" size={35} color="red" />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={handleStopRecording}
            >
              <View style={styles.circulo}>
                <FontAwesome name="square" size={24} color="red" />
              </View>
            </TouchableOpacity>
          )}

          {/* Flash */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => setFlash(!flash)}
          >
            <View style={styles.circulo}>
              {/* <Entypo name='flashlight' size={24} color='white' /> */}
              <MaterialCommunityIcons
                name="lightning-bolt"
                size={24}
                color={flash ? "yellow" : "white"}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={styles.containerVideo}>
        <Video
          ref={reproducir}
          style={styles.video}
          source={{
            uri: video,
          }}
          useNativeControls
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? reproducir.current.pauseAsync()
                : reproducir.current.playAsync()
            }
          />
          <Button title={"Share"} onPress={() => share(video)} />
          <Button title={"Save"} onPress={() => handleSaveVideo(video)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  circulo: {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: "gray",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
  },
  containerVideo: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
