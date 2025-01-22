
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  title: {
    color: '#D3CBB8',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 16,
  },

ProgressBar: {
    width: 56,
    height: 56,
    borderRadius: 0, // Remove bordas arredondadas padrão
    borderTopRightRadius: 32, // Curva acentuada no topo direito
    borderBottomLeftRadius: 32, // Curva acentuada no fundo esquerdo
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    
    borderColor: '#5B6644', // Cor da borda para imitar folhas
    shadowColor: '#000', // Adiciona uma leve sombra para profundidade
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, // Sombra para Android
  },
})