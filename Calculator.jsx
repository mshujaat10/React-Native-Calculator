import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

const Calculator = () => {
    const [ans, setAns] = useState("");
    const [val, setVal] = useState("");

    const handleButtonPress = (text) => {
        setVal(val + text);
    };

    const clearInput = () => {
        setVal("");
        setAns("");
    };

    const evaluateExpression = () => {
        setAns(val);
        const Eval = eval(val);
        setVal(Eval.toString());
    };

    return (
        <View style={styles.screenMain}>
            <View style={styles.display}>
                <Text style={styles.preValue}>{ans}</Text>
                <Text style={styles.answer}>{val}</Text>
            </View>
            <View style={styles.keyBoard}>
                <View style={styles.row}>
                    <Button onPress={() => clearInput()} text={"C"} btnColor={styles.btn} btnTxt={styles.btnTxt} />
                    <Button onPress={() => handleButtonPress("%")} text="%" btnColor={styles.btn} btnTxt={styles.btnTxt} />
                    <Button onPress={() => handleButtonPress("+/-")} text="+/-" btnColor={styles.btn} btnTxt={styles.btnTxt} />
                    <Button onPress={() => handleButtonPress("/")} text="÷" btnColor={styles.btn} btnTxt={styles.btnTxt} />
                </View>

                <View style={styles.row}>
                    <Button onPress={() => handleButtonPress("7")} text={"7"} btnColor={styles.btnLight} btnTxt={styles.lightBtnTxt} />
                    <Button onPress={() => handleButtonPress("8")} text="8" btnColor={styles.btnLight} btnTxt={styles.lightBtnTxt} />
                    <Button onPress={() => handleButtonPress("9")} text="9" btnColor={styles.btnLight} btnTxt={styles.lightBtnTxt} />
                    <Button onPress={() => handleButtonPress("*")} text="X" btnColor={styles.btnPrimary} btnTxt={styles.btnTxt} />
                </View>

                <View style={styles.row}>
                    <Button onPress={() => handleButtonPress("4")} text={"4"} btnColor={styles.btnLight} btnTxt={styles.lightBtnTxt} />
                    <Button onPress={() => handleButtonPress("5")} text="5" btnColor={styles.btnLight} btnTxt={styles.lightBtnTxt} />
                    <Button onPress={() => handleButtonPress("6")} text="6" btnColor={styles.btnLight} btnTxt={styles.lightBtnTxt} />
                    <Button onPress={() => handleButtonPress("-")} text="-" btnColor={styles.btnPrimary} btnTxt={styles.btnTxt} />
                </View>

                <View style={styles.row}>
                    <Button onPress={() => handleButtonPress("1")} text={"1"} btnColor={styles.btnLight} btnTxt={styles.lightBtnTxt} />
                    <Button onPress={() => handleButtonPress("2")} text="2" btnColor={styles.btnLight} btnTxt={styles.lightBtnTxt} />
                    <Button onPress={() => handleButtonPress("3")} text="3" btnColor={styles.btnLight} btnTxt={styles.lightBtnTxt} />
                    <Button onPress={() => handleButtonPress("+")} text="+" btnColor={styles.btnPrimary} btnTxt={styles.btnTxt} />
                </View>

                <View style={styles.row}>
                    <Button onPress={() => handleButtonPress("0")} text={"0"} btnColor={styles.btnLight} btnTxt={styles.lightBtnTxt} />
                    <Button onPress={() => handleButtonPress(".")} text="." btnColor={styles.btnLight} btnTxt={styles.lightBtnTxt} />
                    <Button onPress={() => setVal(val.slice(0, -1))} text="⌫" btnColor={styles.btnLight} btnTxt={styles.lightBtnTxt} />
                    <Button onPress={() => evaluateExpression()} text="=" btnColor={styles.btnPrimary} btnTxt={styles.btnTxt} />
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    display: {
        height: "40%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingHorizontal: 20
    },
    screenMain: {
        width: "100%"
    },
    preValue: {
        fontSize: 35,
        marginEnd: 5
    },
    answer: {
        fontSize: 65
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    keyBoard: {
        width: "100%",
        height: "60%",
        justifyContent: "space-evenly"
    },
    btn: {
        backgroundColor: "#666666",
        paddingVertical: 15,
        borderRadius: 20,
        width: 68,
    },
    btnPrimary: {
        backgroundColor: "#5b5bff",
        paddingVertical: 15,
        borderRadius: 20,
        width: 68,
    },
    btnLight: {
        backgroundColor: "white",
        paddingVertical: 15,
        borderRadius: 20,
        width: 68,
    },
    btnTxt: {
        color: "white",
        fontSize: 28,
        textAlign: "center"
    },
    lightBtnTxt: {
        fontSize: 28,
        textAlign: "center"
    }
});

export default Calculator;
