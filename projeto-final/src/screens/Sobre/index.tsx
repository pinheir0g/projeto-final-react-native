import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import { EquipeProps } from "../../routes/drawer";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export function Sobre({navigation}: EquipeProps) {

    const linkGit = 'https://github.com/';
    const linkdin = 'https://www.linkedin.com/in/';

    const toggleDrawer = () => {
        navigation.toggleDrawer();
      };

    return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
        <TouchableOpacity
            onPress={() => toggleDrawer()}
            style={styles.menuButton}
          >
            <SimpleLineIcons name="menu" size={24} color="white" />
          </TouchableOpacity>

        </View>
       <View style={styles.containerlogoTitulo}>
        <Image source={require('../../../assets/LOGO.png')} style={styles.imgLogo}/>
        <Text style={styles.titulo}>Nossa Equipe</Text>
       </View>

       <ScrollView style={styles.containerEquipe} showsVerticalScrollIndicator={false}>
        <View style={styles.contetEquipe}>
            <Image  source={require('../../../assets/Gustavo.png')} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Gustavo Pinheiro</Text>
           
            <View style={styles.conteinerIcon}>
            <TouchableOpacity onPress={() => Linking.openURL(linkGit + "pinheir0g/")} >
            <FontAwesome name="github" size={40} style={styles.iconGit} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(linkdin + "gustavopinheiro-/")}>
            <Entypo name="linkedin-with-circle" style={styles.iconLinkedin} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.contetEquipe}>
            <Image source={require('../../../assets/Matheus.png')} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Matheus Fonseca</Text>
            
            <View style={styles.conteinerIcon}>
            <TouchableOpacity onPress={() => Linking.openURL(linkGit + "Foncka")} >
            <FontAwesome name="github" size={40} style={styles.iconGit} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(linkdin + "matheusff002/")}>
            <Entypo name="linkedin-with-circle" style={styles.iconLinkedin} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.contetEquipe}>
            <Image source={require('../../../assets/Cassio.png')} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Cássio Penha</Text>
           
            <View style={styles.conteinerIcon}>
            <TouchableOpacity onPress={() => Linking.openURL(linkGit + "cassio-penha")} >
            <FontAwesome name="github" size={40} style={styles.iconGit} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(linkdin + "c%C3%A1ssio-penha-pcd/")}>
            <Entypo name="linkedin-with-circle" style={styles.iconLinkedin} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.contetEquipe}>
            <Image source={require('../../../assets/Kaiky.png')} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Kaiky azevedo</Text>
            
            <View style={styles.conteinerIcon}>
            <TouchableOpacity onPress={() => Linking.openURL(linkGit + "kaikyazz")} >
            <FontAwesome name="github" size={40} style={styles.iconGit} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(linkdin + "kaiky-azevedo-de-oliveira-a1b1492b8/")}>
            <Entypo name="linkedin-with-circle" style={styles.iconLinkedin} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.contetEquipe}>
            <Image source={require('../../../assets/Thiago.png')} style={styles.imgEquipe}/>
            <Text style={styles.textEquipe}>Thiago Moura</Text>
           
            <View style={styles.conteinerIcon}>
            <TouchableOpacity onPress={() => Linking.openURL(linkGit + "ThiagoSausmikat")} >
            <FontAwesome name="github" size={40} style={styles.iconGit} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(linkdin + "thiago-moura93/")}>
            <Entypo name="linkedin-with-circle" style={styles.iconLinkedin} />
            </TouchableOpacity>
            </View>
        </View>
       </ScrollView>

    </View>
    );
  }