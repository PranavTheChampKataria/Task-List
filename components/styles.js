import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    fontSize: 20,
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    marginVertical: 10,
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'60%',
  },
  button:{
    width:'40%'
  },
});

export default styles;
