import React from 'react'
import { StyleSheet, Text, SafeAreaView} from 'react-native'

const Header = () => {
    return (
        <SafeAreaView style={styles.header} >
            <Text style= {styles.text}>Header</Text>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: "gray",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 20
    }
})
