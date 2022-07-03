import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  useColorScheme,
} from 'react-native';
import AudioCard from '../components/AudioCard';
import Seperator from '../components/Seperator';
import { TRACK_DATA } from '../data/TrackData';

export default function TracksScreen({ navigation }: any) {
  const isDarkMode = useColorScheme() === 'dark';
  const dynamicStyles = {
    container: {
      backgroundColor: isDarkMode ? 'hsl(0, 0%, 14%)' : 'hsl(0, 0%, 98%)',
    },
  };

  function handleOnPress(item: any) {
    navigation.navigate({
      name: 'TrackFocus',
      params: {
        id: item.id,
        title: item.title,
        image: item.artwork,
        source: item.source,
        artist: item.artist,
        notes: item.notes,
      },
    });
  }

  return (
    <SafeAreaView style={[dynamicStyles.container, styles.container]}>
      <StatusBar
        backgroundColor={isDarkMode ? 'hsl(0, 0%, 14%)' : 'hsl(0, 0%, 98%)'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <FlatList
        data={TRACK_DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <AudioCard
            id={item.id}
            title={item.title}
            artwork={item.artwork}
            artist={item.artist}
            onPress={() => handleOnPress(item)}
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ItemSeparatorComponent={() => <Seperator />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
  },
});
