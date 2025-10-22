import { Pressable, StyleSheet, Text } from "react-native";

export function ActionButton( {active,onPress,display }) {
    return (
        <Pressable
            style={active ? styles.contextButtonActive : null}
            onPress={onPress}>
            <Text style={styles.contextButtonText}>
                {display}
            </Text>
        </Pressable>
    );
}

// key={p.id} -> Retirado pois o componente ActionButton não tem map()
// timeType.id === p.id -> Retirado pois quem precisa enviar essa condição lógica é o pai(app/index.jsx)
// () => setTimeType(p) -> Essa função também deve ser enviado pelo pai.
// p.display -> Esse dado também é enviada pelo pai.

const styles = StyleSheet.create(
    {
    contextButtonActive:{
      backgroundColor: '#144480',
      borderRadius: 8,
    },
    contextButtonText:{
      fontSize: 12.5,
      color: '#FFF',
      padding: 8,
    },

    }
);

