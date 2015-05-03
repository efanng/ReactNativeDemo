/**
 * React Native News App
 * https://github.com/dawnsio/ReactNativeDemo
 */
'use strict';

var React = require ('react-native');

var NewsList = require ('./NewsList');
var LoadingView = require ('./Loading');
var SettingView = require ('./Setting');
var LibraryView = require ('./Library');

var {
        StyleSheet,
        View,
        StatusBarIOS,
        TabBarIOS,
        NavigatorIOS,
        Text
        } = React;

var TabBarItemIOS = TabBarIOS.Item;

var TabBar = React.createClass ({
    getInitialState: function ()
    {
        return {
            selectedTab: 'blueTab',
            presses    : 0
        }
    },
    render         : function ()
    {
        StatusBarIOS.setStyle (StatusBarIOS.Style['darkContent']);
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarItemIOS
                    name="blueTab"
                    systemIcon='favorites'
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() =>
                    {
                        this.setState ({
                            selectedTab: 'blueTab'
                        });
                    }}>

                    <NavigatorIOS
                        style={[styles.container]}
                        initialRoute={{
                            title             : 'Dashboard',
                            rightButtonTitle  : 'Settings',
                            component         : NewsList,
                            onRightButtonPress: () =>
                            {
                                alert ('Javascript Alert');
                                StatusBarIOS.setStyle (StatusBarIOS.Style['default']);
                            }
                        }}
                        barTintColor="#183E63"
                        titleTextColor="#FFFFFF"
                    />

                </TabBarItemIOS>
                <TabBarItemIOS
                    name="library"
                    systemIcon='contacts'
                    selected={this.state.selectedTab === 'library'}
                    onPress={() =>
                    {
                        this.setState ({
                            selectedTab: 'library'
                        });
                    }} >
                    <NavigatorIOS
                        style={[styles.container, {flex: 1}]}
                        initialRoute={{
                            title    : 'Library',
                            component: LibraryView
                        }}
                    />
                </TabBarItemIOS>
                <TabBarItemIOS
                    accessibilityLabel="Red Tab"
                    name="redTab"
                    systemIcon='history'
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() =>
                    {
                        this.setState ({
                            selectedTab: 'redTab'
                        });
                    }}>
                    <LoadingView />
                </TabBarItemIOS>
                <TabBarItemIOS
                    name="greenTab"
                    systemIcon='more'
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() =>
                    {
                        this.setState ({
                            selectedTab: 'greenTab'
                        });
                    }}>

                    <NavigatorIOS
                        style={[styles.container, {flex: 1}]}
                        initialRoute={{
                            title    : 'More',
                            component: SettingView
                        }}

                    />

                </TabBarItemIOS>
            </TabBarIOS>
        );
    }
});

var styles = StyleSheet.create ({
    tabContent: {
        flex      : 1,
        alignItems: 'center'
    },
    container : {
        flex: 1
    },
    tabText   : {
        margin: 50
    }
});

function _ix_DEPRECATED(imageUri)
{
    return {
        uri     : imageUri,
        isStatic: true
    };
}

TabBar.external = true;

module.exports = TabBar;
