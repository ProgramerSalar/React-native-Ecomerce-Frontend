import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import SearchModal from '../components/SearchModal'

const categories = [
  { category: "footbal", _id: "1" },
  { category: "ball", _id: "2" },
  { category: "baT", _id: "3" },
  { category: "copy", _id: "4" },
  { category: "book", _id: "5" },
  { category: "bag", _id: "6" },
  { category: "mobile", _id: "7" },
]


const products = [{
  price:435,
  name:"manish",
  _id:"1",
  images:[
    {
      url:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",

    }
  ]

}]

export const Home = () => {






  const [category, setCategory] = useState("")
  const [activeSearch, setActiveSearch] = useState(false)   // search component 
  const [searchQuery, setSearchQuery] = useState("")






const categoryButtonHandler = (id) => {
  // console.log(id)
  setCategory(id)
}

// console.log(category)
  return (
    <>

{
  activeSearch && (
    <SearchModal 
    searchQuery={searchQuery}
    setSearchQuery={setSearchQuery}
    setActiveSearch={setActiveSearch}
    products={products}
    />
  )
}
   




    <View style={defaultStyle}>
      <Header />

      {/* Heading row  */}
      <View style={{
        paddingTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* header */}
        <View >
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25 }}>Products</Text>
        </View>

        {/* search Bar  */}
        <View>
          <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
            <Avatar.Icon icon={"magnify"} color={"gray"} style={{ backgroundColor: colors.color2, elevation: 12 }} size={50} />
          </TouchableOpacity>
        </View>



      </View>


      {/* categories  */}
      <View style={{
        flexDirection: 'row',
        height: 80
      }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
          {
            categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor: category===item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5
                }}
                onPress={() => categoryButtonHandler(item._id)}>
                <Text style={{
                  fontSize: 12,
                  color: category === item._id ? colors.color2 : "gray"
                }}>

                </Text>
                {item.category}
              </Button>
            ))
          }
        </ScrollView>

      </View>


   








    </View>
    </>

    
    
  )
}

export default Home