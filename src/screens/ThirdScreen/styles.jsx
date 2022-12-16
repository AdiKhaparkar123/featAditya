import {StyleSheet} from 'react-native';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    paddingHorizontal: '8%',
    color: Color.Black,
    paddingTop: '30%',
  },
  errormsg:{
    color:Color.Red,
    marginHorizontal:'8%'
  },
  button:{
    alignItems: 'center',
    textAlign: 'center',
    color: Color.White,
    fontWeight: '800',
    paddingTop: '4%',
  },
  ButtonContainer:{
    width: '80%',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 50,
    backgroundColor: Color.primary,
    height: 50,
    marginHorizontal:"10%"
  }
});

export default styles;