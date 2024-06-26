// CustomDrawerContent.tsx
import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { ProductContext } from '../../contexts/produtoContext';

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { user, logout } = useContext(UserContext);
  const { setCategoria } = useContext(ProductContext);

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
        <DrawerItemList {...props} state={getFilteredRoutes(['Inicio', 'Equipe'])} />

        <TouchableWithoutFeedback onPress={() => { }}>
          <View style={styles.letterCategory}>
            <Text style={styles.category}>Categorias</Text>
          </View>
        </TouchableWithoutFeedback>
        <DrawerItem
          label="• Todos"
          onPress={() => setCategoria('')}
          labelStyle={styles.sair}
        />
        <DrawerItem
          label="• Pc"
          onPress={() => setCategoria('PC')}
          labelStyle={styles.sair}
        />
        <DrawerItem
          label="• Monitores"
          onPress={() => setCategoria('Monitor')}
          labelStyle={styles.sair}
        />
        <DrawerItem
          label="• Perifericos"
          onPress={() => setCategoria('Perifericos')}
          labelStyle={styles.sair}
        />
        <DrawerItem
          label="• Cadeiras"
          onPress={() => setCategoria('Cadeira')}
          labelStyle={styles.sair}
        />
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

