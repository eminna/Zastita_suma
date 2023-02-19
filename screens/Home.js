import { useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";

import { COLORS, FireData } from "../constants";
import { HomeHeader, FireCard, FocusedStatusBar } from "../components";
const Home = () => {
  const [fireData, setfireData] = useState(FireData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setfireData(FireData);
    }

    const filteredData = FireData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setfireData(FireData);
    } else {
      setfireData(filteredData);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={fireData}
            renderItem={({ item }) => <FireCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.lightOrange }} />
          <View style={{ flex: 1, backgroundColor: COLORS.lightOrange }} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
