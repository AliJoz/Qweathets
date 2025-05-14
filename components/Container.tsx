import React from "react";
import { Text, View,Image} from "react-native";
import DaySvg from '../assets/img/main/day.svg';
interface Item {
 
  temp: number;
  speed: number;
  dir: number;
  dust: number;
}

const item: Item = {

  temp: 32.5,
  speed: 18,
  dir: 90,
  dust: 0.123,
};

function Container() {
  return (
    <View>
      <View className="flex-row justify-between ">
       <View className="items-start mt-4">
    <Image
      source={require("../assets/Qw.png")}

       style={{ width: 50, height: 50 }}
   
  />
      <Text className="text-zinc-900 text-xl font-extrabold mt-2">کیو ودر </Text>
</View>
<View className="flex-row mr-6 mt-5 justify-center items-center" >
  <DaySvg width={80} height={100} fill="#FFA500" />
  <Text className="text-zinc-700 text-4xl font-normal  ">28.2</Text>

</View>

  <Text className="text-zinc-900 text-4xl font-extrabold mr-1 mt-9">قمیار</Text>

</View>
      <View className="border-2 border-zinc-600 text-zinc-400  ">
              <View className=" ">
        <Text className="text-xl pr-1 pt-2 flex justify-end mb-9 font-bold md:pr-3 text-right tracking-tight dark:text-zinc-200 dark:font-extrabold text-zinc-800">
          شاخص‌های هوا 
        </Text>
        </View>
       <View className="flex flex-row justify-around flex-wrap text-base items-center px-2">
  <View className="flex flex-col items-center font-yekan mb-4 mx-2">
    <Text className="text-xs x:text-base md:text-lg text-zinc-800 dark:text-white font-iranBlack tracking-wide">
      دما واقعی
    </Text>
    <Text className="text-base x:text-lg text-zinc-700 dark:text-neutral-200 font-iranBold">
      {item.temp.toFixed(2)}°
    </Text>
  </View>

  <View className="flex flex-col items-center font-yekan mb-4 mx-2">
    <Text className="text-xs x:text-base md:text-lg text-zinc-800 dark:text-white font-iranBlack tracking-wide">
      سرعت باد
    </Text>
    <Text className="text-xs x:text-lg text-zinc-700 dark:text-neutral-200 font-iranBold">
      {(item.speed / 3.6).toFixed(2)} m/s
    </Text>
  </View>

  <View className="flex flex-col items-center font-yekan mb-4 mx-2">
    <Text className="text-xs x:text-base md:text-lg text-zinc-800 dark:text-white font-iranBlack tracking-wide">
      جهت باد
    </Text>
    <Text className="text-xs x:text-lg text-zinc-700 dark:text-neutral-200 font-iranBold">
      {/* {showDir(item.dir)} */}
      {item.dir}°
    </Text>
  </View>

  <View className="flex flex-col items-center font-yekan mb-4 mx-2">
    <Text className="text-zinc-800 dark:text-white text-[10px] x:text-base md:text-lg text-wrap font-iranBlack tracking-wide">
      میزان گرد و غبار
    </Text>
    <Text className="text-zinc-700 dark:text-neutral-200 text-base x:text-lg font-iranBold">
      {item.dust.toFixed(3)}
    </Text>
  </View>
</View>

      </View>
    </View>
  );
}

export default Container;
