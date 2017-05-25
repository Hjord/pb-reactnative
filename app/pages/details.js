import React, {Component} from 'react';
import {
    Text,
    Platform,
    StyleSheet,
    View,
    Button,
    TouchableNativeFeedback
} from 'react-native';
import TestView from '../TestView';

export default class DetailPage extends Component {

    static navigationOptions = {

        title: 'Details Screen'
    }

    som() {}

    render() {

        return (
            <View style={styles.specBox}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.text}>
                        <Text>Button</Text>
                    </View>
                </TouchableNativeFeedback>
                {Platform.OS == 'ios'
                    ? <Text>This is only shown on iOS</Text>
                    : <Text>This is only shown on Android</Text>}
                <Button
                    color='#841584'
                    title="Native Function"
                    onPress={() => console.log('btn press')}/>
                <TestView text="hej" color="red"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    specBox: {
        backgroundColor: (Platform.OS == 'ios')
            ? 'red'
            : 'green',
        flex: 1,
        justifyContent: 'space-between'
    },
    text: {
        ...Platform.select({
            ios: {
                backgroundColor: 'blue',
                shadowColor: "#000000",
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowOffset: {
                    height: 1,
                    width: 0
                }
            },
            android: {
                height: 50,
                backgroundColor: 'red'
            }
        })
    }
});