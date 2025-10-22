import { Text, StyleSheet } from 'react-native';

export function Timer({time}) {

    // const date = new Date(totalSeconds * 1000 * 60)

    // const options = { minute: "2-digit", second: "2-digit" }
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    const formatTime = (value) => String(value).padStart(2,'0');
    return (
        
        <Text style={styles.timer}>
            {/* {date.toLocaleTimeString("pt-br", options )} */}
            {`${formatTime(minutes)}:${formatTime(seconds)}`}
        </Text>
    );
}

const styles = StyleSheet.create(
    {
        timer: {
            fontSize: 54,
            color: '#FFF',
            fontWeight: 'bold',
            textAlign: "center",
        },
    }
);