import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Searchbar} from 'react-native-paper';

const Search = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView>
          <View
            style={{
              width: '100%',
              height: 55,
              paddingLeft: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                marginTop: 4,
                color: '#272727',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 20,
              }}>
              Search
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{width: '100%'}}>
              <Searchbar
                iconColor="#407BFF"
                inputStyle={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#272727',
                  paddingBottom: 5,
                  paddingLeft: 0,
                }}
                style={{
                  elevation: 0,
                  height: 40,
                  backgroundColor: '#eee',
                  padding: 0,
                  borderRadius: 100,
                }}
                placeholder="Search and discover things"
              />
            </View>
          </View>
          {/* {focus === false && (
            <LinearGradient
              colors={['#407BFF', '#40C6FF']}
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 0.0}}
              style={{height: 200}}></LinearGradient>
          )} */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Search;
