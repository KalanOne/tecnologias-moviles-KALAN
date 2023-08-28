import React from 'react'
import { TextInput } from 'react-native'
import CustomText from './CustomText'

const CustomInput = ({ text, onChangeText, value, borderWidth, borderColor, borderRadius, paddingVertical, paddingHorizontal, fontSize, width='70%' }) => {
  return (
    <>
      <CustomText text={text} fontSize={20} fontWeight={100} color={"#000"} marginBottom={5} width={width} />
      <TextInput
        style={{ borderWidth, borderColor, borderRadius, paddingVertical, paddingHorizontal, fontSize, width }}
        keyboardType="default"
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

export default CustomInput;