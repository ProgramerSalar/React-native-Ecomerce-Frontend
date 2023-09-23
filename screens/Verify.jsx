import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, formStyles, inputOptions, inputStyling } from "../styles/styles";
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer'


const Verify = ({ navigation }) => {


    const [otp, setOtp] = useState("")
    const [password, setPassword] = useState("")





    const submitHandler = () => {
        // alert("Yaah")

        // will remove this feature
        navigation.navigate("login")
    }


    const loading = false


    return (

        <>
            <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>


                {/* Heading  */}

                <View style={{ marginTop: 30 }}>
                    <Text style={formHeading}>Reset Password</Text>
                </View>

                <View style={formStyles.container}>


                    <TextInput {...inputOptions}
                        placeholder='OTP'
                        value={otp}
                        onChangeText={setOtp}
                        keyboardType='number-pad'
                    />

                    <TextInput {...inputOptions}
                        placeholder='New Password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}

                    />






                    <Button
                        textColor={colors.color2}
                        disabled={otp === "" || password === ""}
                        onPress={submitHandler}
                        style={formStyles.btn}
                        loading={loading}
                    >
                        Reset 
                    </Button>

                    <Text style={formStyles.or}>OR</Text>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('forgetpassword')}
                    >
                        <Text style={formStyles.link}>Resend OTP</Text>
                    </TouchableOpacity>


                </View>



            </View>

            <Footer activeRoute='profile' />

        </>



    )
}




export default Verify