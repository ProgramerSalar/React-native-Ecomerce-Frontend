import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, formStyles, inputOptions, inputStyling } from "../styles/styles";
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer'
import Header from '../components/Header';


const ChangePassword = ({ navigation }) => {



    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")




    const submitHandler = () => {
        alert("Yaah")


    }


    const loading = false


    return (


        <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>

            <Header back={true} />


            {/* Heading  */}

            <View style={{ marginTop: 30, paddingTop: 70 }}>
                <Text style={formHeading}>Change Password</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} >

                <View style={{ ...formStyles.container, minHeight: 500 }}>





                    <TextInput {...inputOptions}
                        placeholder='Old Password'
                        value={oldPassword}
                        onChangeText={setOldPassword}
                        secureTextEntry={true}

                    />


                    <TextInput {...inputOptions}
                        placeholder='New Password'
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry={true}

                    />


                    <Button
                        textColor={colors.color2}
                        disabled={oldPassword === "" || newPassword === ""}
                        onPress={submitHandler}
                        style={formStyles.btn}
                        loading={loading}
                    >
                        Change 
                    </Button>






                </View>


            </ScrollView>





        </View >







    )
}




export default ChangePassword