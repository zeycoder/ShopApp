import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#eccfff',
        marginVertical:5,
        borderRadius:10,
        width:'95%',
        alignSelf:'center',
        borderColor:'purple',
        borderWidth:1,
    },
    image:{
        width:80,
        minHeight:80,
        resizeMode:'contain',
        backgroundColor:'white',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    },
    body_container:{
        flex:1,
        padding:5
    },
    title:{
        fontSize:16,
        fontWeight:'700',
    },
    price:{
        textAlign:'right',
        fontStyle:'italic',

    }
})
export default styles;