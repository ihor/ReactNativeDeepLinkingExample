import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import crossroads from 'crossroads';

import LinkedRouter from './components/LinkedRouter';
import HomeScreen from './components/HomeScreen';
import GreetingScreen from './components/GreetingScreen';

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="home" title="Home" component={HomeScreen} initial={true}/>
        <Scene key="greeting" title="Greeting" component={GreetingScreen}/>
    </Scene>
);

crossroads.addRoute('greetings/{name}', name => Actions.greeting({ name }));

export default <LinkedRouter scenes={scenes} scheme="sampleapp"/>;