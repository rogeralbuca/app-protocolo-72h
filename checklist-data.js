const checklistData = [
  {
    pillar: "Fase 0: Diagnóstico e Comando",
    icon: "shield-halved",
    description: "Evite a paralisia emocional na hora da crise. Defina a estrutura e as funções da sua família agora.",
    items: [
      {
        id: "f0_1",
        text: "Definir o Líder da família (responsável pela tomada de decisão final sobre ficar em casa ou evacuar).",
        tip: "A liderança clara evita o pânico e conflitos em momentos de alta tensão."
      },
      {
        id: "f0_2",
        text: "Definir o Abastecedor da família (responsável por estocar água imediatamente se um gatilho for acionado).",
        tip: "Essa pessoa deve saber exatamente onde estão todos os recipientes de água limpos."
      },
      {
        id: "f0_3",
        text: "Definir o Sentinela da família (responsável por trancar acessos e bloquear a visibilidade de janelas).",
        tip: "O sentinela deve focar na segurança imediata do perímetro residencial."
      },
      {
        id: "f0_4",
        text: "Estabelecer um ponto de encontro interno seguro e de fácil acesso na residência.",
        tip: "Será o local de reunião de emergência para tomada de decisões sem ruído ou exposição."
      },
      {
        id: "f0_5",
        text: "Alinhar com toda a família os 3 gatilhos de Colapso Sistêmico: Falta de Luz + Falta de Água + Rede de Celular Instável.",
        tip: "Se os três gatilhos forem confirmados simultaneamente, o Protocolo 72H de emergência deve ser iniciado."
      }
    ]
  },
  {
    pillar: "Pilar 1: Água (Prioridade Máxima)",
    icon: "droplet",
    description: "Sem água, o corpo falha rapidamente. Garanta armazenamento e métodos de purificação eficientes.",
    items: [
      {
        id: "p1_1",
        text: "Adquirir e higienizar recipientes dedicados a estoque de água (galões de qualidade alimentícia, baldes com tampa).",
        tip: "Mantenha-os limpos e prontos para encher ao menor sinal de colapso."
      },
      {
        id: "p1_2",
        text: "Armazenar água limpa calculando 4 litros por pessoa ao dia (mínimo de 12 litros por pessoa para cobrir 72 horas).",
        tip: "Exemplo: Para uma família de 4 pessoas, garanta no mínimo 48 litros de água estocados."
      },
      {
        id: "p1_3",
        text: "Estocar insumos de purificação química: Pastilhas de Clorin, Hipoclorito de Sódio 2,5% ou Água Sanitária (pura e sem aroma).",
        tip: "Utilize 2 gotas de Hipoclorito de Sódio ou Água Sanitária por litro de água e aguarde 30 minutos antes de consumir."
      },
      {
        id: "p1_4",
        text: "Adquirir filtros de água portáteis de alta eficiência (ex: Sawyer Squeeze, LifeStraw) e guardá-los em local de fácil acesso.",
        tip: "Filtros mecânicos são excelentes para purificar água coletada de chuva ou fontes suspeitas sem depender de químicos."
      },
      {
        id: "p1_5",
        text: "Estocar pastilhas de Clorin ou solução de Iodo 2% (5 gotas por litro, aguardar 30 minutos).",
        tip: "Atenção: A purificação com Iodo não é recomendada para gestantes ou pessoas com problemas de tireoide."
      },
      {
        id: "p1_6",
        text: "Preparar e manter um local de armazenamento de água escuro, fresco e longe do chão direto para evitar algas.",
        tip: "A luz solar e o calor degradam recipientes plásticos e favorecem a proliferação de microorganismos."
      }
    ]
  },
  {
    pillar: "Pilar 2: Alimentação e Energia",
    icon: "bolt",
    description: "Mantenha a caloria alta e a exposição baixa. Evite depender da rede elétrica pública.",
    items: [
      {
        id: "p2_1",
        text: "Montar um estoque de alimentos de pronto consumo que não exigem cozimento (barras de proteína, castanhas, enlatados).",
        tip: "Mantenha alimentos ricos em calorias e sódio, que sustentam energia sem necessidade de fogo ou água para preparo."
      },
      {
        id: "p2_2",
        text: "Adquirir fontes de energia portátil carregadas: Power Banks de alta capacidade ou Power Stations portáteis.",
        tip: "Esses dispositivos manterão comunicadores, celulares e lanternas recarregáveis funcionando nas primeiras 72h."
      },
      {
        id: "p2_3",
        text: "Estocar pilhas extras de tamanhos compatíveis com suas lanternas e rádios, armazenadas em sacos impermeáveis (estanques).",
        tip: "A umidade destrói pilhas guardadas soltas. Sacos tipo ziploc são ótimos para proteção."
      },
      {
        id: "p2_4",
        text: "Adquirir lanternas de cabeça (headlamps) para cada membro da família para garantir mãos livres em tarefas no escuro.",
        tip: "Lanternas de cabeça permitem trabalhar na fortificação, primeiros socorros ou alimentação com total agilidade."
      },
      {
        id: "p2_5",
        text: "Providenciar filtros vermelhos ou fita adesiva escura para as lanternas da casa.",
        tip: "A luz vermelha reduz drasticamente o alcance da visibilidade externa e preserva a visão noturna da sua família."
      },
      {
        id: "p2_6",
        text: "Adquirir e manter carregado um rádio portátil de pilha ou manivela (recepção FM/AM e ondas curtas).",
        tip: "Em colapsos, o rádio de pilhas costuma ser a única fonte de notícias do governo ou de defesa civil."
      }
    ]
  },
  {
    pillar: "Pilar 3: Segurança e Discrição (Bug In)",
    icon: "eye-slash",
    description: "Invisibilidade é a sua melhor defense. Torne sua residência um alvo difícil e discreto.",
    items: [
      {
        id: "p3_1",
        text: "Preparar material para Blackout Total: cobertores escuros grossos, lonas pretas ou papelão sob medida para todas as janelas.",
        tip: "À noite, absolutamente nenhuma luz interna deve vazar para a rua, revelando que a casa possui recursos ou habitantes."
      },
      {
        id: "p3_2",
        text: "Providenciar fones de ouvido para todos os aparelhos eletrônicos e rádios da casa.",
        tip: "Qualquer ruído excessivo pode atrair atenção indesejada em um bairro silencioso e sem energia."
      },
      {
        id: "p3_3",
        text: "Adquirir calços de porta reforçados ou planejar quais móveis pesados serão usados para bloquear os acessos principais.",
        tip: "Fortificar portas atrasa tentativas de intrusão e dá tempo precioso para reação ou fuga."
      },
      {
        id: "p3_4",
        text: "Mapear e treinar com a família um 'Caminho de Fuga' interno e saídas alternativas caso o perímetro seja violado.",
        tip: "Todos devem saber exatamente para onde correr se a entrada principal for forçada."
      },
      {
        id: "p3_5",
        text: "Identificar como desativar fisicamente a campainha, alarmes sonoros automáticos ou luzes de sensor externo da casa.",
        tip: "Impeça barulhos ou acendimentos automáticos que entreguem a sua posição ou a presença de energia/bateria."
      }
    ]
  },
  {
    pillar: "Pilar 4: Mochila de Emergência (Bug Out Bag)",
    icon: "briefcase",
    description: "Sua vida em uma mochila de 72 horas para evasão silenciosa caso sua casa se torne insegura.",
    items: [
      {
        id: "p4_1",
        text: "Organizar cópias físicas de documentos importantes (RG, CNH, contratos) e dinheiro em notas baixas em saco estanque plástico.",
        tip: "Guarde sempre em notas de valor pequeno (R$ 5, R$ 10, R$ 20), pois ninguém terá troco em uma crise sistêmica."
      },
      {
        id: "p4_2",
        text: "Equipar a mochila com ferramentas críticas: Alicate Multitool, Canivete robusto ou faca de sobrevivência e isqueiros/pederneira.",
        tip: "Ferramentas confiáveis de corte, aperto e geração de faíscas são essenciais para improvisar abrigos ou manutenção básica."
      },
      {
        id: "p4_3",
        text: "Adquirir Fita Silver Tape de alta resistência e pelo menos 10 metros de corda Paracord 550.",
        tip: "Esses itens servem para prender lonas, consertar mochilas, estruturar macas ou amarrações diversas."
      },
      {
        id: "p4_4",
        text: "Adquirir e testar um fogareiro portátil compacto ou espiriteira a álcool, com suprimento de combustível (álcool > 65%).",
        tip: "Uma espiriteira a álcool simples consome cerca de 100ml de combustível para funcionar por aproximadamente 1 hora de cozimento."
      },
      {
        id: "p4_5",
        text: "Montar abrigo compacto: Lona leve (Tarp), saco de bivaque (Bivvy Bag) impermeável e manta térmica aluminizada.",
        tip: "Evite barracas pesadas. A lona e o bivvy mantêm você seco e protegido contra o vento de forma extremamente leve."
      },
      {
        id: "p4_6",
        text: "Adquirir isolante térmico de espuma (EVA) compacto ou rede de dormir leve para evitar contato direto com o solo úmido/frio.",
        tip: "O frio do solo drena a temperatura corporal rapidamente, levando à hipotermia e fadiga."
      },
      {
        id: "p4_7",
        text: "Montar Kit Médico de Controle de Hemorragias: Torniquete homologado (CAT ou SOFT-T), bandagem israelita e gaze hemostática.",
        tip: "Esse kit deve ser focado em trauma severo. Hemorragias massivas devem ser contidas em menos de 3 minutos."
      },
      {
        id: "p4_8",
        text: "Incluir no Kit Médico itens de Vias Aéreas/Respiração: Cânula nasofaríngea (se treinado) e selo de tórax (Chest Seal).",
        tip: "Ferimentos penetrantes no tórax exigem selagem para evitar colapso pulmonar (pneumotórax)."
      },
      {
        id: "p4_9",
        text: "Incluir luvas de nitrilo (mínimo 2 pares) e tesoura de trauma com ponta romba (para cortar roupas rapidamente sem ferir).",
        tip: "A segurança biológica do socorrista vem em primeiro lugar. A tesoura de trauma é vital para expor ferimentos."
      },
      {
        id: "p4_10",
        text: "Estocar medicamentos críticos: Analgésicos fortes, anti-histamínicos, antibióticos de largo espectro e medicação de uso contínuo.",
        tip: "Garanta uma reserva de pelo menos 7 a 15 dias de seus remédios de uso diário na mochila."
      },
      {
        id: "p4_11",
        text: "Calcular o peso total da mochila para garantir que não exceda 20% do peso corporal do portador.",
        tip: "Si você pesa 80 kg, sua mochila deve ter no máximo 16 kg. Mochilas excessivamente pesadas causam lesões e reduzem a mobilidade."
      }
    ]
  },
  {
    pillar: "Pilar 5: Mobilidade e Evasão (Bug Out Vehicle e Bug Out)",
    icon: "car",
    description: "Quando permanecer em casa se torna inviável. Garanta que seu veículo e rotas estejam prontos para partida imediata.",
    items: [
      {
        id: "p5_1",
        text: "Adotar a regra de manter o tanque de combustível do veículo sempre acima da metade (idealmente 75% ou cheio).",
        tip: "Postos de gasolina não funcionam sem energia elétrica. Você deve ter combustível suficiente para sair da zona urbana imediata."
      },
      {
        id: "p5_2",
        text: "Manter a manutenção preventiva do carro rigorosamente em dia (verificar óleo, fluído de arrefecimento e saúde da bateria).",
        tip: "Um carro quebrado no meio de uma evacuação urbana bloqueia rotas e coloca a família em extrema vulnerabilidade."
      },
      {
        id: "p5_3",
        text: "Criar o hábito de revisar semanalmente a calibragem de todos os pneus do carro, incluindo o estepe.",
        tip: "De nada adianta ter um pneu reserva se ele estiver murcho quando você mais precisar dele."
      },
      {
        id: "p5_4",
        text: "Montar um kit de ferramentas veicular robusto: Macaco funcional, chave de roda, triângulo e cabos de chupeta (jump start).",
        tip: "Tenha ferramentas que facilitem reparos rápidos na via sem depender de reboque."
      },
      {
        id: "p5_5",
        text: "Adquirir e armazenar com segurança um galão extra de combustível (homologado pelo INMETRO) e óleo lubrificante de reserva.",
        tip: "Combustível extra guardado com segurança em casa ou no carro aumenta o raio de alcance em rotas engarrafadas."
      },
      {
        id: "p5_6",
        text: "Providenciar mapas rodoviários físicos da sua região e traçar 3 rotas de fuga distintas (Principal, Alternativa e Emergência).",
        tip: "Sistemas de GPS por celular falharão se as torres de telefonia colapsarem. Mapas de papel não perdem o sinal."
      },
      {
        id: "p5_7",
        text: "Definir com a família um Ponto de Encontro Externo seguro fora da mancha urbana densa ou degradada.",
        tip: "Esse deve ser o destino final da evacuação, como uma chácara, casa de parentes no interior ou área segura definida."
      },
      {
        id: "p5_8",
        text: "Separar roupas discretas, calçados resistentes e mochilas de cores sóbrias seguindo o conceito 'Gray Man' (Homem Cinza).",
        tip: "Evite camuflagens ou designs militares que possam te destacar como um alvo de interesse ou gerar suspeitas na multidão."
      }
    ]
  },
  {
    pillar: "Pilar 6: Destino Seguro (Bug Out Location)",
    icon: "home",
    description: "Estabeleça e prepare o seu porto seguro fora das grandes cidades. O destino final da sua evasão rápida (GOOD).",
    items: [
      {
        id: "p6_1",
        text: "Selecionar e mapear a Bug Out Location (BOL) a uma distância segura dos grandes centros urbanos (idealmente de 50km a 120km).",
        tip: "Pode ser um sítio de parentes, chácara própria ou abrigo estruturado. Deve ser alcançável com um tanque de combustível."
      },
      {
        id: "p6_2",
        text: "Abastecer previamente a BOL com insumos essenciais de sobrevivência para pelo menos 15 a 30 dias (alimentos secos, enlatados e água).",
        tip: "Armazene os itens em tambores plásticos herméticos para protegê-los de umidade e roedores."
      },
      {
        id: "p6_3",
        text: "Garantir fontes locais e autossuficientes de água na BOL (poço artesiano, nascente protegida, captação de chuva ou cisterna).",
        tip: "Não dependa da rede elétrica pública para bombear água. Mantenha bombas manuais ou geradores dedicados."
      },
      {
        id: "p6_4",
        text: "Preparar infraestrutura básica de aquecimento, iluminação e preparo de alimentos offline (ex: fogão a lenha, gerador solar ou gás de reserva).",
        tip: "Estoque lenha seca sob cobertura e tenha ferramentas manuais para corte (machado, serrote)."
      },
      {
        id: "p6_5",
        text: "Mapear a segurança do perímetro da BOL, reforçando acessos físicos e bloqueando visibilidade externa.",
        tip: "Tenha trancas reforçadas e planeje barreiras visuais e físicas discretas ao redor do local."
      },
      {
        id: "p6_6",
        text: "Montar o kit GOOD (Get Out Of Dodge) focado em mobilidade tática ultrarrápida, rotas secundárias e velocidade.",
        tip: "O kit GOOD prioriza a velocidade máxima para romper bloqueios urbanos e alcançar a BOL antes do fechamento de estradas."
      },
      {
        id: "p6_7",
        text: "Estabelecer canais e frequências de rádio de emergência (PX, rádio amador ou rádio VHF/UHF) na BOL para comunicação regional.",
        tip: "Garanta que as pessoas que já moram ou estão no local saibam quais frequências monitorar em dias específicos de colapso."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = checklistData;
} else {
  window.checklistData = checklistData;
}
