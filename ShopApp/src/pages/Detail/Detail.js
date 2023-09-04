import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Detail.style';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch';

const Detail = ({route}) => {
    const {id} = route.params
    const{loading, data, error} = useFetch(`${process.env.EXPO_PUBLIC_API_URL}products/${id}`);

    if(loading) return <Loading />
    if(error) return <Error />
    
    return(
        <View style={styles.container}>
            <Image source={{uri:data.image}} style={styles.image} />
            <Text style={styles.title} >{data.title}</Text>
            <Text style={styles.desc} >{data.description}</Text>
            <Text style={styles.price} >{data.price} TL</Text>

        </View>
    )
}
export default Detail;