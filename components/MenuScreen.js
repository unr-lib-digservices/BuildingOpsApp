import {View, Text, Button, FlatList, Image, TouchableOpacity} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './styles';

const DATA = [
   {
    path: 'C:/Users/buslo/OneDrive/Documents/icon/placeholder-image.webp',
   },

   {
    
   },

   {
    
   },
    
   {
    
   },
   
   {
    
   },

   {
    
   },

   {
    
   },
   
   {
      
   },

   {
     
   },

];
  
const Item = ({title, path}) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image source = {{uri: path}} style = {{flex: 1}}/>
    </TouchableOpacity>
);

function MenuScreen({ navigation }) {
    return (
      
  <SafeAreaProvider>
    
    <View style = {{flex: 1, backgroundColor: '#041e42',}}>
      <Text style ={{color: '#fff', fontSize: 25, paddingHorizontal: '33.333%', paddingVertical: '1.5%'}}>
      KC Building Operations
      </Text>
    </View>
    <View style = {{flex: .1, backgroundColor: '#25292e',}}></View>

    <View style = {{flex: 7, backgroundColor: '#25292e', alignItems: 'center', alignContent: 'center'}}>
      <FlatList
        style = {{flex: 1, paddingHorizontal: '20%',}}
        data={DATA}
        renderItem={({item}) => <Item title={item.title} path={item.path}/>}
        numColumns={3}
      />

    </View>
    
    <View style = {{flex: 1, backgroundColor: '#25292e', alignItems: 'center', justifyContent: 'center'}}>
      <Text style = {{flex: 1, color: '#fff', fontSize: 25, fontStyle: 'italic' }}> 
        Good Morning, TestUser 
      </Text>
    </View>

  </SafeAreaProvider>
  );
  }

  export default MenuScreen