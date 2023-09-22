import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from '../components/Heading';
import { Button } from 'react-native-paper';
import CartItem from '../components/CartItem';
import { useNavigation } from '@react-navigation/native';


export const cartItems = [
    {
        name: "Shoes",
        image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
        product: "finfifere",
        stock: 4,
        price: 454,
        quantity: 3
    },
    {
        name: "Shocks",
        image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        product: "finfifefrere",
        stock: 4,
        price: 454,
        quantity: 3
    },
]

const Cart = () => {

    const navigate = useNavigation()



    const decrementHandler = (id, qty, stock) => {
        console.log("Increasing", id,qty,stock)

    }


    const incrementHandler = (id, qty, stock) => {
        console.log("decreasing", id,stock, qty)

    }
    return (
        <View style={{
            ...defaultStyle,
            padding: 0
        }}>

            {/* Header  */}
            <Header emptyCart={true} back={true} />

            {/* Heading  */}
            <Heading text1="Shopping" text2="Cart" containerStyle={{
                paddingTop: 70, marginLeft: 35
            }} />

            <View
                style={{
                    paddingVertical: 20,
                    flex: 1,

                }}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        cartItems.map((i, index) => (
                            <CartItem
                                key={i.product}
                                id={i.product}
                                name={i.name}
                                stock={i.stock}
                                amount={i.price}
                                imgSrc={i.image}
                                index={index}
                                qty={i.quantity}
                                incrementhandler={incrementHandler}
                                decrementHandler={decrementHandler}



                            />

                        ))
                    }

                </ScrollView>


            </View>



            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 35,
            }}>
                <Text>Cart</Text>
                <Text>Cart</Text>

            </View>

            <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>






        </View>
    )
}



export default Cart