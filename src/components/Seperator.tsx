import React from 'react';
import {useWindowDimensions, View} from 'react-native';

export default function Seperator() {
  const {width} = useWindowDimensions();
  const dynamicStyles = {
    separator: {
      height: width * 0.025,
    },
  };
  return <View style={dynamicStyles.separator} />;
}
