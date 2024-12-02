import { View,Button, Text } from "react-native";

const HomeScreen = ({navigation}) => {
return (
  <View>
    <Text>Styling Here</Text>
    <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum autem earum aperiam facere doloremque eveniet obcaecati praesentium id odit quisquam corrupti dignissimos quod, quis dolorum sunt qui totam sapiente aliquam?</Text>
    <Button
        onPress={() => {navigation.navigate('Promo')}}
        title="Ambil Promonya Sekarang"
        color="#841584"
      />
  </View>
);
}

export default HomeScreen
