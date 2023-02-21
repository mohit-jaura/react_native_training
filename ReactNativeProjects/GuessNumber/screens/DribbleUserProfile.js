import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DEVICE_HEIGHT = Dimensions.get('window').height;

const THIRTY_PERCENT_HEIGHT = DEVICE_HEIGHT * 0.3;

console.log('HEIGTH ==>', DEVICE_HEIGHT);
console.log('THIRTY ==>', THIRTY_PERCENT_HEIGHT);

const BlackView = () => {
  return (
    <View style={styles.blackView}>
      <ProfilePicView />
    </View>
  );
};

const ProfilePicView = () => {
  return (
    <View style={styles.profilePicView}>
      <Icon name="user-secret" size={90} color="black" />
    </View>
  );
};

const DetailsContainer = () => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.userNameLabel}>Beatrice Colon</Text>
      <Text style={styles.userGenderLabel}>24, Male</Text>
      <TilesView icon={'shopping-bag'} title={'Product Designer'} />
      <TilesView icon={'location-arrow'} title={'Chennai, India'} />
      <TilesView icon={'map-signs'} title={'18 miles away'} />
    </View>
  );
};

const TilesView = props => {
  return (
    <View style={styles.tilesShadowView}>
      <Icon name={props.icon} size={20} color="black" />
      <Text style={styles.tilesTitle}>{props.title}</Text>
    </View>
  );
};
const DribbleUserProfile = () => {
  return (
    <View style={styles.mainView}>
      <BlackView />

      <DetailsContainer />
    </View>
  );
};

export default DribbleUserProfile;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },

  blackView: {
    height: '30%',
    backgroundColor: 'black',
    alignItems: 'center',
  },

  profilePicView: {
    height: 100,
    width: 100,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    top: THIRTY_PERCENT_HEIGHT - 60,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  detailsContainer: {
    height: 200,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 90,
  },

  userNameLabel: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },

  userGenderLabel: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'grey',
  },

  tilesShadowView: {
    elevation: 5,
    height: 50,
    width: '80%',
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 8,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },

  tilesTitle: {
    width: '80%',
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'left',
  },
});
