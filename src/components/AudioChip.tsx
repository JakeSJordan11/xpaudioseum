import * as React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';

interface AudioChipProps {
  title: string;
  image: ImageSourcePropType;
}

export default function AudioChip(props: AudioChipProps) {
  const {width, fontScale} = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';
  const dynamicStyles = {
    card: {
      width: width * 0.5,
      backgroundColor: isDarkMode ? 'hsl(0, 0%, 12%)' : 'hsl(0, 0%, 90%)',
      borderColor: isDarkMode ? 'hsl(0, 0%, 18%)' : 'hsl(0, 0%, 88%)',
    },
    cardTitle: {
      fontSize: fontScale * 16,
      color: isDarkMode ? 'hsl(0, 0%, 75% )' : 'hsl(0, 0%, 25%)',
    },
    pressedCard: {
      width: width * 0.5,
      backgroundColor: isDarkMode ? 'hsl(244, 50%, 44%)' : 'hsl(122, 50%, 88%)',
      borderColor: 'transparent',
    },
    cardImage: {
      width: width * 0.1,
      height: width * 0.1,
    },
  };
  return (
    <Pressable
      style={({pressed}) => [
        pressed ? dynamicStyles.pressedCard : dynamicStyles.card,
        styles.card,
      ]}>
      <Text style={dynamicStyles.cardTitle}>{props.title}</Text>
      <Image
        source={props.image}
        style={[dynamicStyles.cardImage, styles.cardImage]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  cardImage: {
    borderRadius: 100,
    marginVertical: 5,
  },
});
