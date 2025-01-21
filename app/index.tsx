import { generateText } from '@/service/ai/generator'
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from '@/styles'
import { useState } from "react";
import { MotiView, ScrollView } from 'moti';

export default function Index() {
  const [resumo, setResumo] = useState('')
  const [resposta, setResposta] = useState('')
  const [loading, setLoading] = useState(false)

  const gerarResumo = async() => {
    setLoading(true)
    setResposta('')

    if(resumo.length < 5){
      alert('Digite um texto para resumir')
      return
    }
    try {
      const result = await generateText(resumo);
      setResposta(result)
    } catch (error) {
    alert('Erro ao gerar resumo')
    }finally{
      setLoading(false)
    }
  }

  return (
    <ScrollView >
      <View style={styles.container}>
      <Text style={styles.titulo}>Resumator</Text>
      <Text style={styles.subtitulo}>Resuma textos longos para ter uma leitura mais rapida e agradavel</Text>
      <TextInput
      onChangeText={setResumo}
      value={resumo}
      style={styles.input}
      placeholder="Texto para resumir">
      </TextInput>
      <TouchableOpacity style={styles.botão} onPress={gerarResumo}>
        <Text style={styles.botãoText}>{loading ?'Carregando...' : 'Gerar Resumo'}</Text>
      </TouchableOpacity>

      {resposta && (
        <MotiView 
        style={styles.card}
        from={{ opacity: 0, translateY: 200 }}
        animate={{ opacity: 1, translateY: 0 }}
        >        
        <Text style={styles.cardTitle}>Seu texto esta pronto: </Text>
        <Text style={styles.cardText}>{resposta}</Text>
      </MotiView>
      )}
    </View>
    </ScrollView>
  );
}
