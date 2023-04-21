import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {screen} from"../utils";

import { ClienteScreen } from"../screens/ClienteScreen";
import {NuevoClienteScreen} from "../screens/Clientes/NuevoClienteScreen";
 
const Stack = createNativeStackNavigator();

export function ClientesStacks(){
    return (
        <Stack.Navigator>

            <Stack.Screen 
               name={screen.cliente.cliente} 
               component={ClienteScreen}
               option={{title: "Cliente"}}
            />
             <Stack.Screen 
                name={screen.cliente.nuevoCliente} 
                component={NuevoClienteScreen}
                option={{title: "Nuevo"}}
            />
          
           
        </Stack.Navigator>
    )
}

