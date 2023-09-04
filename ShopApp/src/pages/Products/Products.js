import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ProductsCard from '../../components/ProductsCard/ProductCard';

import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import { useSelector } from 'react-redux';

const Products = ({navigation}) => {
    const user = useSelector(s=>s.user);
    const handleSelect = (id)=> navigation.navigate('DetailScreen',{id})
    const{loading, data, error} = useFetch(`${process.env.EXPO_PUBLIC_API_URL}products`)
    const renderItem = ({item})=><ProductsCard product={item} onSelect={()=>handleSelect(item.id)}/>

    if(loading) return <Loading />
    if(error) return <Error />
    
    return (
        <View>
            <Text style={{marginHorizontal:10,marginVertical:5, fontWeight:'bold', textAlign:'right'}}>Hoşgeldin, {user ? user.name.firstname : 'Misafir'} </Text> 
            <FlatList data={data} renderItem={renderItem} />
        </View>
    )
}
export default Products;