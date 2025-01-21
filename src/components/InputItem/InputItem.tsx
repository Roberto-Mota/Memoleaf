import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import React from "react";

type Props = {
  nomeAtividade: string;
  checado: boolean;
  HandlerRightInteraction: () => void;
  HandlerLeftInteraction: () => void;
};

export function InputItem(props: Props) {

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity
        onPress={props.HandlerLeftInteraction}
        style={[styles.checkboxContainer, { marginHorizontal: 6 }]}>
         <Text style={styles.buttonCheckedText}>{props.checado ? `☑` : `☐`}</Text>
      </TouchableOpacity>
      <View style={styles.input}>
        <Text style={styles.mainText}>
          {props.nomeAtividade}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => props.HandlerRightInteraction()}
        style={[styles.buttonPlus, { marginLeft: 0 }]}>
        <Text style={styles.buttonMinusText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
