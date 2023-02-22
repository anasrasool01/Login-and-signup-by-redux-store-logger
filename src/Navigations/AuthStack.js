import React from 'react';

import { Home, Login, Profile, Signup } from '../'
import Todo from '../Screens/Todo/Todo';
// import {AddNewTask} from '../Components/Todo/Todo'

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
            />
              <Stack.Screen
                name="Profile"
                component={Profile}
            />
              <Stack.Screen
                name="Home"
                component={Home}
            />
              <Stack.Screen
                name="Todo"
                component={Todo}
            />
        </>
    )
}