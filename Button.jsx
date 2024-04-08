import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text, btnColor, btnTxt }) => {
    return (
        <TouchableOpacity style={btnColor} onPress={onPress}>
            <Text style={btnTxt}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;