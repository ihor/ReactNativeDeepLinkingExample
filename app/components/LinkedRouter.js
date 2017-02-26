import React from 'react';
import { Linking } from 'react-native';
import { Router } from 'react-native-router-flux';
import crossroads from 'crossroads';

export default class LinkedRouter extends React.Component {
    constructor(props) {
        super(props);

        this.handleOpenURL = this.handleOpenURL.bind(this);
    }

    componentDidMount() {
        Linking
            .getInitialURL()
            .then(url => this.handleOpenURL({ url }))
            .catch(console.error);

        Linking.addEventListener('url', this.handleOpenURL);
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL(event) {
        if (event.url && event.url.indexOf(this.props.scheme + '://') === 0) {
            crossroads.parse(event.url.slice(this.props.scheme.length + 3));
        }
    }

    render() {
        return <Router { ...this.props }/>;
    }
}

LinkedRouter.propTypes = {
    scheme: React.PropTypes.string.isRequired
};