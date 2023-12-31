import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { vw,vh  } from 'react-native-expo-viewport-units';
import { RTapButton } from '../components/Buttons';

// import ScreenOne from './RanchTapScreen/ScreenOne';
import ScreenOne from './RanchTapScreens/ScreenOne';
import ScreenTwo from './RanchTapScreens/ScreenTwo';
import ScreenThree from './RanchTapScreens/ScreenThree';

const RanchTapScreen = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    switch(activeButton) {
      case 1:
        return <ScreenOne />;
      case 2:
        return <ScreenTwo />;
      case 3:
        return <ScreenThree />;
      default:
        return <ScreenOne />;
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.Buttons}>
            <RTapButton id={1} isActive={activeButton === 1} label={'0～1歲馬'} style={styles.ButtonT} onPress={handleButtonPress} />
            <RTapButton id={2} isActive={activeButton === 2} label={'2～3歲馬'} style={styles.ButtonM} onPress={handleButtonPress} />
            <RTapButton id={3} isActive={activeButton === 3} label={'放牧馬'} style={styles.ButtonE} onPress={handleButtonPress} />
        </View>     
      {renderScreenBelowButtons()}
    </View>
  );
};

export default RanchTapScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: vh(28),
    flexDirection: 'column',
    
  },
  Buttons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: '100%',
    height: vh(5),
    paddingBottom: vh(1)
  }

});