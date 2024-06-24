import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons';
import Thiago from '../../../assets/Thiago.png';
import Logo from '../../../assets/LOGO.png';

export function Sobre() {


      const LinkGitThiago = 'https://github.com/ThiagoSausmikat';
      const LinkThiago = 'https://www.linkedin.com/in/thiago-moura93/';

      const LinkGitGustavo = 'https://github.com/ThiagoSausmikat';
      const LinkGustavo = 'https://www.linkedin.com/in/thiago-moura93/';

      const LinkGitMatheus = 'https://github.com/ThiagoSausmikat';
      const LinkMatheus = 'https://www.linkedin.com/in/thiago-moura93/';

      const LinkGitCassio = 'https://github.com/ThiagoSausmikat';
      const LinkCassio = 'https://www.linkedin.com/in/thiago-moura93/';

      const LinkGitKaiky = 'https://github.com/ThiagoSausmikat';
      const LinkKaiky = 'https://www.linkedin.com/in/thiago-moura93/';

    return (
    <View style={styles.container}>
      
       <View style={styles.containerlogoTitulo}>
        <Image source={Logo} style={styles.imgLogo}/>
        <Text style={styles.titulo}>Nossa Equipe</Text>
       </View>

       <ScrollView style={styles.containerEquipe} showsVerticalScrollIndicator={false}>
        <View style={styles.contetEquipe}>
            <Image  source={Thiago} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Gustavo Pinheiro</Text>
           
            <View style={styles.conteinerIcon}>
            <TouchableOpacity onPress={() => Linking.openURL(LinkGitThiago)} >
            <FontAwesome name="github" size={40} style={styles.iconGit} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(LinkThiago)}>
            <Entypo name="linkedin-with-circle" style={styles.iconLinkedin} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.contetEquipe}>
            <Image source={Thiago} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Matheus Fonseca</Text>
            
        </View>
        <View style={styles.contetEquipe}>
            <Image source={Thiago} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Cássio Penha</Text>

        </View>
        <View style={styles.contetEquipe}>
            <Image source={Thiago} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Kaiky azevedo</Text>

        </View>
        <View style={styles.contetEquipe}>
            <Image source={Thiago} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Thiago Moura</Text>

        </View>
       </ScrollView>

    </View>
    );
  }

  const styles = StyleSheet.create({
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