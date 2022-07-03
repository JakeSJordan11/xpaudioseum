import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import AudioBar from '../components/AudioBar';
import { Audio } from 'expo-av';

export default function TrackFocusScreen({ route }: any) {
  const [sound, setSound] = React.useState<Audio.Sound>();
  const isDarkMode = useColorScheme() === 'dark';
  const { width, height, fontScale } = useWindowDimensions();
  const dynamicStyles = {
    container: {
      backgroundColor: isDarkMode ? 'hsl(0, 0%, 14%)' : 'hsl(0, 0%, 98%)',
    },
    image: {
      width: width * 0.9,
      height: height * 0.6,
    },
    text: {
      fontSize: fontScale * 18,
      color: isDarkMode ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 20%)',
    },
    title: {
      fontSize: fontScale * 24,
      color: isDarkMode ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 20%)',
    },
    underTitle: {
      color: isDarkMode ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 40%)',
    },
  };


  async function handlePlayPress() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      route.params?.source
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


  return (
    <SafeAreaView style={[dynamicStyles.container, styles.container]}>
      <StatusBar
        backgroundColor={isDarkMode ? 'hsl(0, 0%, 14%)' : 'hsl(0, 0%, 98%)'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <ScrollView
        style={styles.imageContainer}
        contentContainerStyle={styles.imageContentContainer}>
        <Image
          source={route.params?.image}
          style={[dynamicStyles.image, styles.image]}
        />
        <View style={styles.infoContainer}>
          <Text style={[dynamicStyles.title, styles.title]}>
            {route.params?.title}
          </Text>
          <Text style={[dynamicStyles.underTitle, styles.underTitle]}>
            jake jordan
          </Text>
          <Text style={dynamicStyles.text}>{route.params?.notes}</Text>
        </View>
      </ScrollView>

      <AudioBar onPlayPress={handlePlayPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContentContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 80,
    paddingTop: 20,
  },
  infoContainer: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    paddingTop: 20,
  },
  underTitle: {
    paddingBottom: 10,
    fontStyle: 'italic',
  },
});
