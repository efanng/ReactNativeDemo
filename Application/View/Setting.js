/**
 * React Native News App
 * https://github.com/dawnsio/ReactNativeDemo
 */
'use strict';

var React = require ('react-native');
var t = require ('tcomb-form-native');

var { AppRegistry, StyleSheet, Text, View, TouchableHighlight} = React;

var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct ({
    name      : t.Str,              // a required string
    surname   : t.maybe (t.Str),  // an optional string
    age       : t.Num,               // a required number
    //birthDate : t.Dat,
    rememberMe: t.Bool        // a boolean
});

var options = {};

var Setting = React.createClass ({
    getInitialState()
    {
        return {
            trueSwitchIsOn : true,
            falseSwitchIsOn: false
        };
    },
    render: function ()
    {
        return (
            <View style={styles.container}>
                <Form
                    ref="form"
                    type={Person}
                    options={options}
                />
                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        );
    }
});

var styles = StyleSheet.create ({
    container : {
        justifyContent : 'center',
        marginTop      : 50,
        padding        : 20,
        backgroundColor: '#ffffff'
    },
    title     : {
        alignSelf   : 'center',
        marginBottom: 30
    },
    buttonText: {
        alignSelf: 'center'
    },
    button    : {
        height         : 36,
        backgroundColor: '#48BBEC',
        borderColor    : '#48BBEC',
        borderWidth    : 1,
        borderRadius   : 8,
        marginBottom   : 10,
        alignSelf      : 'stretch',
        justifyContent : 'center'
    }
});

module.exports = Setting;

