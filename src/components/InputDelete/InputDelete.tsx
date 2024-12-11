import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

type Props = {
  // Ts me força a criar esse objeto e passar ele como referencia ali no espaço de props do componente
  nomeAtividade: string;
  handlerParent: (nomeAtividade: string) => void;
};

export function InputDelete(props: Props) {
  // posso usar props ou spread operator, prefiro props

  function handleBotaoHome(nomeAtividade: string) {
    console.log("Hello World -> " + props.nomeAtividade);
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.input}>
        <Text style={styles.mainText}>
          {props.nomeAtividade}
        </Text>
      </View>

      <TouchableOpacity
      //onPress={() => handleBotaoHome(props.nomeAtividade)}
      onPress={() => props.handlerParent(props.nomeAtividade)}
      style={styles.buttonPlus}>
        <Text style={styles.buttonMinusText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
