import * as S from './estilos'

export const Conhecimento = ({ nome, nivel, excluir }) => {
    return(
        <S.Container>

            <S.ContainerCompetencia>
                <S.Descricao> { nome } </S.Descricao>
                <S.Nivel> { nivel } </S.Nivel>

                <S.Botao onPress={excluir}>
                    <S.Icone/>
                </S.Botao>
            </S.ContainerCompetencia>

        </S.Container>
    )
}