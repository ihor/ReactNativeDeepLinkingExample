import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

export default class GreetingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

GreetingScreen.propTypes = {
    name: React.PropTypes.string.isRequired
};
