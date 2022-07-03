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

interface AudioCardProps {
  id: number;
  title: string;
  artwork: ImageSourcePropType;
  artist: string;
  onPress: () => void;
}

export default function AudioCard(props: AudioCardProps) {
  const {width, fontScale} = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';
  const dynamicStyles = {
    card: {
      width: width * 0.45,
      backgroundColor: isDarkMode ? 'hsl(0, 0%, 12%)' : 'hsl(0, 0%, 90%)',
      borderColor: isDarkMode ? 'hsl(0, 0%, 18%)' : 'hsl(0, 0%, 88%)',
    },
    cardTitle: {
      fontSize: fontScale * 18,
      color: isDarkMode ? 'hsl(0, 0%, 75% )' : 'hsl(0, 0%, 25%)',
    },
    cardArtist: {
      fontSize: fontScale * 14,
      color: isDarkMode ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 40%)',
    },
    pressedCard: {
      width: width * 0.45,
      backgroundColor: isDarkMode ? 'hsl(244, 50%, 44%)' : 'hsl(122, 50%, 88%)',
      borderColor: 'transparent',
    },
    cardImage: {
      width: width * 0.33,
      height: width * 0.33,
    },
  };
  return (
    <Pressable
      key={props.id}
      style={({pressed}) => [
        pressed ? dynamicStyles.pressedCard : dynamicStyles.card,
        styles.card,
      ]}
      onPress={props.onPress}>
      <Text style={[dynamicStyles.cardTitle, styles.cardTitle]}>
        {props.title}
      </Text>
      <Image
        source={props.artwork}
        style={[dynamicStyles.cardImage, styles.cardImage]}
      />
      <Text style={[dynamicStyles.cardArtist, styles.cardArtist]}>
        {props.artist}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardArtist: {
    fontStyle: 'italic',
  },
  cardImage: {
    borderRadius: 100,
    marginVertical: 5,
  },
});
