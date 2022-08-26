import { Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { useState } from 'react';
import { Conhecimento } from '../../componentes/Conhecimento';
import { styles } from './estilos'

export const Inicial = () => {

  const [descricao, setDescricao] = useState('')
  const [competencias, setCompetencias] = useState([])

  function adicionarCompetencia() {
    setCompetencias(
      [...competencias, 
        {
          nome: descricao,
          nivel: 'penis'
        }
      ]
    )
    setDescricao('')
  }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Meus conhecimentos</Text>
        <Text style={styles.subtitulo}>conhecimentos</Text>

        <TextInput 
          style={styles.campo} 
          placeholder='Informe a competência' 
          placeholderTextColor='#121214'
          onChangeText={setDescricao}
          value={descricao}
        />

        <TouchableOpacity 
          style={styles.botao}
          onPress={adicionarCompetencia}
        >
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>

        <ScrollView>
        {
          competencias.map( ({ nome, nivel }) => <Conhecimento key={nome} nome={nome} nivel={nivel}/> )
        }
        </ScrollView>
        
      </View>
    );
  }