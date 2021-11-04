import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QuienesSomos from "../screens/QuienesSomos";

const Stack = createStackNavigator();

export default function QuienesSomosStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="quienes-somos"
                component = {QuienesSomos}
                options = {{title: "Quienes Somos"}}            
            />
        </Stack.Navigator>
    );
}
