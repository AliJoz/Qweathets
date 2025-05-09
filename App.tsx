// components/WelcomeCard.tsx
import { View, Text } from 'react-native';
import React from 'react';
import ModuleName from './components/Container';

import './global.css';

export default function App() {
  return (
    <>
      <View className="m-4 rounded-2xl bg-white p-5 shadow-lg">
        <Text className="text-xl font-bold text-gray-800">سلام 👋</Text>
        <Text className="mt-2 text-base text-gray-600">به اپلیکیشن NativeWind خوش اومدی!</Text>
      </View>
      <ModuleName />
    </>
  );
}
