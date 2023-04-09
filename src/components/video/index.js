import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {Feather} from '@expo/vector-icons'
import {WebView} from 'react-native-webview'

export function VideoView({handleClose, videoUrl}) {
     return(
         <SafeAreaView style={styles.container}>
            <View>
              <TouchableOpacity onPress={handleClose} style={styles.backButton}>
                <Feather name='arrow-left' size={24} color="#fff"/>
                <Text style={styles.backText}>Voltar</Text>
              </TouchableOpacity>
              </View>
              <WebView
                style={styles.contentView}
                source={{ uri: videoUrl }}
               />
            </SafeAreaView>
        )
    }

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        width: '100%'
    },
    backButton:{
        width: '100%',
        backgroundColor: '#4cbe6c',
        height:48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 14,
    },
    backText:{
        color:'#fff',
        fontSize: 18,
        fontWeight: 500,
        paddingLeft: 17.17,
    },
    contentView:{
        flex: 1,
        width:'100%',
    }
})