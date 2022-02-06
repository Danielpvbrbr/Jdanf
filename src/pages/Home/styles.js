import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    // backgroundColor: '#fff',
  },
  areaPromotion: {
    width: '100%',
    height: 80,
  },
  info: {
    width: '100%',
    height: 160,
  },
  image:{
  width: Dimensions.get('window').width / 2.3,
    height: 130,
  },
  areaProduct: {
        flex: 1,
    width: Dimensions.get('window').width ,
    alignItems: 'center',
    justifyContent: 'center',

  },
  areaTitle: {
    width: 155,
    height: 40,
    marginBottom: 5
  },
  title: {
    color: "#333333",
    fontSize: 14,
    padding:2,
    marginBottom:4
  },
  price: {
    color: "#FF8000",
    fontSize: 17,
    fontWeight: 'bold',
     marginTop:5
  },
  date: {
    textAlign:'center',
    color: "#18346D",
    fontSize: 9
  },
  areaText: {
    marginTop: 5,
    marginBottom: 5,
    borderTopWidth: 0.2,
    borderTopColor: '#000',
    width: '100%'
  },
  areaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 40,
    bottom: 20
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18346D',
    width: 100,
    height: 50,
    borderRadius: 20,
  },
  textButton: {
    marginRight: 5,
    color: '#fff',
    fontWeight: 'bold'
  },
  item: {
    alignItems: "center",
    backgroundColor: "#fff",
    flexGrow: 1,
    margin: 2,
    padding: 5,
    flexBasis: 0,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 11,
    elevation: 5,

  },
});

export default styles;