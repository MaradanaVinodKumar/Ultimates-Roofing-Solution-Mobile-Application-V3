import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import ViewSlider from "react-native-view-slider";
// import { SliderBox } from "react-native-image-slider-box";
// const { width, height } = Dimensions.get('window');
export default function TextCarousal() {

    const images = [
        require("../assets/CarouselImages/c1.jpeg"),
        require("../assets/CarouselImages/c2.jpeg"),
        require("../assets/CarouselImages/c3.jpeg"),
        require("../assets/CarouselImages/c4.jpeg"),
    ];

    return (
        // <View style={{ marginTop: "10%", width: "100%" }}>
        //     {/* <SliderBox
        //         images={images}
        //         sliderBoxHeight={200}
        //         SliderBoxWidth={"100%"}
        //         dotColor="crimson"
        //         inactiveDotColor="black"
        //         paginationBoxVerticalPadding={10}
        //         autoplayInterval={1500}
        //         circleLoop
        //     /> */}

        //     <ViewSlider
        //         renderSlides={
        //             <>
        //                 <View style={styles.viewBox}>
        //                     <Image source={{ uri: 'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg' }} style={{ height: 200, width }} />
        //                 </View>
        //                 <View style={styles.viewBox}><Text>TWO</Text></View>
        //                 <View style={styles.viewBox}><Text>THREE</Text></View>
        //                 <View style={styles.viewBox}><Text>FOUR</Text></View>
        //             </>
        //         }
        //         style={styles.slider}     //Main slider container style
        //         height={200}    //Height of your slider
        //         slideCount={4}    //How many views you are adding to slide
        //         dots={true}     // Pagination dots visibility true for visibile 
        //         dotActiveColor='red'     //Pagination dot active color
        //         dotInactiveColor='gray'    // Pagination do inactive color
        //         dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
        //         autoSlide={true}    //The views will slide automatically
        //         slideInterval={1000}    //In Miliseconds
        //     />

        // </View>
        <></>
    );
}
// const styles = StyleSheet.create({
//     viewBox: {
//         paddingHorizontal: 20,
//         justifyContent: 'center',
//         width: width,
//         padding: 10,
//         alignItems: 'center',
//         height: 150
//     },
//     slider: {
//         alignSelf: 'center',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'pink'
//     },
//     dotContainer: {
//         backgroundColor: 'transparent',
//         position: 'absolute',
//         bottom: 15
//     }
// });