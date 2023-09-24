import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { colors, formHeading, defaultStyle, inputOptions } from '../../styles/styles'
import CategoryCard from '../../components/CategoryCard'
import { Button, TextInput } from 'react-native-paper'


const categories = [
    {
    name:"laptop",
    _id:"1",
},
    {
    name:"laptop",
    _id:"2",
},
    {
    name:"laptop",
    _id:"3",
},
    {
    name:"laptop",
    _id:"4",
},
    {
    name:"laptop",
    _id:"5",
},
    {
    name:"laptop",
    _id:"6",
},
    {
    name:"laptop",
    _id:"36",
},
    {
    name:"laptop",
    _id:"46",
},
    {
    name:"laptop",
    _id:"16",
},
    {
    name:"laptop",
    _id:"26",
},
    {
    name:"laptop",
    _id:"36",
},
    {
    name:"laptop",
    _id:"46",
},

]


const Categories = () => {

    const [category, setCategory] = useState("")
    const loading = false

    const deleteHandler = (id) => {
        console.log(`Deleting Category, ${id}`)
    }

    const submitHandler = () => {}


    return (
        <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>

            <Header back={true} />

            {/* Heading  */}
            <View style={{ marginTop: 100, marginLeft:10, marginRight:10 }}>
                <Text style={formHeading}>Admin Panel</Text>
            </View>


            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                marginBottom:20
            }}>
                <View style={{
                    backgroundColor:colors.color2,
                    padding:20,
                    minHeight:400
                }}>

                    {
                        categories.map((i) => (
                            <CategoryCard 
                            name={i.name}
                            id={i._id}
                            key={i._id}
                            deleteHandler = {deleteHandler}
                            />
                        ))
                    }

                </View>


            </ScrollView>

            <View style={styles.container}>

            <TextInput
          {...inputOptions}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
        />

        <Button
          textColor={colors.color2}
          style={{
            backgroundColor: colors.color1,
            margin: 20,
            padding: 6,
          }}
          loading={loading}
          disabled={!category}
          onPress={submitHandler}
        >
          Add
        </Button>




            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      elevation: 10,
      borderRadius: 10,
      backgroundColor: colors.color3,
    }
  });

export default Categories