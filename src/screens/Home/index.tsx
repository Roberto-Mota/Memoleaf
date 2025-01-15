import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputItem } from "../../components/InputItem/InputItem";
import { styles } from "./styles";
import React, { useState } from "react";
import { LeafInput } from "../../components/LeafInput/LeafInput";
// import Icon from '@react-native-vector-icons/evil-icons';

const atividadesListTest = ["Atividade 1", "Atividade 2", "Atividade 3", "Atividade 4", "Atividade 5"];
type Atividade = {
  nome: string;
  checked: boolean;
};
export function Home() {

  const [atividadeCadastrada, setAtividadeCadastrada] = useState<Atividade | null>(null);
  const [atividades, setAtividades] = useState<Atividade[]>([]); //typar com array de objeto Atividade

  function handleBotaoAdd() {
    console.log("Atividade cadastrada na hora: ", atividadeCadastrada);
    //function encontrarObjetoPorNome(lista: MeuObjeto[], nomeProcurado: string): MeuObjeto | undefined {
      if (atividades?.find((obj) => obj.nome === atividadeCadastrada?.nome)){
      return Alert.alert(`A atividade "${atividadeCadastrada?.nome}" já está cadastrada`);
    }
    // "Dentro do estado tem uma função que da pra ser recuperada com o nome que quiser (arrow function)
    atividadeCadastrada && setAtividades(prevAtividades => [...prevAtividades, atividadeCadastrada]); // Forma wtf ?
    //setAtividades([...atividades, "Atividade 12"]);
    //atividades.push("Atividade 12"); antes de usar useState
    console.log(atividades);
    setAtividadeCadastrada(null); // Limpa a caixa de texto depois de setar
  }

  function handleBotaoDelete(item: Atividade) {
    return Alert.alert("Are you sure?", `Mensagem descritiva para remover -> ${item.nome}`, 
    [
      {
        text: "Sim",
        onPress: () => setAtividades(estadoPrevio => estadoPrevio.filter(atividade => atividade.nome !== item.nome)),
        //Alert.alert("Deletado!"),
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


//setAtividades(estadoPrevio => estadoPrevio.filter(atividade => atividade !== nome))
        //Alert.alert("Deletado!"),
     }



  function handleState(novoTexto: string) {
    setAtividadeCadastrada({ nome: novoTexto, checked: false });
    console.log(novoTexto);
    console.log(atividadeCadastrada);
    //throw new Error("Function not implemented.");
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.title}>Nome da atividade</Text>
        {/* <LeafInput placeholder="Digite o nome da atividade" value={atividadeCadastrada} onChange={handleState} /> */}
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.input} 
          placeholder="Digite o nome da atividade"
         placeholderTextColor={"#D9D1BC"}
          // o onChangeText disponibiliza o conteudo da caixa de texto,
          // no caso eu setei como "novoTexto" e, com ele, eu seto o estado
          // da atividadeCadastrada
          onChangeText={userInput => handleState(userInput)}
          value={atividadeCadastrada?.nome || ""} // Como limpa na função, value é atualizado e limpa o campo (value é o campo em si mesmo -?-)
          />

<TouchableOpacity onPress={handleBotaoAdd} style={styles.buttonPlus}>
            <Text style={styles.buttonPlusText}>+</Text>
            {/* Lorem <Icon name="" color="#4F8EF7" /> Ipsum */}
          </TouchableOpacity>
        </View>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
        {atividades.map((atividade) => (
          <InputDelete key={atividade} nomeAtividade={atividade} />
          ))}
          </ScrollView> */}

          <FlatList
            data={atividades}
            keyExtractor={(item) => item.nome} // Pego o próprio item como key, poderia ser algo como item => item.descricao
            renderItem={({ item }) => (
              //item &&
            <InputItem
              key={item + "1"}
              nomeAtividade={item.nome}
              //HandlerRightInteraction={() => console.log("Hello World -> " + item)}
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
