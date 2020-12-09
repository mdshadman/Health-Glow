import React, { Component } from 'react';
import { Button, Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './LoginStyles';

const LoginView = props => {
  const {
    goToLogin,
    showHidePassword,
    showHideEye,
    toggleEye,
    goToForgotPass
  } = props;
  const healthLogo = require("../../images/logoHealth.png")
  const logoApp = require("../../images/logo.png");
  return (
    <SafeAreaView style={styles.fullPage}>
      <CustomHeader
        imgSrc={healthLogo}
      />
      <KeyboardAvoidingView behavior={"padding"} style={styles.fullPage} enabled>

        <View style={styles.container}>
          <View>
            <View style={styles.logoContainer}>
              <Image
                source={logoApp}
                style={styles.imageSt} />
              <Text style={styles.textStyle}>{"Welcome"}</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.firstTextInp}>
              <TextInput placeholder={"Email or Mobile Nummber"} />
            </View>
            <View style={styles.multiInput}>
              <View style={styles.size80}>
                <TextInput
                  placeholder={"Enter Password"}
                  secureTextEntry={toggleEye ? false : true}
                />
              </View>
              <View style={styles.passwordView}>
                {showHideEye && (
                  <TouchableOpacity onPress={showHidePassword}>
                    <Icon name={toggleEye ? 'md-eye' : 'eye-off'} color={"#f57b02"} size={22} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <Button
              onPress={goToLogin}
              title="Sign In"
              color={"#f57b02"}
            />
            <View style={styles.forgotPass}>
              <TouchableOpacity onPress={goToForgotPass}>
                <Text style={styles.signUpText}>Forgot Your Password ?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.createAcc}>
              <TouchableOpacity onPress={goToForgotPass}>
                <Text style={styles.signUpText}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>

  );
};
export default LoginView;
