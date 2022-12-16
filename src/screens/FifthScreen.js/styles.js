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
  loginButtonContainer:{
    width: '80%',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 50,
    backgroundColor: Color.primary,
    height: 50,
    marginHorizontal:"10%"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textinput: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    fontSize:20
  },
});

export default styles;