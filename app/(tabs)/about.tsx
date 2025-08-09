import { Text, View, StyleSheet } from "react-native";


export default function Screen() {

   
    return(
        <View style={styles.container}>
            <Text> Fui eu quem fez!!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //pega todo o espaçamento
        justifyContent: 'center',
        alignItems: 'center'
    }
   
});