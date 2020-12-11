import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native';
import navigationData from './DrawerScreens';
import Styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

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
                        <Icon name={data.icon} size={32} color="white" />
                        <Text style={Styles.listItemText}>{data.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={Styles.fullScreen}>
                <View style={Styles.drawerHeader} >
                    <Image source={require("../../images/logoHealth.png")} style={Styles.logoStyle} resizeMode={"contain"} />
                </View>
                <FlatList
                    data={navigationData}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        );
    }
}


export default CustomSideBar;

