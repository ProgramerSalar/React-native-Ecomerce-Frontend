import React, { useEffect } from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Toast from 'react-native-toast-message';
import Cart from './screens/Cart';
import ConfirmOrder from './screens/ConfirmOrder';
import Payment from './screens/Payment';
import Login from './screens/Login';
import ForgetPassword from './screens/ForgetPassword';
import Verify from './screens/Verify';
import SignUp from './screens/SignUp';
import Profile from './screens/Profile';
import UpdateProfile from './screens/UpdateProfile';
import ChangePassword from './screens/ChangePassword';
import Orders from './screens/Orders';
import AdminPanel from './screens/Admin/AdminPanel';
import Categories from './screens/Admin/Categories';
import AdminOrders from './screens/Admin/AdminOrders';
import UpdateProduct from './screens/Admin/UpdateProduct';
import NewProduct from './screens/Admin/NewProduct';
import ProductImages from './screens/Admin/ProductImages';
import Camera from './screens/Camera';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/userAction';

const Stack = createNativeStackNavigator()


function Main() {

  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.user)
  console.log(user)

  useEffect(() => {
    dispatch(loadUser())
  },[dispatch])



  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
          headerShown: false   // header is not show 
        }}
      >
        <Stack.Group>

          <Stack.Screen name='home' component={Home}></Stack.Screen>
          <Stack.Screen name='productdetails' component={ProductDetails}></Stack.Screen>
          <Stack.Screen name='cart' component={Cart}></Stack.Screen>
          <Stack.Screen name='confirmorder' component={ConfirmOrder}></Stack.Screen>
          <Stack.Screen name='payment' component={Payment}></Stack.Screen>
          <Stack.Screen name='login' component={Login}></Stack.Screen>
          <Stack.Screen name='signup' component={SignUp}></Stack.Screen>
          <Stack.Screen name='profile' component={Profile}></Stack.Screen>
          <Stack.Screen name='updateprofile' component={UpdateProfile}></Stack.Screen>
          <Stack.Screen name='changepassword' component={ChangePassword}></Stack.Screen>
          <Stack.Screen name='orders' component={Orders}></Stack.Screen>
          <Stack.Screen name='CameraComponent' component={Camera}></Stack.Screen>

          {/* Password Reseting Route  */}
          <Stack.Screen name='forgetpassword' component={ForgetPassword}></Stack.Screen>
          <Stack.Screen name='verify' component={Verify}></Stack.Screen>


          {/* Admin Routes */}
          <Stack.Screen name='adminpanel' component={AdminPanel}></Stack.Screen>
          <Stack.Screen name='categories' component={Categories}></Stack.Screen>
          <Stack.Screen name='adminorders' component={AdminOrders}></Stack.Screen>
          <Stack.Screen name='updateproduct' component={UpdateProduct}></Stack.Screen>
          <Stack.Screen name='newproduct' component={NewProduct}></Stack.Screen>
          <Stack.Screen name='productimages' component={ProductImages}></Stack.Screen>







        </Stack.Group>
      </Stack.Navigator>

      <Toast position='top' topOffset={40} />
    </NavigationContainer>




  )
}

export default Main