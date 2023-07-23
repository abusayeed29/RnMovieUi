import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MovieCard from './MovieCard';

var {width, height} = Dimensions.get('window');

export default function TrendingMovies({data}) {
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel
        data={data}
        renderItem={({item}) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
}
