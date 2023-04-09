import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import { FoodList } from '../../components/foodList';

import api from '../../services/api';

export function Search() {
    const [receipes, setReceipes] = useState([])
    const route = useRoute();

    useEffect(() => {
        async function fetchReceipes(){
            const response = await api.get(`/foods?name_like=${route.params?.name}`)
            setReceipes(response.data);
        }

        fetchReceipes();

    },[route.params?.name])

    return(
        <View style={styles.container}>
            <FlatList
            data = {receipes}
            keyExtractor={ (item) => String(item.id)}
            renderItem={({item}) => <FoodList data={item}/>}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={ ()=> <Text style={styles.text}>Não encontramos o que você está buscando...</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14,
    },
    text:{
        fontSize: 16,
    }
})