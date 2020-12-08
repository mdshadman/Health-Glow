import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goToDrawerStack = () => {
        const { navigation } = this.props;
        navigation.navigate("Home")
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Text>{"Shadman"}</Text>
                <Button
                    onPress={this.goToDrawerStack}
                    title="Press Me"
                />
            </View>
        );
    }
}

export default Login;