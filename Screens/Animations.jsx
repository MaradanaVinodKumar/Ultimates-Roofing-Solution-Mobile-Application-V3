//import liraries
import React from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

// create a component
function Animations() {
    const position = new Animated.ValueXY({ x: 0, y: 0 });

    // Animated.timing(position, {
    //     toValue: { x: 100, y: 300 },
    //     duration: 1000,
    //     useNativeDriver: true,
    // }).start();

    const pan = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: position.x, dy: position.y }], { useNativeDriver: false }),
        onPanResponderRelease: () => {
            position.setValue({ x: 0, y: 0 })

        },

    })

    const rotate = position.x.interpolate({
        inputRange: [0, 4],
        outputRange: ['0deg', '45deg']
    })
    return (
        <View style={styles.container}>
            <Animated.View
                {...pan.panHandlers}
                style={{
                    height: 100,
                    width: 100,
                    transform: [
                        { translateX: position.x },
                        { translateY: position.y },
                        { rotate: rotate }
                    ],
                    position: 'absolute',
                    borderRadius: 50,
                }}
            >
                <Text>vinod</Text>
            </Animated.View>
            <View style={{
                height: 100,
                width: 100,
                backgroundColor: '#000000',
                zIndex: -1
            }}>

            </View>
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Animations;

