import { StyleSheet } from "react-native";

const StatsKillsStyle = StyleSheet.create({

    //ESTILIZAÇÃO DE INFORMAÇÕES DO CS
    principal_container: {
        flex: 1
    },
    kill_death_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '7%'
    },
    kill_death_linha: {
        borderLeftWidth: 1, // Espessura da linha
        borderLeftColor: 'black', // Cor da linha (preto neste exemplo, pode alterar para a cor desejada)
        height: 50, // Altura da linha (ajuste conforme necessário)
    },
    proporcao_kd_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
    },
    view_grafico:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '10%'
    },
    grafico_acerto_disparo:{
        width: 300,
        height: 300,
    },
    view_grafico_arma_usada:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%',
        marginBottom: '10%'
    },
    imagem_arma_mais_usada:{
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    view_imagem_final_tela:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem_final_tela:{
        width: 400, 
        height: 300, 
        resizeMode: 'contain',
        marginTop: '30%'
    },
    view_arma_mais_usada:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%'
    },
    view_arma_mais_disparada:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    }

})

export default StatsKillsStyle