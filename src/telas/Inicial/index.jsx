import { Text, TextInput, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
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
          nivel: 'Iniciante'
        }
      ]
    )
    setDescricao('')
  }

  function excluirCompetencia(containerAdicionar) {
    const updateCompetencias = competencias.filter((compcontainerAdicionaretencia) => containerAdicionarcompetencia.nome !== nomeCompetencia)
    setCompetencias(updateCompetencias)
  }

    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>Meus conhecimentos</Text>
        <Text style={styles.subtitulo}>conhecimentos</Text>

        <View style={styles.containerAdicionar}>
          <TextInput
            style={styles.campo}
            placeholder='Informe a competência'
            placeholderTextColor='#e6e6e6'
            onChangeText={setDescricao}
            value={descricao}
          />
          <TouchableOpacity
            style={styles.botao}
            onPress={adicionarCompetencia}
          >
            <Text style={styles.botaoTexto}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={competencias}
          keyExtractor={ item => item }
          renderItem={ ({ item }) => (
            <Conhecimento key={item.nome} nome={item.nome} nivel={item.nivel} excluir={() => excluirCompetencia(item.nome)}/>
          )}
          ListEmptyComponent={ () => (
            <Text style={styles.listaVazia}>
              Nenhuma competência armazenada
            </Text>
          )}
        />

      </View>
    );
  }