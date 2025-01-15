import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import React from "react";

type Props = {
  // Ts me força a criar esse objeto e passar ele como referencia ali no espaço de props do componente
  nomeAtividade: string;
  HandlerRightInteraction: (nomeAtividade: string) => void;
  HandlerLeftInteraction: () => void;
};

export function InputItem(props: Props) {
  // posso usar props ou spread operator, prefiro props

  function handleBotaoHome(nomeAtividade: string) {
    console.log("Hello World -> " + props.nomeAtividade);
  }

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity
        //onPress={() => handleBotaoHome(props.nomeAtividade)}
        onPress={() => props.HandlerLeftInteraction(props.nomeAtividade)}
        style={[styles.checkboxContainer, { marginHorizontal: 6 }]}>
        <Text style={styles.buttonMinusText}>✓</Text>
      </TouchableOpacity>
      <View style={styles.input}>
        <Text style={styles.mainText}>
          {props.nomeAtividade}
        </Text>
      </View>
      <TouchableOpacity
        //onPress={() => handleBotaoHome(props.nomeAtividade)}
        onPress={() => props.HandlerRightInteraction(props.nomeAtividade)}
        style={[styles.buttonPlus, { marginLeft: 0 }]}>
        <Text style={styles.buttonMinusText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
