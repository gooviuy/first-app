import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text} >Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "blue",
        height:100,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 20
    }
})
