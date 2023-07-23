import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, TouchableWithoutFeedback } from 'react-native';

var {width, height} = Dimensions.get('window');

const MovieCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Movie', {data: item});
      }}>
      <Image
        source={require('../assets/images/moviePoster1.png')}
        style={{width: width * 0.6, height: height * 0.4}}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
