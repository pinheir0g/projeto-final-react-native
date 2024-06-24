import React, { useState } from 'react'
import {ActivityIndicator, Image, View} from 'react-native'
import {styles} from './styles'

export const Logo = () => {

    const [isLoading, setLoading] = useState(true);

    return (
        <View style={styles.containerLogo}>
            {isLoading && <ActivityIndicator size="small" color="white" />}
            <Image
                source={require('../../../assets/LOGO.png')}
                style={styles.logo}
                onLoad={() => setLoading(false)}
                onLoadEnd={() => setLoading(false)}
            />
        </View>
    );
};