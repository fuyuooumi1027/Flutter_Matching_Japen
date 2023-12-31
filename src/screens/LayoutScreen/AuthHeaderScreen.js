import React from 'react';
import {Text, View,SafeAreaView, Image} from 'react-native';
import HeaderStyleSheet from './HeaderStylesheet';

const AuthHeaderScreen = () => {
  return (
    <SafeAreaView style={HeaderStyleSheet.LHcontainer}>
      {/* Header Start */}
      <View style={HeaderStyleSheet.LHeaderContent}>
            <View style={HeaderStyleSheet.LHeaderLogo}>
                <Image 
                    style={HeaderStyleSheet.LheaderLogoImage}
                    source={require('../../assets/images/logo.png')}
                />
            </View>
            <View style={HeaderStyleSheet.LHeaderTextGroup}>
                <Text style={HeaderStyleSheet.LHeaderText}>
                    ようこそ!
                </Text>
                <Text style={HeaderStyleSheet.LHeaderTextRight}>
                  『ダービードリーム』の世界へ !
                </Text>
            </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthHeaderScreen;