import { View, Text, StyleSheet,  ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, formStyles, inputOptions, inputStyling } from "../styles/styles";
import { Avatar, Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer'
import { defaultImg } from '../styles/styles';
import Header from '../components/Header';

const UpdateProfile = ({ navigation }) => {


  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [pinCode, setPinCode] = useState("")


  const disableBtn = 
  !name || !email ||  !address || !city || !country || !pinCode





  const submitHandler = () => {
    // alert("Yaah")

    // will remove this feature
    
  }


  const loading = false


  return (

    
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>

        <Header back={true} />


        {/* Heading  */}

        <View style={{ marginTop: 30, paddingTop:70 }}>
          <Text style={formHeading}>Edit Profile</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{
          padding:20,
          elevation:10,
          borderRadius:10,
          backgroundColor:colors.color3,
          marginTop:10
        }}>

          <View style={{ minHeight: 900 }}>

            


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
              Update
            </Button>

            

           


          </View>




        </ScrollView>





      </View>

    

 



  )
}

export default UpdateProfile