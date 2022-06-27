import React from 'react';
import { View, Text} from 'react-native';

import styles from "./styles";

const Card = ({titulo, children}) => {
    return (
        <View style={styles.card_container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text>{titulo}</Text>
                </View>
                <View style={styles.card_content}>
                    {children}
                </View>
            </View>
        </View>

    )
}

export default Card