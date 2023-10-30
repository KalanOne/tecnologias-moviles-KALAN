import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const CALCULATOR_TYPES = {
  SELECT_NUMBER: "SELECT_NUMBER",
  SELECT_OPERATOR: "SELECT_OPERATOR",
  CALCULATE: "CALCULATE",
};

const initialState = {
  displayNumber: 1,
  operator: "",
  prevNumber: 0,
  currentNumber: 0,
};

const init = (initialState) => {
  return initialState;
};

const reducer = (state, action) => {
  switch (action.type) {
    case CALCULATOR_TYPES.SELECT_NUMBER:
      return {
        ...state,
        displayNumber: action.payload,
        currentNumber: action.payload,
      };
    case CALCULATOR_TYPES.SELECT_OPERATOR:
      return {
        ...state,
        operator: action.payload,
        prevNumber: state.currentNumber,
      };
    case CALCULATOR_TYPES.CALCULATE:
      switch (state.operator) {
        case "+":
          return {
            ...state,
            displayNumber: state.prevNumber + state.currentNumber,
            currentNumber: state.prevNumber + state.currentNumber,
          };
        case "-":
          return {
            ...state,
            displayNumber: state.prevNumber - state.currentNumber,
            currentNumber: state.prevNumber - state.currentNumber,
          };
        case "x":
          return {
            ...state,
            displayNumber: state.prevNumber * state.currentNumber,
            currentNumber: state.prevNumber * state.currentNumber,
          };
        case "/":
          return {
            ...state,
            displayNumber: state.prevNumber / state.currentNumber,
            currentNumber: state.prevNumber / state.currentNumber,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const handleSelectNumber = (number) => {
    dispatch({
      type: CALCULATOR_TYPES.SELECT_NUMBER,
      payload: number,
    });
  };

  const handleSelectOperator = (operator) => {
    dispatch({
      type: CALCULATOR_TYPES.SELECT_OPERATOR,
      payload: operator,
    });
  };

  const handleCalculate = () => {
    dispatch({
      type: CALCULATOR_TYPES.CALCULATE,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.displayNumber}</Text>
      <View style={styles.row}>
        <Button
          text={7}
          role={"number"}
          onPress={() => {
            handleSelectNumber(7);
          }}
        />
        <Button
          text={8}
          role={"number"}
          onPress={() => {
            handleSelectNumber(8);
          }}
        />
        <Button
          text={9}
          role={"number"}
          onPress={() => {
            handleSelectNumber(9);
          }}
        />
        <Button
          text={"/"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("/");
          }}
        />
      </View>
      <View style={styles.row}>
        <Button
          text={4}
          role={"number"}
          onPress={() => {
            handleSelectNumber(4);
          }}
        />
        <Button
          text={5}
          role={"number"}
          onPress={() => {
            handleSelectNumber(5);
          }}
        />
        <Button
          text={6}
          role={"number"}
          onPress={() => {
            handleSelectNumber(6);
          }}
        />
        <Button
          text={"x"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("x");
          }}
        />
      </View>
      <View style={styles.row}>
        <Button
          text={1}
          role={"number"}
          onPress={() => {
            handleSelectNumber(1);
          }}
        />
        <Button
          text={2}
          role={"number"}
          onPress={() => {
            handleSelectNumber(2);
          }}
        />
        <Button
          text={3}
          role={"number"}
          onPress={() => {
            handleSelectNumber(3);
          }}
        />
        <Button
          text={"-"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("-");
          }}
        />
      </View>
      <View style={styles.row}>
        <Button
          text={0}
          role={"number"}
          onPress={() => {
            handleSelectNumber(0);
          }}
        />
        <Button
          text={"+"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("+");
          }}
        />
        <Button text={"="} role={"operator"} onPress={handleCalculate} />
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "#000000",
    fontSize: 50,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
