/**
 * SEÇÕES - Dados das seções do site
 */

export const services = [
  { id: 1, name: 'Sites & Vitrines' },
  { id: 2, name: 'Google Meu Negócio' },
  { id: 3, name: 'Fotos & Vídeos' },
  { id: 4, name: 'Anúncios Pagos' },
  { id: 5, name: 'Sistemas & Painéis' },
  { id: 6, name: 'Manutenção' },
];

export const differentials = [
  {
    id: 1,
    title: 'Veja antes de pagar',
    description: 'Mostre como quer. A gente cria. Você aprova o resultado. Só paga quando está feliz.',
    icon: 'eye',
  },
  {
    id: 2,
    title: 'Suporte dedicado',
    description: 'Nosso time cuida pessoalmente. Não é fila de ticket. É resposta direta e rápida.',
    icon: 'headset',
  },
  {
    id: 3,
    title: 'Manutenção incluída',
    description: 'Primeira revisão grátis. Depois oferecemos planos mensais acessíveis. Sem surpresas.',
    icon: 'wrench',
  },
];

export const servicesCreate = [
  {
    id: 1,
    title: 'Sites & Vitrines',
    description: 'Site profissional, responsivo e otimizado. Converte visitantes em clientes.',
    span: 1,
    icon: 'globe',
  },
  {
    id: 2,
    title: 'Fotos & Vídeos',
    description: 'Conteúdo profissional para suas redes, site e campanhas de marketing.',
    span: 1,
    icon: 'camera',
  },
  {
    id: 3,
    title: 'Domínio & Hospedagem',
    description: 'Registramos, configuramos, cuidamos. Você só usa.',
    span: 1,
    icon: 'server',
  },
  {
    id: 4,
    title: 'SEO Otimizado',
    description: 'Seu site aparece nos resultados do Google. Clientes te encontram naturalmente.',
    span: 1,
    icon: 'search',
  },
];

export const servicesMaintain = [
  {
    id: 1,
    title: 'Conteúdo Mensal',
    description: 'Posts, fotos, vídeos. Seu negócio ativo nas redes.',
    span: 1,
    icon: 'edit-3',
  },
  {
    id: 2,
    title: 'Anúncios Pagos',
    description: 'Google e Facebook. Criamos, testamos, otimizamos. Você vê resultados.',
    span: 1,
    icon: 'trending-up',
  },
  {
    id: 3,
    title: 'Sistema de Agendamentos',
    description: 'Seu cliente marca online. Você recebe automaticamente. Sem WhatsApp bagunçado.',
    span: 1,
    icon: 'calendar',
  },
  {
    id: 4,
    title: 'Suporte & Ajustes',
    description: 'Quer mudar algo? Tá lento? Não carrega? Chamou a gente, resolvido.',
    span: 1,
    icon: 'help-circle',
  },
];

export const personas = [
  {
    id: 1,
    title: 'Autônomo',
    subtitle: 'Designer, Eletricista, Consultor',
    description: 'Precisa de um site simples que mostre seu trabalho e facilite o contato. Sem complicação.',
    icon: 'briefcase',
  },
  {
    id: 2,
    title: 'Comércio Local',
    subtitle: 'Loja, Restaurante, Salão',
    description: 'Precisa que o cliente o encontre no Google Maps, veja fotos e marque online. Rápido e fácil.',
    icon: 'store',
  },
  {
    id: 3,
    title: 'Prestador de Serviço',
    subtitle: 'Encanador, Advogado, Contável',
    description: 'Precisa de credibilidade online. Site profissional, sistema de agendamento, conteúdo regular.',
    icon: 'tool',
  },
];

export const howItWorks = [
  {
    step: 1,
    title: 'Conversa Rápida',
    description: 'Você nos conta sua visão, seus clientes, seu orçamento. A gente ouve.',
    terminal: '$ agencia-fontes --descoberta',
  },
  {
    step: 2,
    title: 'Mostramos Pronto',
    description: 'Criamos um protótipo funcional. Sem esperar semanas. Você vê exatamente como fica.',
    terminal: '$ npm run build && deploy --preview',
  },
  {
    step: 3,
    title: 'Você Aprova',
    description: 'Gostou? Pediu ajustes? A gente mexe. Aprova só quando estiver 100% feliz.',
    terminal: '$ git commit -m "aprovado pelo cliente"',
  },
  {
    step: 4,
    title: 'No Ar',
    description: 'Publicamos. Seu site está vivo. Você recebe a documentação e suporte.',
    terminal: '$ git push origin main --deploy',
  },
];

export const comparison = [
  {
    feature: 'Design com sua identidade (não template)',
    generic: false,
    agencia: true,
  },
  {
    feature: 'Liberdade criativa total',
    generic: false,
    agencia: true,
  },
  {
    feature: 'Otimizado para SEO e conversão',
    generic: false,
    agencia: true,
  },
  {
    feature: 'Sem taxas mensais recorrentes',
    generic: false,
    agencia: true,
  },
  {
    feature: 'Você é dono de tudo (domínio, código, dados)',
    generic: false,
    agencia: true,
  },
  {
    feature: 'Suporte técnico dedicado',
    generic: false,
    agencia: true,
  },
  {
    feature: 'Migrável para qualquer plataforma',
    generic: false,
    agencia: true,
  },
  {
    feature: 'Sistema de agendamento customizado',
    generic: false,
    agencia: true,
  },
];

export const plans = [
  {
    id: 1,
    name: 'Essencial',
    price: '[PREENCHER]',
    description: 'Para quem está começando',
    features: [
      'Website responsivo',
      'Domínio + Hospedagem',
      'Email profissional',
      'Google Meu Negócio',
      'Primeira revisão grátis',
      'Suporte por WhatsApp',
    ],
    cta: 'Quero começar',
    highlighted: false,
  },
  {
    id: 2,
    name: 'Profissional',
    price: '[PREENCHER]',
    description: 'O mais escolhido',
    features: [
      'Tudo do Essencial',
      'Fotos profissionais do negócio',
      'Conteúdo mensal (4 posts)',
      'Anúncios pagos (Google + Facebook)',
      'Sistema de agendamentos',
      'Análise de desempenho mensal',
    ],
    cta: 'Começar agora',
    highlighted: true,
  },
  {
    id: 3,
    name: 'Completo',
    price: '[PREENCHER]',
    description: 'Crescimento garantido',
    features: [
      'Tudo do Profissional',
      'Produção de vídeos curtos',
      'Gestão completa de redes sociais',
      'Otimização contínua',
      'Relatório analítico completo',
      'Acompanhamento estratégico mensal',
    ],
    cta: 'Falar com especialista',
    highlighted: false,
  },
];

export const team = [
  {
    id: 1,
    name: 'Arthur Fontes',
    role: 'Desenvolvimento & Sistemas',
    description: 'Desenvolvedor full-stack. Cria sites rápidos, seguros e que convertem. Especialista em sistemas personalizados.',
    image: '/team-arthur.png',
  },
  {
    id: 2,
    name: 'Celso',
    role: 'Marketing & Vendas',
    description: 'Estrategista de marketing digital. Transforma visitantes em clientes. Especialista em Google Ads e redes sociais.',
    image: '/team-celso.png',
  },
];

export const faqs = [
  {
    id: 1,
    category: 'gerais',
    question: 'O site fica com meu nome ou da agência?',
    answer: 'Fica com seu nome e sua marca. Você é dono de tudo: domínio, hospedagem, conteúdo. A gente só criou. Se quiser trocar de agência no futuro, leva tudo.',
  },
  {
    id: 2,
    category: 'gerais',
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim. Não há contrato de permanência. Se quiser parar, é só avisar. Você fica com o site, a gente sai de cena.',
  },
  {
    id: 3,
    category: 'tecnico',
    question: 'Vocês cuidam do domínio e hospedagem?',
    answer: 'Sim. A gente registra, configura e renova quando precisa. Você só aproveita o site funcionando.',
  },
  {
    id: 4,
    category: 'tecnico',
    question: 'E se eu quiser mexer no site depois?',
    answer: 'Sem problema. Você tem acesso total. Pode mexer, atualizar conteúdo, mudar cores. A gente só está por perto se precisar de ajuda.',
  },
  {
    id: 5,
    category: 'gerais',
    question: 'Vocês tiram as fotos e vídeos?',
    answer: 'Sim. A gente vai no seu lugar de negócio, tira fotos profissionais e alguns vídeos para postar nas redes. Já sai pronto para usar.',
  },
  {
    id: 6,
    category: 'preco',
    question: 'Como funcionam os anúncios pagos?',
    answer: 'A gente cria as campanhas no Google e Facebook, define o orçamento que você quer gastar, e fica de olho se está convertendo. Você paga a agência pela gestão, depois paga o anúncio direto no Google/Facebook.',
  },
  {
    id: 7,
    category: 'gerais',
    question: 'Preciso saber programação?',
    answer: 'Não. Você não precisa mexer em código nenhum. O site é intuitivo. Se quiser mexer em algo mais técnico, a gente ajuda.',
  },
  {
    id: 8,
    category: 'tecnico',
    question: 'O site funciona bem no celular?',
    answer: 'Sim. Todo site que a gente faz é responsivo. Funciona perfeito em celular, tablet e desktop. Seus clientes vão acessar de onde quiserem.',
  },
  {
    id: 9,
    category: 'gerais',
    question: 'Qual a diferença entre template e site personalizado?',
    answer: 'Template é um padrão que a gente adapta com suas cores e textos. Site personalizado é feito só para você, do zero, com sua cara. Geralmente mais caro, mas único.',
  },
  {
    id: 10,
    category: 'gerais',
    question: 'E se eu ficar insatisfeito?',
    answer: 'Você vê o resultado antes de pagar. Se não gostar, a gente mexe até ficar como você quer. Só aprova quando estiver 100% feliz.',
  },
  {
    id: 11,
    category: 'gerais',
    question: 'Qual o prazo para ficar pronto?',
    answer: '[PREENCHER] - depende se é template ou personalizado.',
  },
  {
    id: 12,
    category: 'preco',
    question: 'Vocês fazem quantos posts por mês?',
    answer: '[PREENCHER] - varia conforme o plano escolhido.',
  },
  {
    id: 13,
    category: 'gerais',
    question: 'Posso trocar de agência se não gostar?',
    answer: 'Sim, você é dono do site. Se quiser ir embora, leva tudo. Sem problema. A gente só quer que você esteja feliz.',
  },
  {
    id: 14,
    category: 'preco',
    question: 'Como vocês cobram? Tem parcelas?',
    answer: 'Tem opção de à vista (com desconto) ou parcelado (2-3x). Falamos direto com você para acertar a melhor forma.',
  },
];
