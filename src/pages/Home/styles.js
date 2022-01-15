import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E5E5E5',
    backgroundColor: '#fff',
  },
  areaPromotion: {
    width: '100%',
    height: 80,
  },
  info: {
    width: '100%',
    height: 160,
  },
  areaProduct: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  item: {
    alignItems: "center",
    backgroundColor: "#fff",
    flexGrow: 1,
    margin: 3,
    padding: 10,
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
  areaTitle: {
    width: 155,
    height: 40,
    marginBottom: 5
  },
  title: {
    color: "#333333",
    fontSize: 14
  },
  price: {
    color: "#333333",
    fontSize: 17,
    fontWeight: 'bold'
  },
  freight: {
    color: "#31B404",
    fontSize: 13
  },
  itemEmpty: {
    backgroundColor: "transparent",
    borderWidth: 0,
    shadowColor: "transparent",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  areaText: {
    marginTop: 5,
    marginBottom: 5,
    borderTopWidth: 0.2,
    borderTopColor: '#000',
    width: '100%'
  }
});

export default styles;