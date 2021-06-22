import React, { useState} from 'react'
import { StyleSheet, Text, SafeAreaView, TextInput, Button, Image, Text} from 'react-native'

export default function Main() {

const [movieName, setMovieName] = useState("")
const [movie, setMovie] = useState(null)

const handleSearch = () => {
    alert(movieName)
}


 return (
        <SafeAreaView style={styles.main} >
            
            <SafeAreaView style={styles.search}>
                <TextInput value={movieName}
                onChangeText={setMovieName} 
                style={styles.input} />
                <Button  onPress={handleSearch} title="Buscar" style={styles.button} />
            </SafeAreaView>
            {movie && <Image source={require ("../assets/titanic.jpg")} style={styles.image} />}
            {!movie && <Text>Busque una pelicula</Text>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        marginTop: 20,
       
     },
    input: {
width: 200,
borderColor: "blue",
borderRadius: 15,
borderWidth: 2,
marginRight: 5,
marginLeft: 5,
paddingHorizontal: 10
    },
    button: {
        backgroundColor: "red"
    },
    search: {
flexDirection: "row",
justifyContent: "center",
marginBottom: 20

    },
    image: {
        width: 300,
        height: 300,
        resizeMode: "cover"
    }

})
