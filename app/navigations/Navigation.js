import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import ListStack from "./ListStack";
import QuienesSomosStack from "./QuienesSomosStack";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="home"
                    component={HomeStack}
                    options={{title:"Home"}}
                />
                <Tab.Screen
                    name="listado-ciudades"
                    component={ListStack}
                    options={{title:"Listado de Ciudades"}}
                />
                <Tab.Screen
                    name="quienes-somos"
                    component={QuienesSomosStack}
                    options={{title:"Quines Somos"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}