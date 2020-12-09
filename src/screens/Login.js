import React, { Component } from 'react';
import { Button, Image, SafeAreaView, Text, View } from 'react-native';
import CustomHeader from '../components/CustomHeader/CustomHeader';
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
        const healthLogo = require("../images/logoHealth.png")
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader
                    imgSrc={healthLogo}
                />
                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>
                    <View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 32 }}>
                            <Image source={require("../images/logo.png")} style={{ width: 55, height: 55 }} />
                            <Text style={{ fontSize: 18, paddingTop: 32, textAlign: "center" }}>{"Welcome"}</Text>
                        </View>
                    </View>
                    <Text>{"Shadman"}</Text>
                    <Button
                        onPress={this.goToDrawerStack}
                        title="Press Me"
                    />
                </View>
            </SafeAreaView>

        );
    }
}

export default Login;