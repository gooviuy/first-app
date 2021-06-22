import React from 'react'
import { StyleSheet, Text, SafeAreaView, TextInput, Button} from 'react-native'

export default function Main() {
    return (
        <SafeAreaView style={styles.main} >
            <Text style= {styles.text}>Main</Text>
            <SafeAreaView style={styles.search}>
                <TextInput style={styles.input} />
                <Button title="Buscar" style={styles.button} />
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "blue",
        fontSize: 20
    },
    input: {
width: 200,
backgroundColor: "white"
    },
    button: {

    },
    search: {
flexDirection: "row"
    }

})
