import React from "react";
import { StyleSheet } from "react-native";

const styleFirst = StyleSheet.create({
  FirstContainer: {
    backgroundColor: "#f8f9fa",
    height: "100%",
    width: "100%",
    color: "#343a40",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxCardRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40,
  },
  boxInnerCards: {
    backgroundColor: "red",
    minWidth: "20%",
  },
  Cardimage: {
    display: "flex",
    justifyContent: "center",
    height: 100,
    width: 120,
  },
  imageCardtext: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000",
  },
});

export default styleFirst;
