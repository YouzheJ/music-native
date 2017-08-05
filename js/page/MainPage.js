import React, {Component} from 'react'
import {
    Text,
    View,
    Button,
    SectionList,
    StyleSheet
} from 'react-native'
import BaseStyle from '../config/BaseStyle'
import Sound from 'react-native-sound'
import Icon from 'react-native-vector-icons/FontAwesome'

//===========FontAwesome
// https://oblador.github.io/react-native-vector-icons/
/*
music       音乐
search      搜索
star        实星
star-o      空星
user        人
th-list     选项列表
check       对勾
close       叉
gear        齿轮
trash-o     垃圾桶
home        屋
clock-o     时钟
play-circle-o   播放
repeat      重试
refresh     刷新
volume-off  无声
volume-dowm 减小声音
volume-up   增加声音
qrcode      二维码
play        播放
*/
//============

export default class MainPage extends Component {
    static navigationOptions = {
        title: '首页',
    }
    constructor(props) {
        super(props)
        this.state = {
            music: {},
        }
    }
    componentDidMount() {
        Sound.setCategory('Playback', true);

        let myMusic = new Sound('naonao_moon.mp3', Sound.MAIN_BUNDLE, (error) => {
            if(error) {
                console.log('failed to load the sound', error);
                return 
            }

            console.log('duration in seconds: ' + myMusic.getDuration() + ' number of channels: ' + myMusic.getNumberOfChannels());
        });

        myMusic.play((success) => {
            if(success) {
                console.log('successfully finish playing');
            }else {
                console.log('playback failed due to audio decoding errors');
            }
        });

        this.setState({music: myMusic});
    }
    playMusic = () => {
        this.state.music.play((success) => {
            if(success) {
                console.log('successfully finish playing');
            }else {
                console.log('playback failed due to audio decoding errors');
            }
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <View style={[styles.titleText, styles.activeBorder]}>
                        <Text style={[styles.titleTextContent, styles.activeColor]}>单曲</Text>
                    </View>
                    <View style={[styles.titleText]}>
                        <Text style={styles.titleTextContent}>歌手</Text>
                    </View>
                    <View style={[styles.titleText]}>
                        <Text style={styles.titleTextContent}>专辑</Text>
                    </View>
                    <View style={[styles.titleText]}>
                        <Text style={styles.titleTextContent}>文件夹</Text>
                    </View>
                </View>
                <SectionList
                    sections={[
                        {title: '播放全部', data: ['aaa', 'bbb', 'ccc', 'ddd', 'ddd', 'ddd', 'ddd', 'ddd', 'ddd', 'ddd', 'ddd', 'ddd', 'ddd', 'ddd', 'ddd']},
                    ]}
                    renderSectionHeader={({section}) => 
                        <View style={styles.headerBox}>
                            <Text style={styles.headerText}>{section.title}</Text>
                        </View>
                    }
                    renderItem={({item, index}) => 
                        <View style={styles.itemBox} key-={index}>
                            <Text style={styles.itemText} key={index}>{item}</Text>
                        </View>
                    }
                />
                
                <View style={styles.bottomContentBox}>
                    <View
                        style={styles.bottomContent}
                        onPress={() => navigate('Play', { name: 'My heart will go on' })}>
                        <View style={styles.playingNameBox}>
                            <View style={styles.playImg}><Icon name="smile-o" size={30} color={BaseStyle.thirdFontColor} /></View>
                            <Text style={styles.playingName}>aaa</Text>
                        </View>
                        <View style={styles.playBtnBox}>
                            <Text style={styles.playBtn} onPress={this.playMusic}>播放</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleBox: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BaseStyle.backgroundWhite,
        flexDirection: 'row'
    },
    titleText: {
        width: '25%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: BaseStyle.backgroundWhite,
        borderBottomWidth: 2,
    },
    titleTextContent: {
        fontSize: 18,
        color: '#363636',
    },
    activeColor: {
        color: BaseStyle.secondRed,
    },
    activeBorder: {
        borderBottomColor: BaseStyle.MainRed,
        borderBottomWidth: 3,
    },
    headerBox: {
        height: 50,
        paddingLeft: 10,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#9995',
        borderBottomWidth: 0.5,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    itemBox: {
        height: 50,
        paddingLeft: 20,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        borderBottomColor: '#9995',
        borderBottomWidth: 0.5
    },
    itemText: {
        fontSize: 16,
    },
    bottomContentBox: {
        flexDirection: 'column-reverse'
    },
    bottomContent: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: BaseStyle.backgroundWhite,
    },
    playingNameBox: {
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginLeft: 20,
    },
    playingName: {
        color: BaseStyle.MainFontColor,
    },
    playImg: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BaseStyle.backgroundGray,
        borderColor: BaseStyle.thirdFontColor,
        borderWidth: 1,
        marginRight: 10,
    },
    playBtnBox: {
        width: 50,
        marginLeft: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: BaseStyle.secondFontColor,
        borderWidth: 2,
    },

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