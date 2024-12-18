import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  markerImage: {
    width: 45,
    height: 45,
  },

  upper: {
    flex: 1,
  },
  lower: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  smallButton: {
    paddingHorizontal: 15,
    flex: 1,
    height: 50,
    borderRadius: 50,
    backgroundColor: "white",
    // margin: 10
    marginHorizontal: 5,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  buttonLabel: {
    textAlign: "center",
    width: "100%",
    // backgroundColor: 'blue'
    fontWeight: "bold",
    fontSize: 20,
    color: "orange",
  },
  iconButton: {
    borderRadius: 90,
    backgroundColor: "white",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    marginTop: 50,

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    
    elevation: 14,
  },
});

export default styles;
