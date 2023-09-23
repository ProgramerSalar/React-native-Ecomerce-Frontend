import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, formStyles, inputOptions, inputStyling } from "../styles/styles";
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer'


const ForgetPassword = ({ navigation }) => {


    const [email, setEmail] = useState("")





    const submitHandler = () => {
        // alert("Yaah")

        // will remove this feature
        navigation.navigate("verify")
    }


    const loading = false


    return (

        <>
            <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>


                {/* Heading  */}

                <View style={{ marginTop: 30 }}>
                    <Text style={formHeading}>Forget Password</Text>
                </View>


              

                    <View style={{...formStyles.container}}>


                        <TextInput {...inputOptions}
                            placeholder='Email'
                            value={email}
                            onChangeText={setEmail}
                            keyboardType='email-address'
                        />






                        <Button
                            textColor={colors.color2}
                            disabled={email === ""}
                            onPress={submitHandler}
                            style={formStyles.btn}
                            loading={loading}
                        >
                            Send OTP
                        </Button>

                        <Text style={formStyles.or}>OR</Text>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('login')}
                        >
                            <Text style={formStyles.link}>Log In</Text>
                        </TouchableOpacity>


                    </View>


                





            </View>

            <Footer activeRoute='profile' />

        </>



    )
}



export default ForgetPassword