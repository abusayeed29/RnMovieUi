import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';
import TrendingMovies from '../components/TrendingMovies';
import { styles } from '../theme';

const ios = Platform.OS == 'ios';

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-neutral-800">
      {/* search bar and logo */}
      <SafeAreaView className="mb-3">
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 10}}>
          {/* Trending movies carousel */}
          <TrendingMovies data={trending} />
          {/* upcoming movie row */}
          <MovieList title="Upcoming" data={upcoming} />
          {/* top rated movie row */}
          <MovieList title="Top Rated" data={topRated} />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
