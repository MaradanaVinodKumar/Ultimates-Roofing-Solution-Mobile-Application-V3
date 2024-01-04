import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from "react-native";

import { Video } from "expo-av";

import Header from "../Screens/Header";
import ourService1 from "../assets/ServicePageImages/our-service1.jpg";
import ourService2 from "../assets/ServicePageImages/our-service2.jpg";
import ourService3 from "../assets/ServicePageImages/our-service3.jpg";
import ourService4 from "../assets/ServicePageImages/our-service4.jpg";
import ourService5 from "../assets/ServicePageImages/our-service5.jpg";
import Welcome from "../Components/Welcome";
import PromiseText from "../Components/PromiseText";
import { useNavigation } from "@react-navigation/native";
import Cards1 from "../Components/Cards1";
import Cards2 from "../Components/Cards2";
import MyCarousel from "../Components/MyCarousel";
import Footer from "../Components/Footer";
import Agreements from "../Components/Agreements";
import Icon from "@expo/vector-icons/Ionicons";
import SidePointNavigation from "../Components/SidePointNavigation";
import TextCarousal from "../Components/TextCarousal";
import _3D_Video from "../assets/final_video.mp4"
import _3D_Video_28mb from "../assets/final_video(28mb).mp4"
import HomeImageScrolling from "../Components/HomeImagesScrolling";
import smBoxImg1 from "../assets/homeScreenImages/Trusted100.png";
import smBoxImg2 from "../assets/homeScreenImages/Experience15Years.png";
import smBoxImg3 from "../assets/homeScreenImages/CustemerSupport.png";
// import TextCarousal from "../Components/TextCarousal";
import { useFonts } from "expo-font"//npx expo install expo-font
import paganini from '../assets/fonts/RubikDoodleShadow-Regular.ttf';
import Hauora from '../assets/fonts/fonts/ttf/Hauora-Medium.ttf';
import ButtonCarousel from "../Components/ButtonCarousel";
import Reviews from "../Components/Reviews";
import Trust from "../Components/Trust";
// import AppLoading from 'expo-app-loading'
// import { Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    'paganini': paganini,
    'Hauora': Hauora,
  });
  // if (!fontFamils) {
  //   return <AppLoading />
  // }
  return (
    <>
      <Header button={true} />
      <ScrollView style={styles.ScrollbodyBackground}>
        {/*scrolling card*/}
        <View style={styles.scrollingImagesBackground}>
          {/*component for image scrolling */}
          <HomeImageScrolling />
          {/* Top heading*/}
          <View style={styles.hoverHeadingBackground}>
            <Text style={[styles.headerText, { fontFamily: "Hauora" }]}>
              Elevate Your Roofing {"\n"}Experience with{"\n"}Ultimates Roofing App
            </Text>
            <View style={styles.GYFEButtonBackground}>
              <TouchableOpacity style={styles.GYFEButton} onPress={() => { navigation.navigate('Contact') }} onpress={() => { navigation.navigate("") }}>
                <View>
                  <Text style={styles.GYFEButtonText}>Get Your Free Estimate</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: '5%', }}>
          {/*Top heading descriptionText*/}
          <View>
            <Text style={[styles.descriptionText, { fontFamily: "Hauora" }]} >
              At Ultimates Roofing LLC, we believe that every home and business deserves the highest quality roofing solutions. Established [Year], we have proudly served [Location] and surrounding areas, earning a reputation for excellence in the Roofing and Siding industry.
            </Text>
          </View>
          {/*three small boxes*/}
          <View style={styles.smBoxBackground}>
            <View style={styles.smBox}>
              <ImageBackground source={smBoxImg1} resizeMode="cover"  >
                <View style={styles.smBoxTextBAckground}>
                  <Text style={styles.smBoxText}>100%</Text>
                  <Text style={styles.smBoxText}>Trusted</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.smBox}>
              <ImageBackground source={smBoxImg2} resizeMode="cover"  >
                <View style={styles.smBoxTextBAckground}>
                  <Text style={styles.smBoxText}>15 Years </Text>
                  <Text style={styles.smBoxText}>Experience</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.smBox}>
              <ImageBackground source={smBoxImg3} resizeMode="cover"  >
                <View style={styles.smBoxTextBAckground}>
                  <Text style={styles.smBoxText}>Customer</Text>
                  <Text style={styles.smBoxText}>Support</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
          {/*Our Services*/}
          <View>
            {/*Our Services heading*/}
            <View>
              <Text style={[styles.headerText, { fontFamily: "Hauora", color: 'black', fontWeight: 600, fontSize: 20, marginTop: 16.5 }]}>
                Our Services
              </Text>
            </View>
            {/*Our Services descriptionText*/}
            <View>
              <Text style={[styles.descriptionText, { fontFamily: "Hauora" }]}>
                From Home and Commercial Roofing to Siding, Gutters, and Windows, our services redefine precision and style. Elevate your property with our commitment to unparalleled craftsmanship.
              </Text>
            </View>
          </View>
          {/*Our Services navigations*/}
          <View>
            <TouchableOpacity style={styles.services} onPress={() => { navigation.navigate("Residential") }}>
              <View style={{ width: "80%" }}>
                <Text style={[styles.descriptionText, { fontWeight: '400', fontSize: 16, marginTop: 0 }]}>Residential Roofing</Text>
              </View>
              <View style={{ width: "20%", alignItems: 'flex-end', paddingRight: 10 }}>
                <Icon name="arrow-forward" size={25} style={{ color: "#B22335", margin: 0 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.services} onPress={() => { navigation.navigate("Commercial") }}>
              <View style={{ width: "80%" }}>
                <Text style={[styles.descriptionText, { fontWeight: '400', fontSize: 16, marginTop: 0 }]}>Commercial Roofing</Text>
              </View>
              <View style={{ width: "20%", alignItems: 'flex-end', paddingRight: 10 }}>
                <Icon name="arrow-forward" size={25} style={{ color: "#B22335", margin: 0 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.services} onPress={() => { navigation.navigate("Siding") }}>
              <View style={{ width: "80%" }}>
                <Text style={[styles.descriptionText, { fontWeight: '400', fontSize: 16, marginTop: 0 }]}>Siding Enhancements</Text>
              </View>
              <View style={{ width: "20%", alignItems: 'flex-end', paddingRight: 10 }}>
                <Icon name="arrow-forward" size={25} style={{ color: "#B22335", margin: 0 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.services} onPress={() => { navigation.navigate("Gutters") }}>
              <View style={{ width: "80%" }}>
                <Text style={[styles.descriptionText, { fontWeight: '400', fontSize: 16, marginTop: 0 }]}>Gutter Systems</Text>
              </View>
              <View style={{ width: "20%", alignItems: 'flex-end', paddingRight: 10 }}>
                <Icon name="arrow-forward" size={25} style={{ color: "#B22335", margin: 0 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.services} onPress={() => { navigation.navigate("Windows") }}>
              <View style={{ width: "80%" }}>
                <Text style={[styles.descriptionText, { fontWeight: '400', fontSize: 16, marginTop: 0 }]}>Windows Services</Text>
              </View>
              <View style={{ width: "20%", alignItems: 'flex-end', paddingRight: 10 }}>
                <Icon name="arrow-forward" size={25} style={{ color: "#B22335", margin: 0 }} />
              </View>
            </TouchableOpacity>
          </View>

          {/*Button Scrolling Component */}
          <View style={{ marginTop: 10 }}>
            <ButtonCarousel />
          </View>
          <View>
            <View><Text style={[styles.headerText, { fontFamily: "Hauora", color: 'black', fontWeight: 600, fontSize: 20, marginTop: 16.5 }]}>Reviews</Text></View>
            <View><Text>Hear It From Our Clients</Text></View>
            <View><Text>Discover why homeowners love Ultimates Roofing! Read brief testimonials highlighting our excellence in processes, materials, and meticulous cleanups.</Text></View>
          </View>
        </View>
        <Reviews />
        <Trust />
      </ScrollView>
    </>

  );
}

const styles = StyleSheet.create({
  ScrollbodyBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'

  },
  hoverHeadingBackground: {
    position: 'absolute',
    width: "100%",
    height: '100%',
    paddingHorizontal: '5%',
    backgroundColor: '#00000033',
    justifyContent: 'center'

  },
  headerText: {

    fontSize: 25,
    fontWeight: '500',
    lineHeight: 30,
    letterSpacing: 0.4,
    color: '#ffffff',
    width: '100%'
  },
  GYFEButtonBackground: {

  },
  GYFEButton: {

    width: 185,
    paddingHorizontal: '3%',
    paddingVertical: '4%',
    backgroundColor: 'white'
  },
  GYFEButtonText: {
    color: '#B22335',
    fontSize: 15,
    fontWeight: '400',
    letterSpacing: 0.24,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 21,
    letterSpacing: 0.28,
    color: '#323539',
    width: '100%',
    marginTop: '5%'

  },
  scrollingImagesBackground: {
    width: '100%',
    height: 350,
    backgroundColor: '#b9b8b8',
  },
  smBoxBackground: {
    width: '100%',
    marginVertical: '9%',
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between'
  },
  smBox: {
    width: '30%',
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#000000',


  },
  smBoxText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.28,
    color: '#ffffff',

  },
  smBoxTextBAckground: {
    paddingVertical: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  services: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    marginTop: 10
  }
});
