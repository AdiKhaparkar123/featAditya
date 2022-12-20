import {StyleSheet} from 'react-native';
import Fonts from '../../config/Fonts';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  heading: {
    fontSize: Fonts.fontSize_16,
    paddingHorizontal: '8%',
    color: Color.Black,
    paddingTop: '5%',
  },
  errormsg: {
    color: Color.Red,
    marginHorizontal: '8%',
  },
  button: {
    alignItems: 'center',
    textAlign: 'center',
    color: Color.White,
    fontWeight: '800',
    paddingTop: '4%',
  },
  loginButtonContainer: {
    width: '80%',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 50,
    backgroundColor: Color.primary,
    height: 50,
    marginHorizontal: '10%',
  },
  arrow: {
    width: 20,
    height: 20,
    marginTop: 3,
    resizeMode: 'contain',
  },
});

export default styles;
