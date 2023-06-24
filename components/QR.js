import {View, Text} from 'react-native';
import styles from './styles';

function QR({ navigation }){
    return(
        <View style = {styles.container}>
            <Text style = {{color: '#fff'}}> Hello QR</Text>

        </View>
    );
}

export default QR