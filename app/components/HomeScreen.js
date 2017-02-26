import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, Image, TextInput } from 'react-native';
import Button from 'react-native-button';

import styles from '../styles';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onGreet = this.onGreet.bind(this);
    }

    onNameChange(name) {
        this.setState({ name });
    }

    onGreet() {
        Actions.greeting({name: this.state.name});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Enter your name"
                        style={styles.input}
                        autoFocus={true}
                        editable = {true}
                        spellCheck={false}
                        autoCapitalize="none"
                        onChangeText={this.onNameChange}
                    />
                </View>

                <Button
                    onPress={this.onGreet}
                    style={styles.buttonText}
                    containerStyle={styles.button}>
                    Greet
                </Button>
            </View>
        );
    }
}
