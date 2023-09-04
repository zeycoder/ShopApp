import React, { useState, useEffect } from 'react';
import { Text, View, Image, Alert } from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input/Input';
import Buttons from '../../components/Button/Button';
import { Formik } from 'formik';
import usePost from '../../hooks/usePost';
import { useDispatch } from 'react-redux';

const Login = ({navigation}) => {    
    const{ data, loading, error, post} = usePost();
    const dispatch = useDispatch();

    const handleLogin = async (values)=> {
        post(`${process.env.EXPO_PUBLIC_API_URL}auth/login`,values)
        console.log(values)
        console.log(`${process.env.EXPO_PUBLIC_API_URL}auth/login`)
        console.log(data)
    }
    
    if (error) {
        Alert.alert('Shop App', 'ERRORRR');
    }
    if (data){
        if (data.status=='Error') {
            Alert.alert('Shop App', 'Kullanıcı bulunamadı.Lütfen girdiğiniz bilgileri kontrol ediniz.')
        } else {
            dispatch({type:'SET_USER',payload:{user}})
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.image} source={require('../../assets/logo.png')} />
            </View>
            <Formik initialValues={{username:'', password:''}} onSubmit={handleLogin} >
                {({handleChange, values,handleSubmit})=>(
                    <View style={styles.body_container}>
                        <Input placeholder={'Kullanıcı adını giriniz'} onChangeText={handleChange('username')} value={values.username}/>
                        <Input placeholder={'Şifrenizi giriniz'} onChangeText={handleChange('password')} value={values.password} isSecurity />
                        <Buttons title={'Giriş Yap'} onPress={handleSubmit} loading={loading}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}
export default Login;
const user = {
    email:'John@gmail.com',
    username:'johnd',
    password:'m38rmF$',
    name:{
        firstname:'John',
        lastname:'Doe'
    },
    address:{
        city:'kilcoole',
        street:'7835 new road',
        number:3,
        zipcode:'12926-3874',
        geolocation:{
            lat:'-37.3159',
            long:'81.1496'
        }
    },
    phone:'1-570-236-7033'
    }