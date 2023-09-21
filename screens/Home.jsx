import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyle } from '../styles/styles'
import Header from '../components/Header'


export const Home = () => {
  return (
    <View style={defaultStyle}>
      {/* header */}
      <Header/>

      <View>
        <Text>Our</Text>
        <Text>Products</Text>
      </View>




    </View>
  )
}

export default Home