//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';



function LoadingIndicatorView() {
    return <ActivityIndicator color='#009b88' size='large' />
}
// create a component
export default class WebViewer extends Component {
    render() {
        return (
            <WebView
                originWhitelist={['*']}
                // source={{ uri: 'https://instamobile.io/blog' }}
                // source={{ uri: 'https://www.google.com/maps/@18.7533869,83.4750232,15z?entry=ttu' }}
                source={{ uri: 'https://visheshcountrycache.tech/' }}
                renderLoading={this.LoadingIndicatorView}
                startInLoadingState={true}
            />
        );
    };
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app

