const Groq = require('groq-sdk');

const groq = new Groq({apiKey: process.env.EXPO_PUBLIC_GROQ_KEY});
export async function generateText(texto: string) {
 try {
    const chatCompletion = await groq.chat.completions.create({
        "messages": [
          {
            "role": "user",
            "content": "quero te enviar um texto e quero que você resuma ele para mim"
          },
          {
            "role": "assistant",
            "content": "Por favor, envie o texto que você deseja que eu resuma! Estou aqui para ajudar!"
          },
          {
            "role": "user",
            "content": "Nos últimos 20 anos eu assisti a duas apresentações via YouTube de dois profissionais que me inspiram e que fizeram muita diferença no mundo, falando sobre um tema comum: a Morte. Foram eles Steve Jobs e Tom Keley.\nO primeiro, falava do valor da renovação que a morte oferece, o segundo falou da preocupação de deixar alguém que se ama, sem que se possa fazer algo.\nMas o ponto do discurso de ambos que me chamou mais a atenção, foi reforçado por uma experiência que passei no finalzinho de 2014, 30 de dezembro, sendo específico, quando fui submetido a uma cirurgia que deveria ter sido simples para corrigir uma fratura de mandíbula: o procedimento ficou complexo no meio do caminho, vulnerabilidade e reação. \nÀ parte detalhes de minha cirurgia, ambos dizem mais ou menos isso: você já está nu, seu sobrenome pessoal e/ou institucional não fazem qualquer diferença e já não depende mais apenas de você.\nTom Keley é ainda mais cruel, talvez por ser um pouco mais humano, ele tem aquele olhar de Experiência de Usuário, e foi além: “você está cercado por outras pessoas também de camisola e bunda de fora, algumas amareladas e outras acinzentadas e sabe que boa parte delas talvez não saia viva de lá; não sei se eu sairei”.\nCurioso, mas meu caso sendo muitíssimo mais simples que o deles inspirou a mesma sensação e parte da reação: o que eu posso fazer para sobreviver a isso?\nTive uma recuperação fora do padrão segundo os médicos, talvez pela vontade de sair rápido do hospital, vontade de passar o reveillon em casa, ainda que longe dos meus filhos e neta, mas em casa. Talvez porque fora de lá eu me sentisse com uma primeira de algumas vitórias que teria de travar por pelo menos 18 meses, talvez porque a noção de tempo e de importância das coisas ficou um pouco distorcida em relação a antes da anestesia geral (aliás como isso é bom, foi minha primeira vez!). "
          },
          {
            "role": "assistant",
            "content": "Aqui está um resumo do seu texto:\n\nO autor reflete sobre a morte e a vulnerabilidade após assistir a dois vídeos de Steve Jobs e Tom Keley, que falavam sobre o tema. Ele compartilha sua própria experiência de uma cirurgia complexa em 2014, que o fez sentir-se nu e vulnerável. Ele se identificou com as palavras de Tom Keley, que disse que estamos cercados por outras pessoas que também estão vulneráveis e que não sabemos se vamos sair vivos. O autor então questiona o que pode fazer para sobreviver e superar desafios. Ele conta que teve uma recuperação acima do padrão, motivado por sua vontade de sair do hospital e viver momentos importantes com sua família."
          },
          {
            "role": "user",
            "content": texto,
          },
        ],
        "model": "llama-3.1-70b-versatile",
      });
    
    return chatCompletion.choices[0]?.message?.content;
 }catch(error){
    return 'Erro ao gerar resumo'
 }
}
 
