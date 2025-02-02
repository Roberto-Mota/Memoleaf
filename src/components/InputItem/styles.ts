import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#182913',
    padding: 24
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
  },


  input: {
    backgroundColor: '#292621',
    color: 'white',
    padding: 12,
    height: 56,
    width: '70%',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
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
    paddingTop: 3,
    paddingLeft: 6
  },

  checkboxContainer: {
    width: 45,
    height: 56,
    borderRadius: 0, // Remove bordas arredondadas padrão
    borderTopLeftRadius: 24, // Curva acentuada no topo esquerdo
    borderBottomRightRadius: 24, // Curva acentuada no fundo direito
    backgroundColor: '#292621',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  buttonCheckedText: {
    color: '#D3CBB8',
    fontSize: 32,
  },

  buttonPlus: {
    width: 45,
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