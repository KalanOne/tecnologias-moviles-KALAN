import React from 'react'
import { View, Text, Dimensions, TextInput } from 'react-native'

const CustomPerson = ({ name, lastName, index }) => {
    return (
        <View
            style={{
                backgroundColor: index % 2 === 0 ? 'purple' : '#fff',
                width: Dimensions.get('screen').width,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text
            style={{
                color: index % 2 === 0 ? '#fff' : 'purple',
                fontSize: 20,
                fontWeight: 'bold'
            }}>{name}</Text>
            <Text
            style={{
                color: index % 2 === 0 ? '#fff' : 'purple',
                fontSize: 20,
                fontWeight: 'bold'
            }}>{lastName}</Text>
        </View>
    )
}

export default CustomPerson
