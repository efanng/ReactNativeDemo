/**
 * React Native News App
 * https://github.com/dawnsio/ReactNativeDemo
 */
'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
} = React;

var Loading = React.createClass({

    render : function() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading...
                </Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#ffffff',
        fontSize : 12
    }
});

module.exports = Loading;

