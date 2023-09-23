import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, formStyles, inputOptions, inputStyling } from "../styles/styles";
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer'


const Login = ({ navigation }) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    const submitHandler = () => {
        alert("Yaah")


    }


    const loading = false


    return (

        <>
            <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>


                {/* Heading  */}

                <View style={{ marginTop: 30 }}>
                    <Text style={formHeading}>Login</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} >

                        <View style={{...formStyles.container, minHeight: 500}}>


                            <TextInput {...inputOptions}
                                placeholder='Email'
                                value={email}
                                onChangeText={setEmail}
                                keyboardType='email-address'
                            />


                            <TextInput {...inputOptions}
                                placeholder='Password'
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={true}

                            />

                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('forgetpassword')} >

                                <Text style={formStyles.forgot}>Forgot Password?</Text>
                            </TouchableOpacity>

                            <Button
                                textColor={colors.color2}
                                disabled={email === "" || password === ""}
                                onPress={submitHandler}
                                style={formStyles.btn}
                                loading={loading}
                            >
                                Log In
                            </Button>

                            <Text style={formStyles.or}>OR</Text>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('signup')}
                            >
                                <Text style={formStyles.link}>Singn Up</Text>
                            </TouchableOpacity>


                        </View>


                </ScrollView>





        </View >

            <Footer activeRoute='profile' />

        </>



    )
}


export default Login