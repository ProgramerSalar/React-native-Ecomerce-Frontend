import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Camera, CameraType } from 'expo-camera'
import { Avatar } from "react-native-paper";
import { colors, defaultStyle } from "../styles/styles";
import * as ImagePicker from "expo-image-picker";


const CameraComponent = ({ navigation, route }) => {
    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(CameraType.back)
    const [camera, setCamera] = useState(null)

    // console.log(route.params)


    const openImagePicker = async () => {

        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();


        if (permissionResult.granted === false)
            return alert("Permission to access gallery is required");


        const data = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        // console.log(data)

        if (route.params?.newProduct)   // if newProduct condition is  right
            return navigation.navigate("newproduct", {     // then come to newproduct page
                image: data.assets[0].uri,  // with image 
            });


        if (route.params?.updateproduct)
            return navigation.navigate("productimages", {
                image: data.assets[0].uri,
            });
        if (route.params?.updateProfile)
            return navigation.navigate("profile", {
                image: data.assets[0].uri,
            });
        else
            return navigation.navigate("signup", {
                image: data.assets[0].uri,
            });



    }




    const clickPicture = async () => { }


    return (
        <View
            style={{
                flex: 1,

            }}
        >
            <Camera
                type={type}
                style={{
                    flex: 1,
                    aspectRatio: 1,
                }}
                ratio={"1:1"}
                ref={(e) => setCamera(e)}
            />

            <View style={{
                flexDirection: "row",
                bottom: 10,
                width: "100%",
                justifyContent: "space-evenly",
                position: "absolute",
            }}>

                <MyIcon icon="image" handler={openImagePicker} />
                <MyIcon icon="camera" handler={clickPicture} />
                <MyIcon icon="camera-flip" handler={(prevType) => {
                    prevType === CameraType.back ? CameraType.front : CameraType.back
                }} />


            </View>
        </View>


    )
}

const MyIcon = ({ icon, handler }) => (
    <TouchableOpacity onPress={handler}>
        <Avatar.Icon
            icon={icon}
            size={80}
            color={colors.color2}
            style={{
                backgroundColor: colors.color1,
            }}
        />
    </TouchableOpacity>
);



export default CameraComponent