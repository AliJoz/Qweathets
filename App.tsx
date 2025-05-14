// components/WelcomeCard.tsx
import { View, SafeAreaView } from 'react-native';
import React from 'react';
import ModuleName from './components/Container';
import Weathers from './components/weathers';

import './global.css';

export default function App() {
  return (
    <>
    {/* فقط نوار بالا با SafeAreaView */}
      <SafeAreaView className='bg-zinc-300 text-zinc-950'>
        <View style={{ padding: 12 }}>
          {/* <Text style={{ fontSize: 16, fontWeight: 'bold' }}>نوار بالایی من 😎</Text> */}
        </View>
      </SafeAreaView>
     
        <View className="bg-neutral-200  dark:bg-gray-800">
          <View className="">
            {/* محتوای اصلی */}

            {/* <Text className='text-red-700'> snnnnnnnnnnnnnnnssh</Text> */}
            {/* سایدبار و آیکون‌ها */}
         
          </View>
          <View className='px-1'> 

        <ModuleName />
        <Weathers />

          </View>
        </View>
 
    </>
  );
}
