import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import {ClientesStacks} from "./Clientesstacks";
import {screen } from "../utils";


import {AccouAccountScreen} from "../screens/Acoount/AccountScreen";
import {ProductoScreen} from "../screens/ProductoScreen";
import {PromocionesScreen} from "../screens/PromocionesScreen";
import {SearchScreen} from "../screens/SearchScreen";

 



const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
              
              <Tab.Navigator 
                   screenOptions={({ route }) => ({

                    headerShown: false,
                
                    tabBarActiveTintColor:"#857678",
                    tabBarInactiveTintColor: "#ffa048",
                    tabBarIcon: ({ color, size }) => screenOptions(route, color, size)
              }
              )}> 
                 <Tab.Screen name={screen.cuenta.tab}
                  component={AccouAccountScreen} options={{ title: "Cuenta"}}/>
                        


                  <Tab.Screen name={screen.cliente.tab} 
                  component={ClientesStacks} options={{ title: "Clientes"}}/>

                
                  <Tab.Screen name={screen.productos.tab} 
                  component={ProductoScreen} options={{ title: "productos"}}/>

                  <Tab.Screen name={screen.promociones.tab} 
                  component={PromocionesScreen} options={{ title: "Promos"}}/>

                  <Tab.Screen name={screen.buscar.tab}
                   component={SearchScreen} options={{ title: "Buscar"}}/>

              </Tab.Navigator>
    )
}

function screenOptions(route, color, size) {
    let iconName;

    if(route.name === screen.cuenta.tab) {
       iconName = "account-circle-outline";
    }
    if(route.name === screen.cliente.tab) {
        iconName = "heart-outline";
     }
     if(route.name === screen.productos.tab) {
        iconName = "store";
     }
     if(route.name === screen.promociones.tab) {
        iconName = "sale";
     }
     if(route.name === screen.buscar.tab) {
        iconName = "magnify";
     }
     return (
        <Icon type="material-community"
        name={iconName}
         color={color} 
          size={size}/>
     );
    
}