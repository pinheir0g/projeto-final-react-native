import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  drawerContent: {
    flex: 5,
    backgroundColor: "#2F2D2D",
  },

  drawerItemList: {
    flex: 3,
    justifyContent: "space-around",
  },

  perfil: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  nomePerfil: {
    color: "white",
  },

  letterCategory: {
    padding: 10,
  },

  category: {
    color: "white",
    fontFamily: "System",
    fontWeight: "bold",
    fontSize:25,
  },

  bottomSair: {
    marginBottom: 15,
    flex: 1,
    justifyContent: "flex-end",
  },

  sair: {
    color: "#D92744",
    fontFamily: "Museo-Moderno-Medium",
    fontSize: 25,
  },
});
