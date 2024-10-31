import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA', // lavanda claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoVoltar: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  input: {
    height: 40,
    borderColor: '#D8BFD8', // lavanda média
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: 200,
    backgroundColor: '#F8F8FF', // fundo branco fantasma
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7B68EE', // lavanda escura
  },
  temporizador: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40, // maior espaço abaixo do temporizador
    color: '#9370DB', // lavanda moderada
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    color: '#7B68EE', // lavanda escura
    marginTop: 20, // espaçamento entre o temporizador e os botões
  },
  botao: {
    backgroundColor: '#7B68EE', // lavanda escura
    padding: 10,
    borderRadius: 5,
    width: 90, // define a largura fixa dos botões
    alignItems: 'center', // centraliza o texto dentro dos botões
  },
  botaoTexto: {
    color: '#FFFFFF', // texto branco nos botões
    fontWeight: 'bold',
  },
  botaoLoginAdicionar: {
    backgroundColor: '#7B68EE', // lavanda escura
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 200, // largura ajustada para se adequar aos botões de login e adicionar
    alignItems: 'center', // centraliza o texto dentro dos botões
  },
  // Novos estilos para o PomodoroView
  textoConometro: {
    fontSize: 48,
    marginBottom: 20,
    color: '#7B68EE', // lavanda escura para o texto do cronômetro
  },
  botoesConteiner: {
   flexDirection: 'row',
    justifyContent: 'center', // Centraliza os botões
    width: '100%', // Define a largura total
    marginTop: 20, // Espaçamento entre o cronômetro e os botões
  },
    botoesMenor: {
    backgroundColor: '#7B68EE', // lavanda escura
    padding: 8, // Menor padding para botões menores
    borderRadius: 5,
    marginHorizontal: 10, // Espaçamento horizontal entre os botões
    width: 80, // Largura ajustada para botões menores
    alignItems: 'center', // Centraliza o texto dentro dos botões
  },
});
