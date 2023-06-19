import {View, Text} from 'react-native';
import styles from "./styles";

function Headcounts({ navigation }){
    return(
        <View style = {styles.container}>
            <Text style = {{color: '#fff'}}> Hello Headcounts</Text>

        </View>
    );
}

export default Headcounts