import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native';
import navigationData from './DrawerScreens';
import { connect } from "react-redux";
// import { logout, setServerStatus } from "../../redux";
import Styles from './styles';
// import { Ionicons } from '@expo/vector-icons';

class CustomSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    screenAction = (data) => {
        this.props.navigation.navigate(data.route)
    }

    renderItem = (data) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.screenAction(data)}
                    style={Styles.listItem}>
                    <View style={Styles.listWithIcon}>
                        {/* <Ionicons name={data.icon} size={32} color="white" /> */}
                        <Text style={Styles.listItemText}>{data.name}</Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
    render() {
        const log_out = 'Log Out';
        const log_out_icon = 'md-log-out'
        return (
            <View style={Styles.fullScreen}>
                <View style={{ paddingTop: 32, backgroundColor: '#36301A' }} />
                <FlatList
                    data={navigationData}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={Styles.footerButton}>
                    <TouchableOpacity
                        onPress={this.props.logout}
                        style={Styles.logOutButton}>
                        <View style={Styles.listWithIcon}>
                            {/* <Ionicons name={log_out_icon} size={32} color="white" /> */}
                            <Text style={Styles.logoutText}>{log_out}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const { navigation } = ownProps;
    return {
        logout: () =>
            dispatch((_, getState) => {
                const {
                    auth: { userId, token, serverAddress }
                } = getState();
                dispatch(logout(userId, token, serverAddress));
                dispatch(setServerStatus(false))
                navigation.navigate("SignIn");
            })
    };
};

export default connect(null, mapDispatchToProps)(CustomSideBar);

