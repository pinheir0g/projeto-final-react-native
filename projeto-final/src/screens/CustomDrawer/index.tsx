// CustomDrawerContent.tsx
import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

export default function CustomDrawerContent(props : DrawerContentComponentProps) {
  const { user, logout } = useContext(UserContext);

    const getFilteredRoutes = (routesToInclude: string[]) => {
      return {
          ...props.state,
          routes: props.state.routes.filter(route => routesToInclude.includes(route.name)),
      };
  };

  return (
  <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
    <View style={styles.perfil}>
      <FontAwesome name="user-circle" size={38} color="#FF7B17" />
      <Text style={styles.nomePerfil}>
        {user?.nome}
      </Text>
    </View>
    <View style={styles.drawerItemList}>
        <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.letterCategory}>
                <Text style={styles.category}>Categoria</Text>
            </View>
        </TouchableWithoutFeedback>
        <DrawerItemList {...props} state={getFilteredRoutes([ 'Produtos', 'Monitor', 'Perifericos', 'Cadeira', 'Equipe'])} />
    </View>
    <View style={styles.bottomSair}>
        <DrawerItem
            label="Sair"
            onPress={logout}
            labelStyle={styles.sair}
        />
    </View>
  </DrawerContentScrollView>
);
}

