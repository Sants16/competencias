import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 18px;
  margin-bottom: 18px;
`

export const Descricao = styled.Text`
  flex: 1;
  height: 56px;
  background-color: #121214;
  padding: 16px;
  border-radius: 5px;
  font-size: 13px;
  margin-right: 12px;
  color: #fff;
`

export const Botao = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: red;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

export const BotaoTexto = styled.Text`  
  color: #fff;
  font-size: 20px;
`

export const Icone = styled(FontAwesome).attrs({
  name: 'remove'
})`
  font-size: 20px;
  color: #e6e6e6;
`