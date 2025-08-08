import { Text, Image, SafeAreaView, StyleSheet } from "react-native";
import { Button } from "../components/button";
import {router} from "expo-router";

export default function Screen() {

    const handleStart = () => {
        router.replace('/home');
    }
    return(
        <SafeAreaView style={styles.container}>
            <Image 
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="cover" 
            />
            <Text style={styles.h1}>Loja de Eletrônicos</Text>
            <Text style={styles.h2}>Aqui você encontra a marca que quiser.</Text>
            <Button 
                title="Começar as compras"
                onPress={handleStart}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //pega todo o espaçamento
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    h2: {
        fontSize: 16,
        marginBottom: 10
    }
});