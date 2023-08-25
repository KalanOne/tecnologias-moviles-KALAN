import React from 'react'
import { Text } from 'react-native'

const StyleText = ({ text, fontSize, fontWeight }) => {

    return (
        <Text style={{ fontSize, fontWeight }} > {text} </Text>
    )
}

export default StyleText
