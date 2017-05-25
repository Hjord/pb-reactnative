import React, {PropTypes, Component} from 'react';
import {requireNativeComponent, View} from 'react-native';

export default class TestViewComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <TestView {...this.props} />;
    }
}

TestViewComponent.propTypes = {

    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    ...View.propTypes
}

const TestView = requireNativeComponent(`TestView`, TestViewComponent);
