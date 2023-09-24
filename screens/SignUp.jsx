import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, defaultStyle, formHeading, formStyles, inputOptions, inputStyling } from "../styles/styles";
import { Avatar, Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer'
import { defaultImg } from '../styles/styles';

const SignUp = ({ navigation, route }) => {


  const [avatar, setAvatar] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [pinCode, setPinCode] = useState("")


  const disableBtn =
    !name || !email || !password || !address || !city || !country || !pinCode





  const submitHandler = () => {
    // alert("Yaah")

    // will remove this feature
    navigation.navigate("verify")
  }


  const loading = false


  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image)

      // dispatch update image 


    }


  }, [route.params])   // only one 


  return (

    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>


        {/* Heading  */}

        <View style={{ marginTop: 30 }}>
          <Text style={formHeading}>Sign Up</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{
          padding: 20,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: colors.color3,
          marginTop: 10
        }}>

          <View style={{ minHeight: 900 }}>

            <Avatar.Image style={{
              alignSelf: 'center',
              backgroundColor: colors.color1
            }}
              size={80}
              source={{
                uri: avatar ? avatar : defaultImg,

              }} />
            <TouchableOpacity onPress={() => navigation.navigate('CameraComponent')}>
              <Button textColor={colors.color1}>Change Photo</Button>
            </TouchableOpacity>


            <TextInput {...inputOptions}
              placeholder='Enter Name'
              value={name}
              onChangeText={setName}

            />
            <TextInput {...inputOptions}
              placeholder='Enter Email'
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
            />
            <TextInput {...inputOptions}
              placeholder='Enter Password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <TextInput {...inputOptions}
              placeholder='Enter Address'
              value={address}
              onChangeText={setAddress}

            />
            <TextInput {...inputOptions}
              placeholder='City'
              value={city}
              onChangeText={setCity}

            />
            <TextInput {...inputOptions}
              placeholder='Country'
              value={country}
              onChangeText={setCountry}

            />
            <TextInput {...inputOptions}
              placeholder='PinCode'
              value={pinCode}
              onChangeText={setPinCode}

            />







            <Button
              textColor={colors.color2}
              disabled={disableBtn}
              onPress={submitHandler}
              style={formStyles.btn}
              loading={loading}
            >
              Sign Up
            </Button>

            <Text style={formStyles.or}>OR</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('login')}
            >
              <Text style={formStyles.link}>Log In</Text>
            </TouchableOpacity>


          </View>




        </ScrollView>





      </View>

      <Footer activeRoute='profile' />

    </>



  )
}





export default SignUp