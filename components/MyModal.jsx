import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles';
import { Avatar, Button } from 'react-native-paper';

const MyModal = ({
    id,
    deleteHandler,
    navigate,
    setOpenModal,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{
                position: "absolute",
                top: 10,
                right: 10,
            }}
                onPress={() => setOpenModal(false)}>
                <Avatar.Icon
                    icon={"close"}
                    size={25}
                    style={{
                        backgroundColor: colors.color1,
                        
                        marginLeft:150
                    }}
                />

                <Text
                    style={{...styles.text, marginBottom:20}}
                    onPress={() => navigate.navigate("updateproduct", { id })}
                >
                    Edit
                </Text>

                <Button style={{marginBottom:20}} textColor={colors.color3} onPress={() => deleteHandler(id)}>
        Delete
      </Button>



            </TouchableOpacity>
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 100,
        alignSelf: "center",
        justifyContent: "center",
        zIndex: 100,
        backgroundColor: colors.color2,
        padding: 20,
        borderRadius: 10,
    },

    text: {
        fontWeight: "900",
        textAlign: "center",
        textTransform: "uppercase",
    },
});


export default MyModal