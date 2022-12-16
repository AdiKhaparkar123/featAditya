import {StyleSheet} from 'react-native';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
  buttons: {
    width: '100%',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 50,
    backgroundColor: Color.primary,
    height: 50,
  },
  buttonText: {
    alignItems: 'center',
    textAlign: 'center',
    color: Color.White,
    fontWeight: '800',
    paddingTop: '4%',
  },
});

export default styles;

