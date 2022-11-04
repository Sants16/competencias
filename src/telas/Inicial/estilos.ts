import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex: 1;
  background-color: #333;
  text-align: center;
`

export const Titulo = styled.Text`
  background-color: purple;
  padding-top: 10px;
  color: #e6e6e6;
  text-align: center;
  font-weight: 900;
  font-size: 30px;
`

export const Subtitulo = styled.Text`
  background-color: purple;
  color: #e6e6e6;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  padding-bottom: 10px;
`

export const ContainerAdicionar = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 18px;
  margin-bottom: 18px;
`

export const Campo = styled.TextInput.attrs({
  placeholder: 'Informe a competência',
  placeholderTextColor: '#e6e6e6',
})`
  flex: 1;
  height: 56px;
  background-color: black;
  padding: 16px;
  border-radius: 5px;
  font-size: 13px;
  margin-right: 12px;
  border-width: 1px;
  border-color: white;
  color: #fff;
`

export const Botao = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: green;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

export const BotaoTexto = styled.Text`
  color: #fff;
  font-size: 20px;
`

export const Lista = styled.FlatList``

export const ListaVazia = styled.Text`
  color: #e6e6e6;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`

export const Icone = styled(FontAwesome).attrs({
  name: 'check'
})`
  font-size: 20px;
  color: #e6e6e6;
`