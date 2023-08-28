import React from 'react'
import { Text } from 'react-native'

const CustomText = ({ text, fontSize, fontWeight, color, marginBottom, textAlign='left', width='70%' }) => {

    return (
        <Text style={{ fontSize, fontWeight, color, marginBottom, textAlign, width }} > {text} </Text>
    )
}

export default CustomText