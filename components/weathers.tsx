import React from "react";
import { View, Text, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

import DaySvg from "../assets/img/main/day.svg";
import RainySvg from "../assets/img/main/snowy-6.svg";
import SoundSvg from "../assets/img/main/night.svg";

const { width } = Dimensions.get("window");

interface HourlyItem {
  hour: string;
  tempLow: number;
  tempHigh: number;
  windSpeed: number;
  icon: "day" | "rainy" | "sound";
}

const data: HourlyItem[] = [
  { hour: "10:00", tempLow: 20, tempHigh: 28, windSpeed: 10, icon: "day" },
  { hour: "13:00", tempLow: 22, tempHigh: 30, windSpeed: 12, icon: "rainy" },
  { hour: "16:00", tempLow: 23, tempHigh: 32, windSpeed: 14, icon: "sound" },
  { hour: "19:00", tempLow: 21, tempHigh: 27, windSpeed: 11, icon: "rainy" },
  { hour: "22:00", tempLow: 18, tempHigh: 24, windSpeed: 8, icon: "day" },
  { hour: "23:00", tempLow: 20, tempHigh: 30, windSpeed: 8, icon: "day" },
  { hour: "24:00", tempLow: 18, tempHigh: 24, windSpeed: 8, icon: "day" },
  { hour: "00:00", tempLow: 8, tempHigh: 16, windSpeed: 8, icon: "day" },
  { hour: "08:00", tempLow: 2, tempHigh: 30, windSpeed: 8, icon: "day" },
];

// برای نمایش باکس خلاصه روزانه
const dailySummary = {
  location: "تهران",
  tempLow: Math.min(...data.map((d) => d.tempLow)),
  tempHigh: Math.max(...data.map((d) => d.tempHigh)),
  icon: "day" as "day" | "rainy" | "sound",
};

const getIcon = (icon: "day" | "rainy" | "sound") => {
  switch (icon) {
    case "day":
      return <DaySvg width={50} height={50} />;
    case "rainy":
      return <RainySvg width={50} height={50} />;
    case "sound":
      return <SoundSvg width={50} height={50} />;
    default:
      return <DaySvg width={50} height={50} />;
  }
};

const HourlySwiper = () => {
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }

  return (
    <View className="mt-4">
      {/* Swiper */}
      <View className="h-72">
        <Swiper
          showsPagination={true}
          loop={false}
          autoplay={false}
          showsButtons={false}
          containerStyle={{ height: 220 }}
        >
          {groupedData.map((group, index) => (
            <View
              key={index}
              className="flex-row justify-center items-center space-x-4 px-4"
            >
              {group.map((item, idx) => (
                <View
                  key={idx}
                  className="bg-neutral-200 border-neutral-600 border-2 dark:bg-zinc-800 rounded-3xl shadow-lg p-4 w-[45%] mx-2"
                >
                  <Text className="text-zinc-700 dark:text-white text-center text-base font-bold mb-2">
                    {item.hour}
                  </Text>
                  <View className="items-center">{getIcon(item.icon)}</View>
                  <View className="flex-row justify-center items-center gap-x-1 mt-3 mb-1">
                    <Text className="text-blue-500 text-sm font-semibold">
                      ↓ {item.tempLow}°C
                    </Text>
                    <Text className="text-red-500 text-sm font-semibold">
                      ↑ {item.tempHigh}°C
                    </Text>
                  </View>
                  <Text className="text-zinc-500 dark:text-neutral-300 text-center text-sm mt-2">
                    باد: {(item.windSpeed / 3.6).toFixed(1)} m/s
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </Swiper>
      </View>

      {/* باکس خلاصه روزانه */}
      <View className="mt-6 mx-6 bg-white dark:bg-zinc-800 border border-neutral-300 dark:border-zinc-700 rounded-3xl p-4 shadow-lg flex-row items-center justify-between">
        <View>
          <Text className="text-zinc-800 dark:text-white text-lg font-bold mb-1">
            {dailySummary.location}
          </Text>
          <Text className="text-blue-500 text-sm font-semibold">
            کمینه: {dailySummary.tempLow}°C
          </Text>
          <Text className="text-red-500 text-sm font-semibold mt-1">
            بیشینه: {dailySummary.tempHigh}°C
          </Text>
        </View>
        <View>{getIcon(dailySummary.icon)}</View>
      </View>
    </View>
  );
};

export default HourlySwiper;
