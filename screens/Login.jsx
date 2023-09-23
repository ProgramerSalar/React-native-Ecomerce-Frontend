import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputStyling } from "../styles/styles";
import { Button, TextInput } from 'react-native-paper';
import Footer  from '../components/Footer'


const Login = ({ navigation }) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const inputOptions = {
        styles: inputStyling,
        mode: 'outlined',
        activeOutlineColor: colors.color1

    }


    const submitHandler = () => {
        alert("Yaah")
    }


    const loading = false


    return (

        <>
            <View style={{...defaultStyle, backgroundColor:colors.color2}}>


                {/* Heading  */}

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.heading}>Login</Text>
                </View>

                <View style={styles.container}>


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
                        onPress={() => navigation.navigate('forgotpassword')} >

                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <Button
                        textColor={colors.color2}
                        disabled={email === "" || password === ""}
                        onPress={submitHandler}
                        style={styles.btn}
                        loading={loading}
                    >
                        Log In
                    </Button>

                    <Text style={styles.or}>OR</Text>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('signup')}
                    >
                        <Text style={styles.link}>Singn Up</Text>
                    </TouchableOpacity>


                </View>



            </View>

            <Footer activeRoute='profile' />

        </>



    )
}


const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: "500",
        textAlign: 'center',
        backgroundColor: colors.color3,
        color: colors.color2,
        padding: 5,
        borderRadius: 5,

    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.color3,
        borderRadius: 10,
        justifyContent: 'center',
        elevation: 10,
        marginTop: 10
    },
    forgot: {
        color: colors.color2,
        marginHorizontal: 20,
        marginVertical: 10,
        alignSelf: 'flex-end',
        fontWeight: '100'
    },
    btn: {
        backgroundColor: colors.color1,
        margin: 20,
        padding: 6,
    },
    or: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: '100',
        color: colors.color2
    },
    link: {
        alignSelf: 'center',
        color: colors.color2,
        fontSize: 18,
        textTransform: 'uppercase',
        marginVertical: 10,
        marginHorizontal: 20,
    }
})

export default Login