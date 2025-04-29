import CustomButton from '@/components/ui/CustomButton';
import { UniStyles } from '@/styles/Styles'
import { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { HelperText, TextInput } from 'react-native-paper';

export default function SigninComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (text: string) => setEmail(text);
  const onChangePassword = (text: string) => setPassword(text);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const hasEmailErrors = () => {
    if (email === '') return null;
    return !isValidEmail(email);
  };

  const isValidPassword = (password: string) => {
    return password.length >= 8;
  }

  const hasPasswordErrors = () => {
    if (password === '') return null;
    return !isValidPassword(password);
  }

  return (
    <View style={UniStyles.container}>
      <View>
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={onChangeEmail}
        />
        <HelperText
          type="error"
          // @ts-ignore
          visible={hasEmailErrors()}>
          Email address is invalid!
        </HelperText>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          label="Password"
          value={password}
          onChangeText={onChangePassword}
        />
        <HelperText
          type="error"
          // @ts-ignore
          visible={hasPasswordErrors()}>
          Password must be at least 8 characters long!
        </HelperText>
        <CustomButton>
          Signin
        </CustomButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontFamily: "PoppinsMedium"
  }
})