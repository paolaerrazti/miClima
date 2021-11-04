import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import AccountStack from "./AccountStack";
import FavoritesStack from "./FavouriteStack";
import SearchStack from "./SearchStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import RestaurantesStack from "./RestaurantStack";


const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantesStack}
                    options={{title:"Restaurantes"}}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{title:"Favoritos"}}
                />
                <Tab.Screen
                    name="top-restaurants"
                    component={TopRestaurantsStack}
                    options={{title:"Top 5"}}
                />
                <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{title:"Buscador"}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{title:"MI Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}