import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";
const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.orange,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 100, height: 80 }}
        />
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
          }}
        >
          Educirajmo se i očuvajmo naš planet!
        </Text>
        <Text
          style={{
            fontFamily: FONTS.light,
            fontSize: SIZES.medium,
            color: COLORS.primary,
            textAlign: "justify",
            marginTop: SIZES.base,
          }}
        >
          Mi smo učenici Gimnazije Mostar koji znamo koliko su štetni požari za
          nas i za naš okoliš. Upoznajte naš tim: Benjamin Sarić, Nejla Kaminić,
          Merima Žuškić , Nejla Nezirović, Lana Hadžijabulić i Azra Kosović. Naš
          rad će vam pomoći kako da spriječite požare i kako se najbolje zaštiti
          od njih.
        </Text>
        <View
          stlye={{
            width: "100%",
            borderRadius: SIZES.font,

            flexDirection: "row",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.large,
              color: COLORS.white,
            }}
          >
            HITNI BROJEVI:
          </Text>
          <View>
            <Image
              source={assets.firefighters}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                marginRight: SIZES.base,
              }}
            />
            <Text stlye={{ flex: 1 }}>Vatrogasci 123</Text>
          </View>
          <View>
            <Image
              source={assets.hospital}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                marginRight: SIZES.base,
                flex: 1,
              }}
            />
            <Text>Hitna pomoć 124</Text>
          </View>
          <View>
            <Image
              source={assets.police}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                marginRight: SIZES.base,
                flex: 1,
              }}
            />
            <Text>Policija 122</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: SIZES.base }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.semiOrange,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search:"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
