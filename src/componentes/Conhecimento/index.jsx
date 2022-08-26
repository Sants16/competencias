import { View, Text } from 'react-native'
import { styles } from './estilos'

export const Conhecimento = ({ nome, nivel }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.descricao}> { nome } </Text>
            <Text style={styles.descricao}>{ nivel }</Text>
        </View>
    )
}