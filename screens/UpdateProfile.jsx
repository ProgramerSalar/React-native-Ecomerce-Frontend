import { View, Text, StyleSheet,  ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, formStyles, inputOptions, inputStyling } from "../styles/styles";
import { Avatar, Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer'
import { defaultImg } from '../styles/styles';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/actions/otherAction';
import { useMessageAndErrorOther } from '../utils/hooks';

const UpdateProfile = ({ navigation }) => {

  const { user } = useSelector((state) => state.user)
  
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [address, setAddress] = useState(user?.address)
  const [city, setCity] = useState(user?.city)
  const [country, setCountry] = useState(user?.country)
  const [pinCode, setPinCode] = useState(user?.pinCode.toString())


  // const disableBtn = 
  // !name || !email ||  !address || !city || !country || !pinCode


  const dispatch = useDispatch()
  





  const submitHandler = () => {
    dispatch(updateProfile(name, email, address, city, country, pinCode))
    
  }


  const loading = useMessageAndErrorOther(dispatch,navigation,"profile")


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