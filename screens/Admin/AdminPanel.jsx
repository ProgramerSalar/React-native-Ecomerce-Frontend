import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ButtonBox from '../../components/ButtonBox';
import ProductListHeading from '../../components/ProductListHeading';
import { products } from '../Home';
import ProductListItem from '../../components/ProductListItem';
import Chart from '../../components/Chart';
// import Header from '../../components/Header';




const AdminPanel = ({ navigation }) => {

    const loading = false;

    const navigationHandler = () => {

    }

    const deleteProductHandler = (id) => {

        console.log(`Deleting product with ID: ${id} `)

    }


    return (


        <View style={{ ...defaultStyle }}>
            <Header back={true} />

            {/* Heading  */}
            <View style={{ marginTop: 90, marginBottom: 20 }}>
                <Text style={formHeading}>Admin Panel</Text>
            </View>

            {
                loading ? (<Loader />) : (
                    <>

                        <View style={{
                            backgroundColor: colors.color3,
                            borderRadius: 20,
                            alignItems: 'center'
                        }}>

                            <Chart inStock={12} outOfStock={2} />




                        </View>


                        <View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    margin: 10,
                                    justifyContent: 'space-between'
                                }}
                            >

                                <ButtonBox icon={'plus'} text={'Product'} handler={navigationHandler} />
                                <ButtonBox icon={'format-list-bulleted-square'} text={'All Orders'} handler={navigationHandler} reverse={true} />
                                <ButtonBox icon={'plus'} text={'Category'} handler={navigationHandler} />


                            </View>


                        </View>

                        <ProductListHeading />

                        <ScrollView showsVerticalScrollIndicator={false}>

                            <View>

                                {

                                    products.map((item, index) => (
                                        <ProductListItem
                                            navigate={navigation}
                                            deleteHandler={deleteProductHandler}
                                            id={item._id}
                                            key={item._id}
                                            i={index}
                                            price={item.price}
                                            stock={item.stock}
                                            name={item.name}
                                            category={item.category}
                                            imgSrc={item.images[0].url}
                                        />
                                    ))

                                }



                            </View>


                        </ScrollView>

                    </>



                )
            }






        </View>
    )
}

export default AdminPanel