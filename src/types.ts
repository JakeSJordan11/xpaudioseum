import type { AVPlaybackSource } from "expo-av";
import type { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  Tracks: undefined;
  TrackFocus: {
    id: number,
    title: string,
    artwork: ImageSourcePropType,
    source: AVPlaybackSource,
    artist: string,
    notes: string
  };
}
