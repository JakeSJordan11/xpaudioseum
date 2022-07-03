import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function AudioBar(props: { onPlayPress: () => void }) {
  const { width, fontScale } = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';
  const dynamicStyles = {
    controlsContainer: {
      backgroundColor: isDarkMode ? 'hsl(0, 0%, 14%)' : 'hsl(0, 0%, 98%)',
      borderColor: isDarkMode ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 40%)',
      width: width * 0.9,
    },
    playPause: {
      color: isDarkMode ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 40%)',
      fontSize: fontScale * 64,
    },
    nextPrevious: {
      color: isDarkMode ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 40%)',
      fontSize: fontScale * 48,
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[dynamicStyles.controlsContainer, styles.controlsContainer]}>
        <Pressable>
          <FontAwesome name="chevron-circle-left" style={dynamicStyles.nextPrevious} />
        </Pressable>
        <Pressable onPress={props.onPlayPress}>
          <FontAwesome name="play-circle-o" style={dynamicStyles.playPause} />
        </Pressable>
        <Pressable>
          <FontAwesome name="chevron-circle-right" style={dynamicStyles.nextPrevious} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  controlsContainer: {
    borderTopWidth: 0.2,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
