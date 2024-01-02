//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Properties } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
// create a component
const HomeImageScrolling = () => {
    const images = [
        require("../assets/homeScreenImages/homeImageScrolling/image1.jpg"),
        require("../assets/homeScreenImages/homeImageScrolling/image2.jpg"),
        require("../assets/homeScreenImages/homeImageScrolling/image3.jpg"),

    ];
    return (
        <>

            <View style={styles.container}>
                <SliderBox
                    images={images}
                    sliderBoxHeight={"100%"}
                    SliderBoxWidth={"100%"}
                    dotColor="#202020"
                    inactiveDotColor="#b3b3b3"
                    paginationBoxStyle={{ position: 'absolute', bottom: 9 }}
                    paginationBoxVerticalPadding={10}
                    autoplayInterval={5000}
                    ImageComponentStyle={{ width: '100%', height: 360 }}
                    circleLoop
                />
            </View>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

    },
});

//make this component available to the app
export default HomeImageScrolling;
