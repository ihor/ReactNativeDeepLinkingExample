import React from 'react';
import { AppRegistry } from 'react-native';

import router from './app/router';

export default class ReactNativeDeepLinkingExample extends React.Component {
    render() {
        return router;
    }
}

AppRegistry.registerComponent('ReactNativeDeepLinkingExample', () => ReactNativeDeepLinkingExample);

