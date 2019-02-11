import React from "react"; 
import {TabNavigator} from "react-navigation"; 
import {Icon} from "react-native-elements"; 

import Login from "../screens/Login"; 
import ProfileScreen from "../screens/ProfileScreen";

export const Tabs = TabNavigator({
    Login:{
        screen: Login
    }, 

    ProfileScreen:{
        screen: ProfileScreen
    }
}); 
