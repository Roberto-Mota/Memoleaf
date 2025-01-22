import React from 'react';
import { View, Text } from 'react-native';
import { styles } from "./styles";

type ProgressBarProps = {
  titulo: string,
  totalAtividades: number,
  atividadesChecked: number,
}

//TODO:
// animação de transição

export function ProgressBar(props: ProgressBarProps) {

  const porcentagemConcluida = Math.round((props.atividadesChecked / props.totalAtividades) * 100);

  if (props.totalAtividades > 0) {
    return (
      <>
      <Text style={styles.title}>{props.titulo}</Text>
        <View style={[styles.ProgressBar, { backgroundColor: '#5B6644', width: '100%', height: 56, borderWidth: 4, overflow: 'hidden', }]}>
          <View style={[styles.ProgressBar, { backgroundColor: '#237229', position: 'absolute', width: `${porcentagemConcluida}%`, height: 56 }]}>
            <Text style={{position: 'absolute'}}>{porcentagemConcluida}% ({props.atividadesChecked}/{props.totalAtividades})</Text>
          </View>
        </View>

      </>
    );
  }

  return (<></>)
}
