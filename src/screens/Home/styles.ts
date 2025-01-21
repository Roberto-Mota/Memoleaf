import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3B29',
    padding: 12
  },

  title: {
    color: '#D3CBB8',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 16,
  },

  inputContainer: {
    width: '100%',
    flexDirection: 'row',
  },


  input: {
    backgroundColor: '#363E33',
    color: 'white',
    padding: 12,
    height: 56,
    width: '80%',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 16,
    borderRadius: 0, // Remove bordas arredondadas padrão
    borderTopLeftRadius: 24, // Curva acentuada no topo esquerdo
    borderBottomRightRadius: 24, // Curva acentuada no fundo direito
    borderWidth: 2, // Adiciona uma borda para destaque
    borderColor: '#5B6644', // Cor da borda para imitar folhas
    shadowColor: '#000', // Adiciona uma leve sombra para profundidade
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, // Sombra para Android
  },

  buttonPlus: {
    width: 56,
    height: 56,
    borderRadius: 0, // Remove bordas arredondadas padrão
    borderTopRightRadius: 32, // Curva acentuada no topo direito
    borderBottomLeftRadius: 32, // Curva acentuada no fundo esquerdo
    backgroundColor: '#237229',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  buttonPlusText: {
    color: '#D3CBB8',
    fontSize: 32,
  },

  emptyText: {
    marginTop: 24,
    color: '#A39785',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  }


});