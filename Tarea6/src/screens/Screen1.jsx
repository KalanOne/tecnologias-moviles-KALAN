import {Image, StyleSheet, View, Text} from "react-native";

export const Screen1 = () => {
    return (
        <View style={styles.container}>
            <Text>Play and Win!</Text>
            <Text>Game for anyone who likes to try luck at guessing number</Text>
            <Image
                source={{uri: "https://cdn.dribbble.com/userupload/4258118/file/original-6adf0b2f45ce3c05f0cdae2c7b35bc58.jpg?resize=1024x768&vertical=center"}}
                style={{width: '80%', height: 200}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#016f48',
    }
});