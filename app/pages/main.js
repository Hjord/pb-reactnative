import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    FlatList,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableHighlight,
    Platform,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput
} from 'react-native';

import ToastAndroid from '../toastModule';

export default class MainPage extends Component {

    constructor() {
        super();
        const ds = [
            {
                key: 1,
                title: 'Row 1'
            }, {
                key: 2,
                title: 'Row 2'
            }
        ];
        this.state = {
            dataSource: ds,
            touchX: "X:",
            touchY: "Y:"
        };
    }

    static navigationOptions = {
        title: 'Main Page'
    }

    //Render main
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={() => <View style={styles.separator}/>}
                    renderItem={this
                    .renderRow
                    .bind(this)}/>

                <TouchableWithoutFeedback
                    onPressIn={(data) => this.onTouchStart(data)}
                    onPressOut={(data) => this.onTouchEnd(data)}>
                    <View style={styles.box}></View>
                </TouchableWithoutFeedback >

                <Text>{"X: " + this.state.touchX}</Text>
                <Text>{"Y: " + this.state.touchY}</Text>

                <TextInput style={styles.entry}></TextInput>

            </View>
        );
    }
    //Handle list item press
    onRowPress(rowData) {

        const {navigate} = this.props.navigation;
        switch (rowData.key) {
            case 1:
                navigate('Details');
                break;
            case 2:
                if (Platform.OS == "android") {
                    ToastAndroid.show('Native toast - mmh.', ToastAndroid.SHORT);
                }
                break;
        }
    }

    //Touch event for box
    onTouchStart(data) {
        console.log(`IN: x: ${data.nativeEvent.locationX} y: ${data.nativeEvent.locationY}`);
        this.setState({touchX: data.nativeEvent.locationX});
        this.setState({touchY: data.nativeEvent.locationY});
    }
    onTouchEnd(data) {
        console.log(`OUT: x: ${data.nativeEvent.locationX} y: ${data.nativeEvent.locationY}`);
    }

    //Render list item
    renderRow({item}) {

        return (
            <TouchableNativeFeedback onPress={() => this.onRowPress(item)}>
                <View style={styles.row}>
                    <Text>{item.title}</Text>

                </View>
            </TouchableNativeFeedback>
        )

    }

}

const styles = StyleSheet.create({
    row: {
        height: 50,
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'black'
    },
    box: {
        marginTop: 100,
        height: 100,
        width: 100,
        backgroundColor: "#ff0000",
        borderRadius: 10
    },
    entry: {
        borderColor: 'red'
    }
});