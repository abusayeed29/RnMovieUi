import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';
import { styles } from '../theme';

const ios = Platform.OS == 'ios';
const verticalMargin = ios ? '' : ' my-3';
var {width, height} = Dimensions.get('window');

const PersonScreen = () => {
  const {params: item} = useRoute();
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();
  const [person, setPerson] = useState({});
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{paddingBottom: 20}}>
      {/* back button */}
      <SafeAreaView
        className={
          'flex-row justify-between items-center mx-4 z-10 ' + verticalMargin
        }>
        <TouchableOpacity
          style={styles.background}
          className="rounded-xl p-1"
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
          <HeartIcon size="35" color={isFavourite ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>
      {/* person details */}
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View
            className="flex-row justify-center"
            style={{
              shadowColor: 'gray',
              shadowRadius: 40,
              shadowOffset: {width: 0, height: 5},
              shadowOpacity: 1,
            }}>
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2">
              <Image
                source={require('../assets/images/castImage2.png')}
                style={{height: height * 0.43, width: width * 0.74}}
              />
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-3xl text-white font-bold text-center">
              Keanu Reeves
            </Text>
            <Text className="text-neutral-500 text-base text-center">
              Beirut, Lebanon
            </Text>
          </View>

          <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full ">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold ">Gender</Text>
              <Text className="text-neutral-300 text-sm">Male</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-300 text-sm">1964-09-02</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">known for</Text>
              <Text className="text-neutral-300 text-sm">Acting</Text>
            </View>
            <View className="px-2 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-300 text-sm">84.23 %</Text>
            </View>
          </View>
          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">
              Keanu Charles Reeves is a Canadian actor. Born in Beirut and
              raised in Toronto, Reeves began acting in theatre productions and
              in television films before making his feature film debut in
              Youngblood
            </Text>
          </View>
          {/* person movies */}
          <MovieList title="Movies" hideSeeAll={true} data={personMovies} />
        </View>
      )}
    </ScrollView>
  );
};

export default PersonScreen;
