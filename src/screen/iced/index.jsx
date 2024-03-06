import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { listIcedCoffe } from "../../services/requisicoes/iced";
import TopoCafe from "../../components/topoCaffee/index"
import Separador from "../../components/separador/index"

export default function IcedCoffee() {
    const [data, setData] = useState([]);
    const [expandidoItem, setExpandidoItem] = useState(null);

    const itemTocado = (index) => {
        setExpandidoItem(expandidoItem === index ? null : index)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const resultado = await listIcedCoffe();
                setData(resultado);
            } catch (error) {
                console.log("Erro ao buscar dados:", error);
            }
        }
        fetchData();
    }, []);

    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => itemTocado(index)}>
            <View style={estilos.body}>
            <View style={estilos.card}>
                        <Image
                            source={{ uri: item.image }}
                            style={estilos.image}
                        />
                    </View>

                    <View style={estilos.card}>
                        <Text style={estilos.titulo}>{item.title}</Text >
                        {expandidoItem === index && <Text style={estilos.descricao}>{item.description}</Text>}
                    </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            ListHeaderComponent={TopoCafe}
            ItemSeparatorComponent={Separador}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

const estilos = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F2EAD3',
        justifyContent: 'space-between',
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },

    card: {
        marginHorizontal: 10,
        marginVertical: 10,
    },

    titulo: {
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
        lineHeight: 32,
    },

    descricao: {
        fontFamily: 'Poppins-regular',
        fontSize: 16,
        lineHeight: 22,
        width: 270,
    }
})