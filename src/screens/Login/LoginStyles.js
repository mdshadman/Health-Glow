import { Dimensions, Platform, StyleSheet } from 'react-native';
import Fonts from '../../Fonts';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    paddingTop: 32,
    fontFamily: Fonts.Montserrat,
  },

  HeaderStyle: {
    backgroundColor: '#00995c',
  },

  viewStyle: {
    marginTop: 30,
    flex: 1,
  },

  iconStyleView: { fontSize: 26, color: 'white' },
  appName: {
    textAlign: 'center',
    fontSize: 22,
    color: '#FFF',
    fontFamily: Fonts.MontserratBold,
  },
  loginButtonIcon: { marginRight: 10, fontSize: 22, color: '#000428' },
  loginSignupText: {
  },
  loginSignupAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS == 'android' ? 8 : 13,
  },
  signUpText: {
    color: '#f57b02',
    fontSize: Platform.OS == 'android' ? 12 : 14,
    fontWeight: 'bold',
    fontFamily: Fonts.Montserrat,
  },
  logoContainer: { justifyContent: 'center', alignItems: 'center', paddingVertical: 32 },
  imageSt: { width: 55, height: 55 },
  inputContainer: { paddingHorizontal: 32, paddingBottom: 32 },

  firstTextInp: { borderBottomWidth: 1, borderBottomColor: "#bcc4c9", },
  multiInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#bcc4c9",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    width: '100%'
  },
  size80: { width: "80%" },
  passwordView: { width: "20%", alignItems: 'center', justifyContent: "center" },
  forgotPass: {
    marginHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAcc: {
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullPage: { flex: 1 }
});
export default styles;
