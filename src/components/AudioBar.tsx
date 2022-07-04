import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronCircleLeft, faCirclePlay, faCircleStop } from '@fortawesome/free-solid-svg-icons';

interface AudioBarProps {
  onPlayPress: () => void;
  onBackPress: () => void;
  isPlaying: boolean;
}

export default function AudioBar(props: AudioBarProps) {
  const { width } = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';
  const dynamicStyles = {
    controlsContainer: {
      backgroundColor: isDarkMode ? 'hsl(0, 0%, 14%)' : 'hsl(0, 0%, 98%)',
      borderColor: isDarkMode ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 40%)',
      width: width * 0.9,
    },
    icons: {
      color: isDarkMode ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 40%)',
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[dynamicStyles.controlsContainer, styles.controlsContainer]}>
        <Pressable onPress={props.onBackPress}>
          <FontAwesomeIcon
            size={32}
            icon={faChevronCircleLeft}
            color={dynamicStyles.icons.color}
          />
        </Pressable>
        <Pressable onPress={props.onPlayPress}>
          {props.isPlaying ? (
            <FontAwesomeIcon
              size={64}
              icon={faCircleStop}
              color={dynamicStyles.icons.color}
            />
          ) : (
            <FontAwesomeIcon
              size={64}
              icon={faCirclePlay}
              color={dynamicStyles.icons.color}
            />
          )}
        </Pressable>
      </View>
    </SafeAreaView >
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
