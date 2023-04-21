import React, {useState, useEffect} from "react";
import {getAuth, onAuthStateChanged} from "firebase";
import {UserGuestScreen} from "./UserGuestScreen";
import { UserLoggedScreen} from "./UserLoggedScreen;"

export function AccouAccountScreen () {

    const [hasLogged, setHasLogged] = useState(null)

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setHasLogged(user ? true : false);
        })

    }, [])
    return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />
}
              
     
 