import React, { Component } from 'react';

import {
    View,
    Text,
    Dimensions,
    ScrollView,
    Button,
} from 'react-native';
import HeaderProfile from '../../components/Profile/HeaderProfile';
import BodyProfile from '../../components/Profile/BodyProfile';

var heightScreen = Dimensions.get('window').height;
var widthScreen = Dimensions.get('window').width;

class Profile extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{ height: heightScreen / 3, flexDirection: 'column', alignItems: 'center' }}>
                    <HeaderProfile name="Mai Thế Đại" country="Hà Nội, Việt Nam" url={require('../../assets/images/dai.jpg')} />
                    <View style={{ height: 3, width: 0.9 * widthScreen, backgroundColor: '#f2f2f2' }}>

                    </View>
                </View>
                <ScrollView style={{ height: 2 * heightScreen / 3 }}>
                    <View style={{ height: heightScreen / 5, flexDirection: 'row', alignItems: 'center' }}>
                        <BodyProfile icon={require('../../assets/icons/a-around.png')} titletext="Tên đăng nhập" bodytext='nguyendinh1802' />
                    </View>
                    <View style={{ height: heightScreen / 5, flexDirection: 'row', alignItems: 'center' }}>
                        <BodyProfile icon={require('../../assets/icons/email.png')} titletext="Email" bodytext='nguyendinh1802@gmail.com' />
                    </View>
                    <View style={{ height: heightScreen / 5, flexDirection: 'row', alignItems: 'center' }}>
                        <BodyProfile icon={require('../../assets/icons/password.png')} titletext="Mật khẩu" bodytext='' />
                    </View>
                    <View style={{ height: heightScreen / 5, flexDirection: 'row', alignItems: 'center' }}>
                        <BodyProfile icon={require('../../assets/icons/share.png')} titletext="Chia sẻ khóa học" bodytext='nguyendinh1802' />
                    </View>
                    <View style={{ height: heightScreen / 5, flexDirection: 'row', alignItems: 'center' }}>
                        <BodyProfile icon={require('../../assets/icons/table.png')} titletext="Bảng xếp hạng" bodytext='Giải đấu Kim Cương' />
                    </View>
                    <View style={{ height: heightScreen / 5, flexDirection: 'row', alignItems: 'center' }}>
                        <BodyProfile icon={require('../../assets/icons/sign-out.png')} titletext="Đăng xuất" bodytext='' />
                    </View>
                </ScrollView>
            </View>
        );
    }
};

export default Profile;
