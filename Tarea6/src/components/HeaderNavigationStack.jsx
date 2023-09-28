import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

export const HeaderNavigationStack = ({title}) => {
    const {canGoBack, goBack} = useNavigation();
    return (
        <View style={styles.container}>
            {canGoBack() ? (
                    <TouchableOpacity onPress={() => goBack()}>
                        <MaterialIcons name="arrow-back-ios" size={15} color="transparent"/>
                    </TouchableOpacity>
                ) :
                <Text></Text>}
            <Text style={styles.title}>{title}</Text>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#b052ff',
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    }
});