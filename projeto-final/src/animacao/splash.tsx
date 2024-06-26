import { StyleSheet, View } from "react-native";
import LottieView from 'lottie-react-native';
import { StackActions, useNavigation } from "@react-navigation/native";

export default function Splash() {
    
 const navigation = useNavigation()

    return (
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../../assets/splash.json')}
          autoPlay
          loop={false}
          onAnimationFinish={() =>navigation.dispatch(StackActions.replace("Home"))}
          style={{
            width: 200,
            height: 200,
          }}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#0F0E0E',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  });