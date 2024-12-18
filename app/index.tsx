import { Image, StyleSheet, Platform, SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState, useRef} from "react";

import Geolocation from '@react-native-community/geolocation';

import styles from "./HomeStyles";


export default function HomeScreen() {

  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const mapRef = useRef(null);
  const markers = [
    { id: 0, latitude: 52.40177464290168, longitude: 9.77636921619658 },
  ];
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        region={{
          latitude: 52.40110465652344,
          longitude: 9.77720360356611,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        userInterfaceStyle="light"
        showsUserLocation={true}
        userLocationPriority="high"
        // followsUserLocation={true}
        showsMyLocationButton={true}
        showsBuildings={false}
        pitchEnabled={false}
        // userLocationCalloutEnabled={true}
        // cacheEnabled={true}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude + 0.000022, 
              longitude: marker.longitude - 0.000012
            }}
            pinColor="white"
            onSelect={(e) => console.log('yo')}
            
          >
            <Image
              source={require("../assets/images/stadtflitzer-pin-shadow-light.png")}
              style={styles.markerImage}
            />
          </Marker>
        ))}

          <View style={styles.upper}>
            <TouchableOpacity style={{...styles.iconButton}}>
              <Ionicons name="menu" size={30} color="black" />
            </TouchableOpacity>

            <View style={{alignSelf: "flex-end", flex: 1, width: '100%', justifyContent: 'flex-end'}}>
              <TouchableOpacity style={{...styles.iconButton, alignSelf: "flex-end", marginBottom: 0}} onPress={() => {
                // Geolocation.getCurrentPosition(info => mapRef.current.animateToRegion({latitude: info.coords.latitude,
                //   longitude: info.coords.longitude,
                //   latitudeDelta: 0.01,
                //   longitudeDelta: 0.01,}))
              }

              }>
              <MaterialIcons name="my-location" size={30} color="black" />
              </TouchableOpacity>
            </View>


          </View>

          <View style={styles.lower}>


            <TouchableOpacity style={styles.smallButton}>
              <Text style={styles.buttonLabel}>Gruppenfahrt</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.smallButton, backgroundColor: 'orange'}}>
              <Text style={{...styles.buttonLabel, color: 'white'}}>Scannen</Text>
            </TouchableOpacity>

          </View>

      </MapView>
    </View>
  );
}
