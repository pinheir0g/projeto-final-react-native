import React from 'react';
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { styles } from './styles';

import Logo from '../../../assets/LOGO.png';
import Gustavo from '../../../assets/Gustavo.png';
import Matheus from '../../../assets/Matheus.png';
import Cassio from '../../../assets/Cassio.png';
import Kaiky from '../../../assets/Kaiky.png';
import Thiago from '../../../assets/Thiago.png';

export function Sobre() {

    const LinkGitGustavo = 'https://github.com/pinheir0g/';
    const LinkGustavo = 'https://www.linkedin.com/in/gustavopinheiro-/';

    const LinkGitMatheus = 'https://github.com/Foncka';
    const LinkMatheus = 'https://www.linkedin.com/in/matheusff002/';

    const LinkGitCassio = 'https://github.com/cassio-penha';
    const LinkCassio = 'https://www.linkedin.com/in/c%C3%A1ssio-penha-pcd/';

    const LinkGitKaiky = 'https://github.com/kaikyazz';
    const LinkKaiky = 'https://www.linkedin.com/in/kaiky-azevedo-de-oliveira-a1b1492b8/';

    const LinkGitThiago = 'https://github.com/ThiagoSausmikat';
    const LinkThiago = 'https://www.linkedin.com/in/thiago-moura93/';

    return (
    <View style={styles.container}>
      
       <View style={styles.containerlogoTitulo}>
        <Image source={Logo} style={styles.imgLogo}/>
        <Text style={styles.titulo}>Nossa Equipe</Text>
       </View>

       <ScrollView style={styles.containerEquipe} showsVerticalScrollIndicator={false}>
        <View style={styles.contetEquipe}>
            <Image  source={Gustavo} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Gustavo Pinheiro</Text>
           
            <View style={styles.conteinerIcon}>
            <TouchableOpacity onPress={() => Linking.openURL(LinkGitGustavo)} >
            <FontAwesome name="github" size={40} style={styles.iconGit} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(LinkGustavo)}>
            <Entypo name="linkedin-with-circle" style={styles.iconLinkedin} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.contetEquipe}>
            <Image source={Matheus} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Matheus Fonseca</Text>
            
            <View style={styles.conteinerIcon}>
            <TouchableOpacity onPress={() => Linking.openURL(LinkGitMatheus)} >
            <FontAwesome name="github" size={40} style={styles.iconGit} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(LinkMatheus)}>
            <Entypo name="linkedin-with-circle" style={styles.iconLinkedin} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.contetEquipe}>
            <Image source={Cassio} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Cássio Penha</Text>
           
            <View style={styles.conteinerIcon}>
            <TouchableOpacity onPress={() => Linking.openURL(LinkGitCassio)} >
            <FontAwesome name="github" size={40} style={styles.iconGit} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(LinkCassio)}>
            <Entypo name="linkedin-with-circle" style={styles.iconLinkedin} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.contetEquipe}>
            <Image source={Kaiky} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Kaiky azevedo</Text>
            
            <View style={styles.conteinerIcon}>
            <TouchableOpacity onPress={() => Linking.openURL(LinkGitKaiky)} >
            <FontAwesome name="github" size={40} style={styles.iconGit} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(LinkKaiky)}>
            <Entypo name="linkedin-with-circle" style={styles.iconLinkedin} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.contetEquipe}>
            <Image source={Thiago} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Thiago Moura</Text>
           
            <View style={styles.conteinerIcon}>
            <TouchableOpacity onPress={() => Linking.openURL(LinkGitThiago)} >
            <FontAwesome name="github" size={40} style={styles.iconGit} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(LinkThiago)}>
            <Entypo name="linkedin-with-circle" style={styles.iconLinkedin} />
            </TouchableOpacity>
            </View>
        </View>
       </ScrollView>

    </View>
    );
  }