import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import CoffeeShopLogo from '../../assets/img/CoffeeShop.png'

export default function Home( { navigation }){
    return(
        <View style= {estilo.body}>
            <Image style={estilo.imagem} source={CoffeeShopLogo} />
            <TouchableOpacity onPress={() => navigation.navigate('InicialTela')}>
                <Text style={estilo.botaotexto}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilo= StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center'
    },
    imagem:{
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 50,
    },
    botaotexto: {
        fontFamily: 'Poppins-Bold',
        padding: 10,
        backgroundColor: '#ECE3CE',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal: 16,
        borderRadius: 6,
        elevation: 2,
    }
})
