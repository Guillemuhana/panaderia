import { AppNavigation } from "./src/navigation/AppNavigation";
import {NavigationContainer} from "@react-navigation/native";
import {initFarebase} from "./src/utils";

export default function App() {
  return (

    <>
    <NavigationContainer>

    <AppNavigation />

    </NavigationContainer>
    
    </>
    
  );
}

