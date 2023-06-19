import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    GridView: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    searchbox: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:10,
      paddingHorizontal: 10,
      width: 390,
      maxWidth: '90%',
      textAlign: 'left',
    },
  
    input: {
      backgroundColor: '#fff',
      height: 40,
      marginTop: 40,
      borderWidth: 1,
      padding: 10,
    },
  
    item: {
      backgroundColor: '#333940',
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 5,
      maxWidth: 160,
      alignItems: 'center'
    },

    image: {
      width:140,
      height: 140,
    },
  
    title: {
      fontSize: 15,
      color: '#fff',
    },
  });

  export default styles