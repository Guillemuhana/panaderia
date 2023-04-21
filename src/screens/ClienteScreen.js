import React from "react";
import { View, Text } from "react-native" 

import {Button } from "react-native-elements"
import {screen} from "../utils";


export function ClienteScreen (props) {
    const { navigation } = props;

    const goToAddcliente = () =>{
       navigation.navigate(screen.cliente.nuevoCliente);
    }
    return (

        <View>
        <Text> Clientes </Text>

        <Button title="Nuevo cliente" onPress={goToAddcliente}/>
        
        </View>
    )
}