import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './styles';

const DATA = [
   {
    id: '1',
    path: require('../assets/images/people.png'),
    title: 'Headcounts',
    screen: "Headcounts",
   },

   {
    id: '2',
    path: require('../assets/images/QRCode.png'),
    title: 'QR Codes'
   },

   {
    id: '3',
    path: require('../assets/images/Building.png'),
    title: 'Property Rounds'
   },

   {
    id: '4',
    path: require('../assets/images/Clock.png'),
    title: 'Hourly Assignments'
   },
   {
    id: '5',
    path: require('../assets/images/Printer.png'),
    title: 'Printers'
   },

   {
    id: '6',
    path: require('../assets/images/Key.png'),
    title: 'Keys'
   },

   {
    id: '7',
    path: require('../assets/images/Tickets.png'),
    title: 'Maintenance Tickets'
   },

   {
    id: '8',
    path: require('../assets/images/Restroom.png'),
    title: 'Restrooms'
   },

   {
    id: '10',
    path: require('../assets/images/Check.png'),
    title: 'Projects'
   },

   {
    id: '9',
    path: require('../assets/images/LogOut.png'),
    title: 'Log Out'
   },

];
  
const Item = ({title, path, screen,}) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(screen)}>
      <Image 
      source = {{uri: path}} 
      style = {styles.image} 
      onError={(error) => console.log('Image loading error:', error)}
      />
      <Text 
      
      style={{color: '#fff', fontSize: 20,}}
      adjustsFontSizeToFit={true}
      allowFontScaling={true}
      >
      {title}
      </Text>
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
        renderItem={({item}) => <Item title={item.title} path={item.path} screen={item.screen}/>}
        keyExtractor={item => item.id}
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