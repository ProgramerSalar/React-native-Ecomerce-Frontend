import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Carousel from 'react-native-snap-carousel';
import { Avatar, Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';


const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH

export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
};


const ProductDetails = ({ route: { params } }) => {
  // console.log( params.id )


  const isCarousel = useRef(null)
  const name = "Headphone"
  const stock = 10
  const price = 433
  const description = "this is good product"
  const [quantity, setQuantity] = useState(1)



  const images = [
    {
      id: '1dsfsfwsdsd',
      url: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    },
    {
      id: '1dsfsfwsddsfsfsd',
      url: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: '1dsfsfwsddsfsffefdfsd',
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ]


  const incrementQty = () => {
    if(stock <= quantity) return;
    setQuantity((prev) => prev + 1)
  }

  const decrementQty = () => {
    if(quantity <= 1) return; 
    setQuantity((prev) => prev - 1 )
  }


  const addToCardHandler = () => {
    if(stock === 0) return Toast.show({
      type:"error",
      text1:"out of Stock",
    })
    // console.log("Adding To Card", quantity) 
    Toast.show({
      type:"success",
      text1:'Added to Cart'
    })
  }


  


  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color1,

      }}
    >
      <Header back={true} />


      {/* Carousel  */}
      <Carousel
        layout='tinder'
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />

      <View style={{
        backgroundColor: colors.color2,
        padding: 35,
        flex: 1,
        marginTop: -380,
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,

      }}>

        <Text
          numberOfLines={2}
          style={{
            fontSize: 25
          }}>{name}</Text>

        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            fontWeight: "900"
          }}>₹{price}</Text>

        <Text
          style={{
            letterSpacing: 1,
            lineHeight: 20,
            marginVertical: 15,
          }}
          numberOfLines={8}
        >
          {description}
        </Text>

        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 5,
        }}>
          <Text style={{
            color: colors.color3,
            fontWeight: "100",
          }}>Quantity</Text>


          <View style={{
            width: 80,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>

            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"minus"} {...iconOptions} />
            </TouchableOpacity>

            <Text style={style.quantity}>{quantity}</Text>

            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"plus"} {...iconOptions} />
            </TouchableOpacity>

          </View>
        </View>

        <TouchableOpacity activeOpacity={0.9} onPress={addToCardHandler}> 
          <Button icon={"cart"} style={style.btn} textColor={colors.color2}>
            Add To Cart
          </Button>
        </TouchableOpacity>

      </View>







    </View>
  )
}


const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);


const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  quantity: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },

  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
})

export default ProductDetails