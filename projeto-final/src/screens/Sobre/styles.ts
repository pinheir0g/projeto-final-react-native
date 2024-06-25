import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0E0E',
  },
  conteinerIcon: {
    flexDirection: "column",
  },
  iconGit: {
    fontSize: 40,
    marginBottom: 15,
    color: '#fff'
  },
  iconLinkedin: {
    fontSize: 35,
    color: '#fff'
  },
  containerlogoTitulo: {
    flex: 0.6,
    alignItems: 'center',
  },
  imgLogo: {
    height: "60%",
    width: 200,
    marginTop: 25,
  },
  titulo: {
    color: "#FF7B17",
    fontSize: 30,
    marginTop: 10,
  },
  containerEquipe: {
    flex: 1,
  },
  contetEquipe: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 8,
    backgroundColor: '#FF7B17',
  },
  textEquipe: {
    color: '#fff',
    fontSize: 18,
    justifyContent: "space-between",
  },
  imgEquipe: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",

  },
});
