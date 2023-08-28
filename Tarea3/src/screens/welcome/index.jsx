import React, { useState } from 'react';
import { View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import TextInputCustom from '../../components/Custom/CustomInput';
import CustomTouchable from '../../components/Custom/CustomTouchable';
import CustomText from '../../components/Custom/CustomText';

const Welcome = () => {

    const [nombre, setNombre] = useState('');

    const handleNombreChange = (text) => {
        setNombre(text);
    };

    const handlePress = () => {
        // Mostrar el alert nativo al presionar el botón
        Alert.alert(
            'Saludo',
            `Hola, ${nombre}!`,
            [
                { text: 'Cerrar', style: 'cancel' },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#E6E6FA", width: '100%' }}>
            <CustomText
                text="Welcome"
                fontSize={24}
                fontWeight="bold"
                color="#333"
                marginBottom={20}
                textAlign={'center'}
            />
            <TextInputCustom text="Nombre"
                borderWidth={1}
                borderColor={'gray'}
                borderRadius={5}
                paddingVertical={10}
                paddingHorizontal={15}
                fontSize={16}
                onChangeText={handleNombreChange}
                value={nombre}
            />
            <CustomTouchable
                text="Enviar"
                backgroundColor={'#9b59b6'}
                borderRadius={10}
                padding={15}
                alignItems={'center'}
                marginVertical={20}
                onPress={handlePress}
            />
        </View>
    );
};

export default Welcome;
