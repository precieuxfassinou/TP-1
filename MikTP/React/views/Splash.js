import React, {useRef, useEffect} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

export function Splash () {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
        navigation.navigate('Home'); // Navigate to Home after 3 seconds
        }, 4300);

        return () => clearTimeout(timer); // Clean up timer
    }, [navigation]);

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: '#88C8DD' }}>
                <Svg top={-100}  width="143" height="175" viewBox="0 0 143 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M74.2979 171.977C60.6191 172.69 55.9206 156.699 54.9014 149.69C53.1066 137.325 51.44 129.531 44.2288 122.655C34.7549 113.617 24.9284 100.158 26.4668 87.7704C29.1847 65.8758 43.9276 49.8238 69.9392 49.0113C118.232 47.5022 119.757 87.4056 114.777 98.6817C109.796 109.958 96.72 120.969 95.47 126.071C94.2201 131.173 92.2907 153.907 89.2908 160.574C87.2653 165.073 84.5731 171.446 74.2979 171.982V171.977Z" fill="#FFE600" stroke="#161616" stroke-width="5.19429" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M73.4839 153.25C66.1252 119.504 41.4021 90.7884 55.3309 84.0171C69.2597 77.2459 74.83 158.49 74.83 158.49C74.83 158.49 66.7278 79.8659 81.9194 79.8659C97.111 79.8659 71.4904 159.147 71.4904 159.147" stroke="#161616" stroke-width="5.19429" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M93.233 141.338C92.1817 148.91 90.8869 157.014 89.2908 160.562C87.2653 165.062 84.5731 171.435 74.2979 171.971C60.6191 172.684 55.9206 156.693 54.9014 149.684C54.5232 147.081 54.1514 144.676 53.7348 142.443C53.7348 142.443 65.8817 146.55 74.6313 146.252C83.3809 145.953 93.233 141.332 93.233 141.332V141.338Z" fill="#4966FF" stroke="#161616" stroke-width="5.19429" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M15.2494 66.6883L3 43.3953L33.1332 47.9997L38.3893 13.7511L61.7921 35.8834L79.1374 3L87.9768 37.2487L121.206 16.7415L119.084 51.2554L140 58.292L128.545 66.8984" stroke="#161616" stroke-width="5.19429" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M55.895 154.383C60.4332 157.71 81.4707 160.828 90.8036 154.383" stroke="#161616" stroke-width="5.19429" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
                <Text top={-50} style={{ justifyContent: 'center', fontSize: 24, fontWeight: 500 }}> Chuck Norris jokes to make </Text>
                <Text top={-50} style={{ justifyContent: 'center', fontSize: 24, fontWeight: 500 }}> your journey </Text>
                <ActivityIndicator top={200} size="400" color="#063342" />
            </View>
        </SafeAreaView>
    );
}


