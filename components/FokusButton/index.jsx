import {Pressable, StyleSheet, Text} from "react-native";
import { useState } from "react";

// const botao = [
//   {
//     id: "start",
//     value:"Começar"
//   },
//   {
//     id: "Pausar",
//     value:"Pausar",
//   }
// ];

export const FokusButton = ({onPress, isRunning}) => {

    // const [buttonType, setButtonType] = useState(botao[0])
    return (
        <Pressable style={styles.button}
        // onPress={()=> {buttonType.id === "start" ? setButtonType(botao[1]) :setButtonType(botao[0]) }}
        onPress ={onPress}
        >
            <Text style={styles.buttonText}>
                {/* {buttonType.value} */}
                {isRunning ? "Parar" : "Começar"}
            </Text>
        </Pressable>
        )
}

const styles = StyleSheet.create(
  {

    button: {
      backgroundColor: '#B872FF',
      borderRadius: 32,
      padding: 8,
    },
    buttonText: {
      fontSize: 18,
      color: '#021123',
      textAlign: "center",
      fontWeight: 'bold',
    },
    }
  
);