import {StyleSheet} from 'react-native';
import Fonts from '../../config/Fonts';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  heading: {
    fontSize: Fonts.fontSize_16,
    paddingHorizontal: '8%',
    color: Color.Black,
    paddingTop: '10%',
  },
  button: {
    alignItems: 'center',
    textAlign: 'center',
    color: Color.White,
    fontWeight: '800',
    paddingTop: '3%',
  },
  ButtonContainer: {
    width: '80%',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: Color.primary,
    height: '9%',
    marginHorizontal: '10%',
  },
  outercontainer: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.lightgrey,
    padding: 8,
  },
  textinput: {
    backgroundColor: Color.White,
    padding: 10,
    marginTop: 10,
    fontSize: Fonts.fontSize_15,
  },
  modal: {
    flex: 1,
    height: '65%',
    width: '80%',
    marginLeft: '10%',
    marginTop: '30%',
    marginBottom: '30%',
    backgroundColor: Color.White,
    padding: 20,
    borderRadius: 10,
  },
  modalcontainer: {
    flex: 1,
    backgroundColor: Color.blackLite,
  },
  modalheader: {
    fontSize: Fonts.fontSize_15,
    paddingBottom: '20%',
  },
});

export default styles;
