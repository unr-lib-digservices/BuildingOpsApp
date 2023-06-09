import {View, Text, TextInput, TouchableOpacity,} from 'react-native';
import styles from './styles';

function LoginScreen({ navigation }) {
    return (
      <View style={styles.container}>
  
        <Text style = {{color: '#fff', fontSize: 27, marginBottom: 15}}>Welcome</Text>
        <Text style = {{color: '#fff', fontSize: 17, marginBottom: 11}}>Please enter your first and last name:</Text>
        
        <TextInput
            style = {styles.searchbox}
            placeholder= "Enter your name..."
            placeholderTextColor = '#5c5c5c'
        />
  
        <TouchableOpacity 
        style = {{backgroundColor:'#333940', margin: 15, paddingVertical:10, paddingHorizontal: 55, alignItems: 'center', marginTop: 35}} 
        onPress={() => navigation.navigate('Menu')}
        >
          <Text style = {{color: '#fff', fontSize: 16}}> Continue </Text>
        </TouchableOpacity>
  
      </View>
    );
}

export default LoginScreen