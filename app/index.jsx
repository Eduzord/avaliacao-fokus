import { Image, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { FokusButton } from "../components/FokusButton"
import { ActionButton } from "../components/ActionButton"
import { Timer } from "../components/Timer"


const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require('./foco.png'),
    display: "Foco",

  },
  {
    id: "short",
    initialValue: 5,
    image: require('./short.png'),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15,
    image: require('./long.png'),
    display: "Pausa longa",
  },

];

export default function Index() {

  const [timeType, setTimeType] = useState(pomodoro[0]);
  const [remainingTime, setRemainingTime] = useState(pomodoro[0].initialValue * 60);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    if (isRunning && remainingTime > 0){
      const timerId = setInterval(() => {setRemainingTime(prevTime => prevTime -1);}, 1000);
      return () => clearInterval(timerId); // Função de limpeza
    } else if (remainingTime == 0){
      setIsRunning(false); //Pausa o timer quando chegar a zero.
    }
  },[isRunning, remainingTime]);

  const handleStartStop = () => {
    setIsRunning(prev => !prev);
  }

  const handleTimeTypeChange = (p) => {
    setTimeType(p);
    setRemainingTime(p.initialValue * 60);
    setIsRunning(false); //Reseta o timer ao mudar o tipo
  }
  return (
    <View style={styles.container}>
      <Image source={timeType.image} />


      <View style={styles.actions}>

        <View style={styles.context}>

          {pomodoro.map(p =>
            <ActionButton
              key={p.id}
              active={timeType.id === p.id}
              // onPress={() => setTimeType(p)}
              onPress={() => handleTimeTypeChange(p)}
              display={p.display}
            />
          )}
        </View>
        <Timer
          // totalSeconds={timeType.initialValue}
          time={remainingTime} />

        <FokusButton 
        onPress={handleStartStop}
        isRunning = {isRunning}/>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Aluno.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#021123',
      gap: 40,
    },
    actions: {
      padding: 24,
      backgroundColor: '#14448080',
      width: '80%',
      borderRadius: 32,
      borderWidth: 2,
      borderColor: '#144480',
      gap: 32,

    },
    context: {
      flexDirection: "row",
      justifyContent: 'space-around',
      alignItems: "center",

    },
    contextButtonActive: {
      backgroundColor: '#144480',
      borderRadius: 8,
    },
    contextButtonText: {
      fontSize: 12.5,
      color: '#FFF',
      padding: 8,
    },
    timer: {
      fontSize: 54,
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: "center",
    },
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
    footer: {
      width: '80%',
    },
    footerText: {
      color: '#98A0A8',
      fontSize: 12.5,
      textAlign: "center",

    }
  }
);
