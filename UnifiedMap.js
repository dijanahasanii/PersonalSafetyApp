import React from 'react';
import { Platform } from 'react-native';

let MapComponent;

if (Platform.OS === 'web') {
  MapComponent = require('./WebMap').default;
} else {
  MapComponent = require('./MapComponent').default;
}

export default function UnifiedMap() {
  return <MapComponent />;
}
