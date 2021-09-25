import React from "react";
import { ImageBackground, View, Text } from "react-native";
import styleFirst from "./stylefirst";
const cardimage = {
  uri: "https://images.unsplash.com/photo-1537154835319-14f43d91ea98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
};

const First = () => {
  return (
    <View style={styleFirst.FirstContainer}>
      {/* ROW COMPONENT */}
      <View style={styleFirst.boxCardRow}>
        <View style={styleFirst.boxInnerCards}>
          <ImageBackground
            source={cardimage}
            resizeMode="cover"
            style={styleFirst.Cardimage}
          >
            <Text style={styleFirst.imageCardtext}>UTTAR</Text>
          </ImageBackground>
        </View>

        <View style={styleFirst.boxInnerCards}>
          <ImageBackground
            source={cardimage}
            resizeMode="cover"
            style={styleFirst.Cardimage}
          >
            <Text style={styleFirst.imageCardtext}>RESULT</Text>
          </ImageBackground>
        </View>
      </View>

      {/* ROW COMPONENT */}
      <View style={styleFirst.boxCardRow}>
        <View style={styleFirst.boxInnerCards}>
          <ImageBackground
            source={cardimage}
            resizeMode="cover"
            style={styleFirst.Cardimage}
          >
            <Text style={styleFirst.imageCardtext}>LADGER</Text>
          </ImageBackground>
        </View>

        <View style={styleFirst.boxInnerCards}>
          <ImageBackground
            source={cardimage}
            resizeMode="cover"
            style={styleFirst.Cardimage}
          >
            <Text style={styleFirst.imageCardtext}>JANTRI</Text>
          </ImageBackground>
        </View>
      </View>

      {/* ROW COMPONENT */}
      <View style={styleFirst.boxCardRow}>
        <View style={styleFirst.boxInnerCards}>
          <ImageBackground
            source={cardimage}
            resizeMode="cover"
            style={styleFirst.Cardimage}
          >
            <Text style={styleFirst.imageCardtext}>ADD GAME</Text>
          </ImageBackground>
        </View>

        <View style={styleFirst.boxInnerCards}>
          <ImageBackground
            source={cardimage}
            resizeMode="cover"
            style={styleFirst.Cardimage}
          >
            <Text style={styleFirst.imageCardtext}>MY GAMES</Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default First;
