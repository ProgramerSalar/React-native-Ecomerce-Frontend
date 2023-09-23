import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";

const Profile = ({ navigation }) => {
  const [avatar, setAvatar] = useState(null);
  const user = {
    name: "Manish",
    email: "manishkumar@gmail.com",
  };

  return (
    <View style={defaultStyle}>
      {/* Heading */}
      <View style={{ marginTop: 20 }}>
        <Text style={formHeading}>Profile</Text>
      </View>

      {/* Loading  */}
      <View style={styles.container}>
        <Avatar.Image
          size={100}
          style={{ backgroundColor: colors.color1 }}
          source={{
            uri: avatar,
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("camera", { updateProfile: true })}
        >
          <Button textColor={colors.color1}>Chanage Photo</Button>
        </TouchableOpacity>

        <Text style={styles.name}>{user?.name}</Text>
        <Text
          style={{
            fontWeight: "300",
            color: colors.color2,
          }}
        >
          {user?.email}
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "space-between",
          }}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});

export default Profile;
