//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Hauora from '../assets/fonts/fonts/ttf/Hauora-Regular.ttf';
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
// create a component
const BackNavigation = (props) => {
    const navigation = useNavigation();
    let [fontsLoaded] = useFonts({

        'Hauora': Hauora,
    });
    return (
        <View style={styles.NavigationBackground}>
            <View style={styles.TitleBackground}>
                <Text style={{ fontSize: 24, fontWeight: '400', }}>{props.title}</Text>
            </View>
            <View style={styles.ButtonBackground}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Icon name="arrow-back-outline" size={15} style={{ color: "#000000", margin: 0 }} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 15, }}> Back</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    NavigationBackground: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingHorizontal: '5%',
        paddingTop: '5%',
        paddingBottom: '2%'
    },
    TitleBackground: {

    },
    ButtonBackground: {
        alignContent: 'center',
        alignItems: 'center'
    },

});

//make this component available to the app
export default BackNavigation;
