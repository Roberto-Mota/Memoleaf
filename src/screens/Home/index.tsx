import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputDelete } from "../../components/InputDelete/InputDelete";
import { styles } from "./styles";
import { useState } from "react";
import { LeafInput } from "../../components/LeafInput/LeafInput";

const atividadesListTest = ["Atividade 1", "Atividade 2", "Atividade 3", "Atividade 4", "Atividade 5"];

export function Home() {

  const [atividadeCadastrada, setAtividadeCadastrada] = useState('');
  const [atividades, setAtividades] = useState<string[]>([]); //typar com array de string

  function handleBotaoAdd() {
    if (atividades.includes(atividadeCadastrada)) {
      return Alert.alert(`A atividaide "${atividadeCadastrada}" já está cadastrada`);
    }


    // "Dentro do estado tem uma função que da pra ser recuperada com o nome que quiser (arrow function)
    setAtividades(estadoPrevio => [...estadoPrevio, atividadeCadastrada]); // Forma wtf ?
    //setAtividades([...atividades, "Atividade 12"]);
    //atividades.push("Atividade 12"); antes de usar useState
    console.log(atividades);
    setAtividadeCadastrada(''); // Limpa a caixa de texto depois de setar
  }

  function handleBotaoDelete(nome: string) {
    return Alert.alert("Are you sure?", `Mensagem descritiva para remover -> ${nome}`, 
    [
      {
        text: "Sim",
        onPress: () => setAtividades(estadoPrevio => estadoPrevio.filter(atividade => atividade !== nome)),
        //Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
        onPress: () => console.log("Não"),
      }
    ]);
  }

  function handleState(novoTexto: string) {
    setAtividadeCadastrada(novoTexto)
    console.log(novoTexto);
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
          value={atividadeCadastrada} // Como limpa na função, value é atualizado e limpa o campo (value é o campo em si mesmo -?-)
          />

          <TouchableOpacity onPress={handleBotaoAdd} style={styles.buttonPlus}>
            <Text style={styles.buttonPlusText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
        {atividades.map((atividade) => (
          <InputDelete key={atividade} nomeAtividade={atividade} />
          ))}
          </ScrollView> */}

          <FlatList
            data={atividades}
            keyExtractor={(item) => item} // Pego o próprio item como key, poderia ser algo como item => item.descricao
            renderItem={({ item }) => (
              //item &&
            <InputDelete
              key={item + "1"}
              nomeAtividade={item}
              //handlerParent={() => console.log("Hello World -> " + item)}
              handlerParent={() => handleBotaoDelete(item)}
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
