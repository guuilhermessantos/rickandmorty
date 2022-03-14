import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { DashBoard } from '../screens/DashBoard';
import { Favorites } from '../screens/Favorites';
import { SignIn } from '../screens/SignIn';


const { Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                cardShadowEnabled: false,
                cardStyle: {
                    backgroundColor: '#00BFFF',
                }
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="DashBoard"
                component={DashBoard}
            />
            <Screen
                name="Favorites"
                component={Favorites}
            />
        </Navigator>
    )
}