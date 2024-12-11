import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // borderRadius: 5,
    flex: 1,
    backgroundColor: '#182913',
    padding: 24
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },

  title: {
    color: '#2fa538',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },

  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: '#182913',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },


  input: {
    backgroundColor: '#292621',
    color: 'white',
    padding: 12,
    height: 56,
    width: '80%',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 16,
    borderRadius: 0, // Remove bordas arredondadas padrão
    borderTopRightRadius: 32, // Curva acentuada no topo direito
    borderBottomLeftRadius: 32, // Curva acentuada no fundo esquerdo
    borderWidth: 2, // Adiciona uma borda para destaque
    borderColor: '#5B6644', // Cor da borda para imitar folhas
    shadowColor: '#000', // Adiciona uma leve sombra para profundidade
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, // Sombra para Android
  },

  mainText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonPlus: {
    width: 56,
    height: 56,
    borderRadius: 0, // Remove bordas arredondadas padrão
    borderTopLeftRadius: 24, // Curva acentuada no topo esquerdo
    borderBottomRightRadius: 24, // Curva acentuada no fundo direito
    backgroundColor: '#924C32',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  buttonMinusText: {
      color: '#D3CBB8',
      fontSize: 32,
      fontWeight: 'bold',
    },
});