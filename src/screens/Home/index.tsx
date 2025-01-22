import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputItem } from "../../components/InputItem/InputItem";
import { styles } from "./styles";
import React, { useState } from "react";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";

type Atividade = {
  nome: string;
  checked: boolean;
};
export function Home() {

  const [atividadeCadastrada, setAtividadeCadastrada] = useState<Atividade | null>(null);
  const [atividades, setAtividades] = useState<Atividade[]>([]);

  function handleBotaoAdd() {
    console.log("Atividade cadastrada na hora: ", atividadeCadastrada);
    if (atividades?.find((obj) => obj.nome === atividadeCadastrada?.nome)) {
      return Alert.alert(`A atividade "${atividadeCadastrada?.nome}" já está cadastrada`);
    }

    atividadeCadastrada && setAtividades(prevAtividades => [...prevAtividades, atividadeCadastrada]);
    console.log(atividades);
    setAtividadeCadastrada(null);
  }

  function handleBotaoDelete(item: Atividade) {
    return Alert.alert("Are you sure?", `Mensagem descritiva para remover -> ${item.nome}`,
      [
        {
          text: "Sim",
          onPress: () => setAtividades(estadoPrevio => estadoPrevio.filter(atividade => atividade.nome !== item.nome)),
        },
        {
          text: "Não",
          style: "cancel",
          onPress: () => console.log("Não"),
        }
      ]);
  }

  function handleBotaoCheck(item: Atividade) {
    setAtividades(estadoPrevio => estadoPrevio.map(atividade => {
      if (atividade.nome === item.nome) {
        return { ...atividade, checked: !atividade.checked };
      }
      return atividade;
    }));
  }

  function handleState(novoTexto: string) {
    setAtividadeCadastrada({ nome: novoTexto, checked: false });
    console.log(novoTexto);
    console.log(atividadeCadastrada);
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.progressBarContainer}>
          <ProgressBar titulo={`Atividades Concluídas`}  totalAtividades={atividades.length} atividadesChecked={atividades.filter(atividade => atividade.checked).length}  />
        </View>
        <Text style={styles.title}>Nome da atividade</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome da atividade"
            placeholderTextColor={"#D9D1BC"}
            onChangeText={userInput => handleState(userInput)}
            value={atividadeCadastrada?.nome || ""}
          />

          <TouchableOpacity onPress={handleBotaoAdd} style={styles.buttonPlus}>
            <Text style={styles.buttonPlusText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={atividades}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <InputItem
              key={item + "1"}
              nomeAtividade={item.nome}
              checado={item.checked}
              HandlerRightInteraction={() => handleBotaoDelete(item)}
              HandlerLeftInteraction={() => handleBotaoCheck(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => {
            return (
              <Text style={styles.emptyText}> Nenhuma atividade encontrada</Text>
            );
          }}
        />
      </View>
    </>
  );
}
