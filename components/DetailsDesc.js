import { View, Text } from "react-native";
import React from "react";

import { VideoTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";
import { Video } from "expo-av";
const DetailsDesc = ({ data }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <VideoTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.large,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          OPIS
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.regular,
              color: COLORS.orange,
              lineHeight: SIZES.large,
              textAlign: "justify",
            }}
          >
            {data.description}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Video
            ref={video}
            style={{ flex: 1, alignSelf: "stretch", width: "100%",
              height: 450 }}
            source={data.video}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
