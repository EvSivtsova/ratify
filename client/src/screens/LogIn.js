import { Text, View, Button } from 'react-native';
import { styles } from '../styles'
import LoginScreen, { SocialButton } from "react-native-login-screen";

export function LogIn({ navigation }) {
  return (
        <LoginScreen
      logoImageSource={require("../../assets/ratifyLogo.png")}
      onLoginPress={() => {}}
      onHaveAccountPress={() => {}}
      onEmailChange={(email: string) => {}}
      onPasswordChange={(password: string) => {}}
    >
      <SocialButton 
      text="Continue with Google"
      imageSource={require("../../assets/google.png")}
      onPress={() => {}} />
      <SocialButton
        text="Continue with Facebook"
        imageSource={require("../../assets/FacebookLogo.png")}
        onPress={() => {}}
      />
      <SocialButton
        text="Continue with Twitter"
        
        imageSource={require("../../assets/twitter.png")}
        onPress={() => {}}
      />
    </LoginScreen>
  );
}