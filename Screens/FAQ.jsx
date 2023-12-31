import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import roof from "../assets/AboutPageImages/roof.jpg";
import Footer from "../Components/Footer";
import Accordion from "../Components/Accordion";
import SidePointNavigation from "../Components/SidePointNavigation";
import Header from "../Screens/Header";

export default function FAQ() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header button={true} />
      {/* <SidePointNavigation /> */}
      <ScrollView>
        <View>
          <Text style={styles.textAboveImage}>Ultimates ROOFING & SIDING</Text>
          <Text style={styles.textAboveImage2}>FAQ's</Text>
          <Image source={roof} style={styles.roof} />
        </View>
        <View>
          <Accordion />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  roof: {
    height: 200,
    backgroundColor: "rgba(30, 30, 42, 0.57)",
  },
  textAboveImage: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 50,
    marginLeft: 25,
  },
  textAboveImage2: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 75,
    marginLeft: 175,
  },
});
