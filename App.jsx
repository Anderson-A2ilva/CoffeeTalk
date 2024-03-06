import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from './src/screen/home/index'
import Navigation from "./src/components/navigation/navigation";

function App(){
    return(
        <SafeAreaView style={estilo.body}>
            <Navigation />
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
    body: {
        flex: 1,
    },
})

export default App;