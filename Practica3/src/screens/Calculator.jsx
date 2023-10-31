import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const CALCULATOR_TYPES = {
  SELECT_NUMBER: "SELECT_NUMBER",
  SELECT_OPERATOR: "SELECT_OPERATOR",
  CALCULATE: "CALCULATE",
};

const initialState = {
  displayNumber: 0,
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
      if (state.currentNumber == 0 && action.payload == 0) {
        return {
          ...state,
          displayNumber: 0,
          currentNumber: 0,
        };
      } else if (
        state.currentNumber == 0 &&
        action.payload != 0 &&
        state.operator != "="
      ) {
        return {
          ...state,
          displayNumber: action.payload,
          currentNumber: action.payload,
        };
      } else if (state.operator == "=") {
        return {
          ...state,
          displayNumber: action.payload,
          currentNumber: action.payload,
          operator: "",
          prevNumber: 0,
        };
      } else {
        return {
          ...state,
          displayNumber: state.displayNumber * 10 + action.payload,
          currentNumber: state.currentNumber * 10 + action.payload,
        };
      }
    case CALCULATOR_TYPES.SELECT_OPERATOR:
      if (action.payload === "C") {
        return init(initialState);
      }
      if (action.payload === "DEL") {
        return {
          ...state,
          displayNumber: state.displayNumber.toString().slice(0, -1),
          currentNumber: state.currentNumber.toString().slice(0, -1),
        };
      }
      return {
        ...state,
        operator: action.payload,
        prevNumber: state.currentNumber,
        currentNumber: 0,
        displayNumber: 0,
      };
    case CALCULATOR_TYPES.CALCULATE:
      switch (state.operator) {
        case "+":
          return {
            ...state,
            displayNumber: state.prevNumber + state.currentNumber,
            currentNumber: state.prevNumber + state.currentNumber,
            operator: "=",
          };
        case "-":
          return {
            ...state,
            displayNumber: state.prevNumber - state.currentNumber,
            currentNumber: state.prevNumber - state.currentNumber,
            operator: "=",
          };
        case "x":
          return {
            ...state,
            displayNumber: state.prevNumber * state.currentNumber,
            currentNumber: state.prevNumber * state.currentNumber,
            operator: "=",
          };
        case "/":
          return {
            ...state,
            displayNumber: state.prevNumber / state.currentNumber,
            currentNumber: state.prevNumber / state.currentNumber,
            operator: "=",
          };
        case "%":
          return {
            ...state,
            displayNumber: state.prevNumber * (state.currentNumber / 100),
            currentNumber: state.prevNumber * (state.currentNumber / 100),
            operator: "=",
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
          text={"C"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("C");
          }}
        />
        <Button
          text={"DEL"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("DEL");
          }}
        />
        <Button
          text={"%"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("%");
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
          text={"x"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("x");
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
          text={"-"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("-");
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
          text={"+"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("+");
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
        <Button text={"."} role={"number"} />
        <Button text={"="} role={"operator"} onPress={handleCalculate} />
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#52baff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "#000000",
    fontSize: 50,
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
