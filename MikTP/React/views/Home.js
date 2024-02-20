import React, {useRef, useEffect, useState} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';

import Svg, { Path } from 'react-native-svg';

const colors = ['#41A8C9', '#E94B3C', '#6F9FD8', '#FFC107', '#009688'];

const categories = ['animal', 'career', 'celebrity', 'dev', 'explicit', 'fashion', 'food', 'history', 'money', 'movie', 'music', 'political', 'religion', 'science', 'sport', 'travel'];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

export function Home () {
    const [joke, setJoke] = useState('');
    const [showScanner, setShowScanner] = useState(false);

    const fetchJoke = async (category) => {
        const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setJoke(data.value);
        } catch (error) {
            console.error("Failed to fetch joke:", error);
            setJoke('Failed to fetch joke, please try again.');
        }
    };

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const Scan = () => {
        return (
          <Camera style={styles.camera} type={type} onBarCodeScanned={handleBarCodeScanned}>
            <View style={styles.buttonContainer}>
              <Button
                title="Flip Camera"
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              />
            </View>
          </Camera>
        );
      };      

    return (
        <View style={{alignItems: 'left', justifyContent: 'top', width: '100%', height: '100%'}}>
            <TouchableOpacity>
                <Svg top={70} left={350} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M17.1054 5.83332L22.8918 5.83332L23.6542 8.49327C24.211 10.4356 26.2065 11.5876 28.167 11.0984L30.87 10.4239L33.7562 15.4067L31.8329 17.3881C30.4207 18.843 30.4207 21.157 31.8329 22.6119L33.7562 24.5933L30.8701 29.5761L28.167 28.9016C26.2065 28.4124 24.211 29.5644 23.6542 31.5067L22.8918 34.1667L17.1054 34.1667L16.3429 31.5068C15.7862 29.5644 13.7906 28.4124 11.8302 28.9016L9.12711 29.5761L6.24099 24.5933L8.16424 22.6119C9.57646 21.157 9.57646 18.843 8.16424 17.3881L6.24098 15.4067L9.1271 10.4239L11.8302 11.0984C13.7906 11.5876 15.7862 10.4356 16.3429 8.49326L17.1054 5.83332ZM27.5617 8.67281C26.9082 8.83587 26.243 8.45187 26.0574 7.80442L24.9489 3.93704C24.8465 3.57963 24.5196 3.33332 24.1478 3.33332L15.8493 3.33332C15.4775 3.33332 15.1507 3.57963 15.0482 3.93704L13.9397 7.8044C13.7541 8.45185 13.0889 8.83585 12.4354 8.67279L8.51534 7.69458C8.15499 7.60466 7.77863 7.76407 7.59248 8.08545L3.44559 15.245C3.25864 15.5677 3.30894 15.9754 3.56873 16.2431L6.37036 19.1294C6.8411 19.6144 6.8411 20.3857 6.37036 20.8706L3.56874 23.757C3.30895 24.0246 3.25865 24.4323 3.4456 24.755L7.59248 31.9146C7.77863 32.2359 8.155 32.3953 8.51535 32.3054L12.4355 31.3272C13.0889 31.1642 13.7541 31.5482 13.9397 32.1956L15.0482 36.0629C15.1507 36.4203 15.4775 36.6667 15.8493 36.6667L24.1478 36.6667C24.5196 36.6667 24.8465 36.4204 24.9489 36.0629L26.0574 32.1956C26.243 31.5481 26.9082 31.1641 27.5617 31.3272L31.4818 32.3054C31.8422 32.3953 32.2185 32.2359 32.4047 31.9145L36.5516 24.755C36.7385 24.4322 36.6882 24.0246 36.4284 23.7569L33.6268 20.8706C33.1561 20.3856 33.1561 19.6143 33.6268 19.1294L36.4284 16.2431C36.6882 15.9754 36.7385 15.5678 36.5516 15.245L32.4047 8.08547C32.2185 7.76409 31.8421 7.60469 31.4818 7.69461L27.5617 8.67281ZM20 15.8333C22.3012 15.8333 24.1667 17.6988 24.1667 20C24.1667 22.3012 22.3012 24.1667 20 24.1667C17.6988 24.1667 15.8333 22.3012 15.8333 20C15.8333 17.6988 17.6988 15.8333 20 15.8333ZM20 13.3333C23.6819 13.3333 26.6667 16.3181 26.6667 20C26.6667 23.6819 23.6819 26.6667 20 26.6667C16.3181 26.6667 13.3333 23.6819 13.3333 20C13.3333 16.3181 16.3181 13.3333 20 13.3333Z" fill="#0E1117"/>
                </Svg>
            </TouchableOpacity>
            <Text style={{ fontSize: 27, fontWeight: 600, top: 100, left: 20}}>
                Browse Categories
            </Text>
            <View>
                <ScrollView top={140} left={20} horizontal={true} showsHorizontalScrollIndicator={false}> 
                    {categories.map((category, index) => (
                        <TouchableOpacity 
                            key={index} 
                            onPress={() => fetchJoke(category)} 
                            style={[styles.box, { backgroundColor: getRandomColor() }]}
                        >
                            <Text style={styles.textes}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <Text style={{ fontSize: 25, fontWeight: 600, top: 180, left: 13}}> The Dayz Joke </Text>
            <View style={{ top: 220, alignSelf: 'center', borderRadius: 20, width: 400, paddingHorizontal: 20, paddingVertical: 20, backgroundColor: '#88C8DD'}}>
                <Text style={styles.jokeText}>{joke || 'Select a category to see a joke.'}</Text>
            </View>
            <TouchableOpacity 
                style={styles.floatingButton} 
                onPress={() => setShowScanner(!showScanner)}
                >
                <Svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M16.6667 6.25H12.5C9.04824 6.25 6.25002 9.04822 6.25002 12.5V16.6666H9.37502V12.5C9.37502 10.7741 10.7741 9.375 12.5 9.375H16.6667V6.25ZM33.3334 9.375V6.25H37.5C40.9518 6.25 43.75 9.04822 43.75 12.5V16.6666H40.625V12.5C40.625 10.7741 39.2259 9.375 37.5 9.375H33.3334ZM33.3334 43.75V40.625H37.5C39.2259 40.625 40.625 39.2259 40.625 37.5V33.3333H43.75V37.5C43.75 40.9518 40.9518 43.75 37.5 43.75H33.3334ZM9.37502 33.3333V37.5C9.37502 39.2259 10.7741 40.625 12.5 40.625H16.6667V43.75H12.5C9.04824 43.75 6.25002 40.9518 6.25002 37.5V33.3333H9.37502ZM45.8334 28.113H4.16669V24.988H14.5834V18.75C14.5834 16.4488 16.4488 14.5833 18.75 14.5833H31.25C33.5512 14.5833 35.4167 16.4488 35.4167 18.75V24.988H45.8334V28.113ZM32.2917 24.988H17.7084V18.75C17.7084 18.1747 18.1747 17.7083 18.75 17.7083H31.25C31.8253 17.7083 32.2917 18.1747 32.2917 18.75V24.988ZM14.5834 31.25H17.7084C17.7084 31.8253 18.1747 32.2917 18.75 32.2917H31.25C31.8253 32.2917 32.2917 31.8253 32.2917 31.25H35.4167C35.4167 33.5512 33.5512 35.4167 31.25 35.4167H18.75C16.4488 35.4167 14.5834 33.5512 14.5834 31.25Z" fill="black"/>
                </Svg>
            </TouchableOpacity>
            {showScanner && <Scan />}
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        marginRight: 20,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#41A8C9',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },

    textes: {
        fontSize: 20,
        fontWeight: '500',
    },

    jokeText: {
        fontSize: 18,
        fontWeight: '400',
    },
    floatingButton: {
        position: 'absolute',
        width: 75, // Adjust size as needed
        height: 75, // Adjust size as needed
        alignItems: 'center',
        justifyContent: 'center',
        right: 30, // Distance from the right
        bottom: 50, // Distance from the bottom
        backgroundColor: '#88C8DD', // Button color
        borderRadius: 28, // Adjust to make the button round
        elevation: 8, // Shadow for Android (optional)
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      camera: {
        flex: 1,
        width: '100%',
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
      },
});