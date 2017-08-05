import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

export default class PlayPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name}`
    })
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Enjoy with <Text style={{color: 'red'}}>{params.name}</Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff'
    // },
    // slide: {

    // },
    // image: {
    //     height: px2dp(130),
    //     width: Dimensions.get('window').width
    // },
    // imageBtnLine:{
    //     flexDirection: 'row',
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     borderBottomWidth: 1/PixelRatio.get(),
    //     borderBottomColor: '#c4c4c4'
    // },
    // imgBtn: {
    //     height: px2dp(80),
    //     width: Dimensions.get('window').width/3,
    // }
});