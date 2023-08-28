import React from 'react';
import { TouchableOpacity } from 'react-native';
import CustomText from './CustomText';

const CustomTouchable = ({ onPress, text, backgroundColor = 'transparent', activeOpacity = 0.7, borderRadius, padding, alignItems, marginVertical, width='70%' }) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    activeOpacity={activeOpacity}
    style={{ backgroundColor, borderRadius, padding, alignItems, marginVertical, width }}
    >
        <CustomText color="white" fontSize={16} fontWeight={'bold'} text={text} width={width} textAlign={'center'}/>
    </TouchableOpacity>
  );
};

export default CustomTouchable;
