import React from "react";
import { 
    Text,
    View,
    Image,
    StyleSheet
 } from "react-native";
 import TopoImage from '../../assets/img/coffee-cover.jpg'

 export default function TopoCaffe() {
    return(
        <View>
        <Image source={ TopoImage }  style={estilo.imagem}/>
        <Text style={estilo.titulo}> Tipos de cafe</Text>
        </View>
    )
 }

 const estilo = StyleSheet.create({
    imagem: {
        width:  500,
        height: 450,
    },
    titulo: {
        fontFamily: 'Poppins-Bold',
        fontSize: 32,
        backgroundColor: '#3C2A21',
        color: '#F5F5F5',
        textAlign: 'center'
    }
 })