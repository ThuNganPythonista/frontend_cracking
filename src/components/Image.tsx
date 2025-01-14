import React from 'react';
import { View, StyleSheet,ViewStyle } from 'react-native';

interface RectangleProps {
  imageSource: React.ReactNode; 
  style?:ViewStyle;
}

const Rectangle: React.FC<RectangleProps> = ({ imageSource }) => {
  return (
    <View style={styles.rectangleContainer}>
      {imageSource}
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleContainer: {
    width: 100,
    height: 100,
    marginBottom: 40,
    marginLeft: 49,
  },
});

export default Rectangle;
