import { StyleSheet, Image, SafeAreaView, Platform, View, TouchableNativeFeedback, Text } from "react-native";
import React from "react";
import logo from "../assets/UltimatesLogo.png";
import GifLogo from "../assets/UltimatesLogoGif2.gif"
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


export default function Header(props) {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.view}>

      <View style={{
        width: "60%",
        height: "100%",
        paddingLeft: 20,
        paddingTop: 9,

      }}>
        <Image
          style={{
            width: "60%",
            height: "90%",

          }}
          source={logo}
        />
      </View>

      {

        props.button ? (
          <View style={{
            width: "40%",
            height: "100%",
            alignItems: 'center',
          }}>
            <View style={{
              width: "90%",
              height: "100%",
              paddingLeft: '2%',
              paddingVertical: '5%',
              marginRight: '28%'
            }}>
              <TouchableNativeFeedback onPress={() => nav.navigate("AnimationPage")} >
                <View style={{ paddingVertical: 13, alignItems: 'center', backgroundColor: '#B22335', }}>
                  <Text style={{ fontSize: 13, fontWeight: 300, letterSpacing: 0.22, color: '#F9F9F9' }}>
                    Instant Roof Quote
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>) : (<View style={{
            // width: "40%",
            maxWidth: "40%",
            height: "100%",
            alignItems: 'center'
          }}></View>
        )
      }
      {/* <View style={{ justifyContent: 'center', width: '12.5%', paddingLeft: '3%', }}>
        <TouchableNativeFeedback onPress={() => { nav.openDrawer() }}>
          <View >
            <Icon name="md-menu" size={40} color="black" />
          </View>
        </TouchableNativeFeedback>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    height: 63,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: '#b1b1b1',
    marginVertical: Platform.OS === "ios" ? 15 : 0,
    flexDirection: 'row'
  },
});
