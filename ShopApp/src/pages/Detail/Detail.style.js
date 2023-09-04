import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:15,
    },
    image: {
        width: '100%', 
        minHeight: 300, 
        resizeMode: 'contain',
        backgroundColor:'white'

    },
    title:{
        marginTop:10,
        fontSize:20,
        fontWeight:'bold'
    },
    desc:{
        marginVertical:15
    },
    price:{
        fontStyle:'italic',
        textAlign:'right',
        fontWeight:'bold',
        fontSize:20
    }
})
export default styles;