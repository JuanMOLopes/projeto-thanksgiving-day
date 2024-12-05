create database gratidaoProjetoGrupoDois;

use gratidaoProjetoGrupoDois;

create table
    HistoriasInspiradoras (
        ID int identity (1, 1) primary key,
        Titulo nvarchar (100) not null,
        Historia nvarchar (MAX) not null,
        ImagemURL nvarchar (255)
    );

create table
    MensagensCurtas (
        ID int identity (1, 1) primary key,
        Mensagem nvarchar (1000) not null,
        Tema varchar(100)
    );

select
    top 1 *
from
    MensagensCurtas
order by
    NEWID ()
insert into
    MensagensCurtas (Mensagem, Tema)
values
    (
        'Quando você pratica a gratidão, a vida se torna uma pessoa mais rica e plena.',
        'Cuidado'
    ),
    (
        'Gratidão é a chave que transforma problemas em presentes e erros em aprendizados.',
        'Lição'
    ),
    (
        'Gratidão é reconhecer que, embora a vida não seja perfeita, há sempre algo para agradecer.',
        'Lição'
    ),
    (
        'A gratidão não é apenas uma atitude; é uma forma de viver.',
        'Vida'
    ),
    (
        'A gratidão não só faz bem ao coração, mas também à alma.',
        'Cuidado'
    ),
    (
        'O segredo para uma vida plena é nunca esquecer de agradecer.',
        'Vida'
    ),
    (
        'Em meio às tempestades da vida, a gratidão é a âncora que nos mantém firmes.',
        'Momentos'
    ),
    (
        'Agradecer, mesmo nas horas de sofrimento, nos ajuda a lembrar que somos mais fortes do que pensamos e que temos algo de valor, mesmo nas adversidades.',
        'Momento'
    ),
    (
        'A natureza é um lembrete constante de que a vida é cíclica, que tudo tem seu tempo e que, no fim, sempre há renovação.',
        'Natureza'
    ),
    (
        'As pequenas flores que crescem entre as pedras lembram que a beleza pode surgir nos lugares mais inesperados. gratidão por essa lição de força e resiliência.',
        'Natureza'
    ),
    (
        'A gratidão pelo amor faz com que possamos reconhecer que, em meio a todas as dificuldades, ele é a verdadeira essência da vida.',
        'Amor'
    ),
    (
        'A maior lição que a vida nos ensina é que a gratidão é o que mantém viva a memória e o amor por aqueles que já partiram.',
        'Pessoas que partiram'
    ),
    ('Agradecer é a forma mais pura de amor.', 'Amor'),
    (
        'A gratidão é o antídoto para a insatisfação.',
        'Vida'
    ),
    (
        'A gratidão é uma ponte que conecta o que somos com o que queremos ser.',
        'Lição'
    ),
    (
        'A gratidão transforma tudo o que temos em mais do que suficiente.',
        ' Lição'
    ),
    (
        'Ser grato é reconhecer o valor das pequenas e grandes coisas da vida.',
        'Vida'
    ),
    (
        'A gratidão abre a porta para a abundância e a felicidade.',
        'Vida'
    ),
    (
        'Viver com gratidão é apreciar cada momento como um presente.',
        'Vida'
    ),
    (
        'A gratidão é a chave para uma vida plena e realizada.',
        ' Vida'
    ),
    (
        'Agradecer é uma forma de atrair mais coisas boas para a nossa vida.',
        ' Vida'
    ),
    (
        'A gratidão é o caminho mais curto para a felicidade.',
        ' Oportunidade'
    ),
    (
        'Ao praticar a gratidão, encontramos alegria nas coisas simples.',
        'Lição'
    ),
    (
        'A gratidão ilumina até os dias mais escuros.',
        'Iluminação'
    ),
    (
        'Cada dia é uma nova oportunidade para ser grato.',
        ' Oportunidade'
    ),
    (
        'Agradecer transforma o nosso coração e a nossa mente.',
        'Lição'
    ),
    (
        'A gratidão nos ensina a valorizar o presente e a confiar no futuro.',
        'Lição'
    ),
    (
        'Com gratidão, a vida se torna uma celebração constante.',
        ' Lição'
    ),
    (
        'A gratidão é o combustível que nos motiva a seguir em frente.',
        'Motivação'
    ),
    (
        'A gratidão é a melhor atitude que podemos adotar todos os dias.',
        'Oportunidade'
    );

insert into
    HistoriasInspiradoras (Titulo, Historia, ImagemURL)
values
    (
        'O Leão e o Rato',
        'Certo dia, um leão estava dormindo tranquilamente na floresta quando um rato, sem querer, passou por cima dele. O leão acordou com um rugido furioso e capturou o pequeno intruso com suas enormes patas. Tremendo de medo, o rato implorou pela vida, prometendo que, se poupado, um dia retribuiria o favor.
O leão, divertindo-se com a ideia de que um rato pudesse ajudá-lo, decidiu liberar o pequeno roedor, achando a promessa insignificante. Mal sabia ele que esse gesto de misericórdia seria recompensado de uma maneira inesperada.
Alguns dias depois, o leão foi capturado por caçadores e amarrado com grossas cordas. Incapaz de se libertar, o leão rugiu em desespero, seus rugidos ecoando pela floresta. O rato, ao ouvir os gritos de seu salvador, correu até ele e rapidamente roeu as cordas, libertando o leão.
A moral da história: A história de “O Leão e o Rato” nos ensina que não devemos julgar o potencial do próximo, e que quando a bondade é feita sem esperar nada em troca ela retorna.',
        './src/img-bcd/o-leao-e-o-rato.png'
    ),
    (
        'Reencontro pós guerra',
        'Durante a Segunda Guerra Mundial, um soldado americano chamado Charles Plumb foi piloto de um avião bombardeiro. Em uma missão, seu avião foi abatido e ele foi capturado pelos norte-vietnamitas, passando seis anos em cativeiro. Após ser libertado, Plumb deu palestras sobre sua experiência e o que aprendeu na prisão.
Um dia, em um restaurante, um homem se aproximou dele e disse: "Olá, você é Charles Plumb, o piloto que foi derrubado no Vietnã?" Plumb confirmou. O homem continuou: "Eu era o marinheiro que dobrou seu paraquedas." Plumb ficou surpreso e emocionado, respondendo: "Funcionou perfeitamente, caso contrário, não estaria aqui hoje. Devo minha vida a você!"
Essa história mostra como pequenos gestos de bondade podem ter um impacto enorme e duradouro. Plumb passou a iniciar suas palestras perguntando à plateia: "Quem dobrou seu paraquedas hoje?" como um lembrete de que devemos sempre reconhecer e apreciar as pequenas ações de bondade ao nosso redor.
',
        './src/img-bcd/reencontro-pos-guerra.png'
    ),
    (
        ' Salvando vidas',
        'Durante a Segunda Guerra Mundial, Nicholas Winton, um corretor da bolsa britânico, salvou 669 crianças, em sua maioria judias, da Tchecoslováquia ocupada pelos nazistas. Ele organizou transportes para levar as crianças para a Grã-Bretanha, onde foram recebidas por famílias adotivas, garantindo sua segurança. Winton manteve suas ações em segredo por quase 50 anos.
Em 1988, sua esposa encontrou um caderno antigo no sótão contendo a lista de nomes das crianças que ele havia salvado. Ela compartilhou a história, que logo se tornou amplamente conhecida. Winton foi convidado a participar de um programa de televisão, onde, para sua surpresa, foi reunido com muitas das crianças que ele salvou, agora adultos, que expressaram profunda gratidão por sua coragem e compaixão.
Nicholas Winton foi posteriormente condecorado pela Rainha Elizabeth II e recebeu várias homenagens por sua heroica ação. Sua história inspirou muitos, lembrando-nos do impacto duradouro de atos de bondade e da importância da gratidão.
',
        './src/img-bcd/salvando-vidas.png'
    ),
    (
        'Enchente de gratidão',
        ' Durante as enchentes devastadoras no Rio Grande do Sul em 2024, muitas histórias de gratidão surgiram. Uma delas envolveu um grupo de voluntários de Santa Catarina que viajou para o RS para ajudar a limpar casas atingidas. Eles encontraram uma família que havia perdido tudo e, sem hesitar, começaram a trabalhar para restaurar a casa da família.
A família, profundamente agradecida, não pôde deixar de expressar sua gratidão. Eles prepararam uma refeição especial para os voluntários e, em seguida, organizaram uma pequena celebração comunitária para agradecer a todos que ajudaram durante a crise. A ação dos voluntários não só ajudou a família a se recuperar, mas também fortaleceu os laços entre as comunidades de Santa Catarina e Rio Grande do Sul.
',
        './src/img-bcd/enchente-de-gratidao.png'
    ),
    (
        'A gentileza salva vidas',
        'Quando o empregado de um frigorífico foi inspecionar a câmara frigorífica, a porta se fechou e ele ficou preso dentro dela. Bateu na porta, gritou por socorro, mas todos haviam ido para suas casas.Já estava muito debilitado pela baixa temperatura, quando a porta se abriu e o vigia o resgatou com vida. Perguntaram ao vigia-salvador: Por que foi abrir a porta da câmara, se isso não fazia parte da sua rotina de trabalho? Ele explicou: Trabalho nesta empresa há 35 anos, vejo centenas de empregados que entram e saem todos os dias, e esse é o único funcionário que me cumprimenta ao chegar e se despede ao sair. Hoje ele me disse “bom dia” ao chegar. E não percebi que se despedisse de mim. Imaginei que poderia ter acontecido algo a ele. Por isso o procurei e o encontrei.
',
        './src/img-bcd/a-gentileza-salva-vidas.png'
    ),
    (
        'Médicos Voluntários',
        'Na cidade de Lajeado, um hospital foi inundado, e vários pacientes precisaram ser realocados. Uma rede de clínicas e médicos voluntários se uniu para atender esses pacientes. As famílias dos pacientes, profundamente gratas, criaram uma página nas redes sociais para agradecer publicamente aos profissionais de saúde, compartilhando histórias de recuperação e esperança.
',
        './src/img-bcd/medicos-voluntarios.png'
    ),
    (
        ' Amor de mãe ',
        'Ana, uma mãe solteira, estava enfrentando a exaustão de equilibrar trabalho e cuidados com os filhos. Um dia, seu filho de 5 anos lhe disse: "Mãe, você é a melhor pessoa do mundo!" Aquela frase simples e pura fez Ana refletir sobre o quanto ela estava fazendo, com muito amor, por sua família. Ela se sentiu profundamente grata por ter aquele pequeno ser humano ao seu lado, e percebeu que, mesmo nas dificuldades, a gratidão por seu filho e pelo amor incondicional que ela dava e recebia valia mais do que qualquer desafio.',
        './src/img-bcd/amor-de-mae.png'
    ),
    (
        'Reconhecimento motiva ',
        ' Durante a pandemia de COVID-19, em 2020, uma enfermeira chamada Sarah, de um hospital em Londres, estava trabalhando exaustivamente em uma unidade de terapia intensiva (UTI). Ela cuidava de pacientes com COVID-19 e estava enfrentando um grande desgaste emocional e físico. Um dia, ela recebeu uma mensagem de um ex-paciente, um homem de 72 anos chamado John, que havia sido internado no hospital meses antes e estava se recuperando bem.
John escreveu: "Sarah, eu não me lembro de todos os detalhes do que aconteceu durante o meu tratamento, mas lembro do seu sorriso e do seu cuidado. Eu sou grato por você ter me dado forças para seguir em frente. Estou em casa agora, e devo minha recuperação à sua dedicação."
Sarah ficou profundamente tocada pela mensagem. "Esse foi o melhor presente que eu poderia receber. Às vezes, a gente não percebe o impacto do nosso trabalho até que alguém nos mostre", disse ela. Aquela mensagem renovou suas forças para continuar enfrentando os desafios diários.
',
        './src/img-bcd/reconhecimento-motiva.png'
    ),
    (
        'O esforço reconhecido',
        ' Em 2018, na cidade de Curitiba, um trabalhador de limpeza chamado Marcos estava terminando seu turno no final da tarde, quando uma senhora idosa, Dona Célia, se aproximou e o agradeceu. Ela havia observado Marcos ao longo dos dias, limpando meticulosamente as ruas e calçadas, e se sentiu tocada pelo seu esforço. Dona Célia disse a ele: "Eu queria apenas te agradecer por fazer seu trabalho com tanto carinho e dedicação. Às vezes, as pessoas não percebem, mas eu vejo o quanto você se esforça para manter nossa cidade limpa. Você faz a diferença."Marcos ficou surpreso, pois estava acostumado a passar despercebido, mas a gratidão de Dona Célia fez com que ele se sentisse valorizado. "Eu só faço o meu trabalho, mas ouvir isso de uma pessoa tão gentil me fez perceber que as pequenas coisas importam", disse Marcos.
',
        './src/img-bcd/o-esforço-reconhecido.png'
    ),
    (
        'Calculando a gratidão',
        ' Em 2015, o professor de matemática de uma escola pública em Salvador, João, estava enfrentando dificuldades para manter a atenção de seus alunos. Ele notou que muitos dos jovens estavam desmotivados, faltando às aulas e sem interesse nos estudos. Para reverter isso, João decidiu criar um projeto de gratidão com seus alunos. Ele pediu que todos escrevessem cartas de agradecimento para alguém que tivesse impactado positivamente suas vidas.
As cartas não precisavam ser longas ou elaboradas, apenas sinceras. Para a surpresa do professor, os alunos começaram a se envolver muito mais com a atividade do que ele esperava. Muitos escreveram cartas para seus pais, avós, amigos e até para ele, agradecendo pelo apoio.
Um dia, durante uma aula, um aluno chamado Miguel se levantou e leu sua carta para a turma: "Professor João, obrigado por nunca desistir de mim, mesmo quando eu não acreditava em mim mesmo." As palavras do aluno emocionaram tanto o professor que ele quase não conseguiu falar. "Essas cartas me fizeram ver o impacto positivo que podemos ter na vida dos outros, mesmo em momentos de dificuldade", disse João.
',
        './src/img-bcd/calculando-a-gratidao.png'
    ),
    (
        'Rifa de bondade',
        'A cabeleireira Isabel Soares, devolveu o carro que ganhou em uma rifa solidária para ajudar o Akonn Verdugo Gonçalves, de 3 anos, que precisava do dinheiro para uma cirurgia de emergência no olho esquerdo. As despesas médicas da criança chegavam aos 20 mil reais e os pais não tinham condições. Eles realizaram almoços, campanhas nas redes sociais, até que veio a ideia de rifar o carro da família. Jéssica Verdugo, mãe do pequeno Akonn ficou surpresa pela atitude de Isabel, que além de ter comprado parte das rifas, ajudou a vender e ao ser sorteada devolveu o carro.
',
        './src/img-bcd/rifa-de-bondade.png'
    ),
    (
        ' Dividindo e multiplicando',
        ' Carla sempre teve uma vida simples, mas rica em pequenos gestos de carinho. Ela morava em uma casa modesta no campo, onde seus vizinhos eram pessoas humildes, mas generosas. Um dia, ela percebeu que sua horta estava produzindo mais do que ela poderia consumir sozinha, com tomates, cenouras e alfaces maduras demais para a sua família. Decidiu então compartilhar os frutos com os vizinhos.Foi até a casa de Dona Ana, uma senhora idosa que morava sozinha no fim da rua. Ao entregar uma cesta cheia de legumes frescos, Carla disse: "Espero que goste, Dona Ana. É uma forma de agradecer por todas as vezes que me ajudou com um sorriso e uma palavra amiga."Dona Ana sorriu, tocada pela atitude de Carla. Ela pegou a cesta e, com os olhos brilhando, disse: "Não preciso de mais nada, minha filha, pois já me deu o maior presente: o gesto de gratidão."Carla saiu dali com o coração mais leve, sentindo que o simples ato de dar havia criado uma corrente de generosidade que era maior do que qualquer coisa material. Ela aprendeu que, às vezes, as maiores dádivas são aquelas que não custam dinheiro, mas sim, o reconhecimento genuíno do outro.
',
        './src/img-bcd/dividindo-e-multiplicando.png'
    ),
    (
        'Universitários gentis',
        ' Em Porto Alegre, um grupo de estudantes universitários se mobilizou para ajudar uma escola atingida pelas enchentes. Eles organizaram uma campanha de arrecadação de materiais escolares e ajudaram na limpeza e reconstrução da escola. A comunidade escolar, em agradecimento, organizou uma cerimônia para homenagear os estudantes, destacando o poder da união e da solidariedade.
',
        './src/img-bcd/universitarios-gentis.png'
    ),
    (
        'Ligação para uma salvação',
        'Uma mãe viveu momentos de agonia quando seu filho recém-nascido engasgou no início de 2018. Jussara Vieira Markmann entrou em contato com os Bombeiros Voluntários através de uma ligação telefônica e com ajuda de um dos membros da corporação conseguiu fazer com que a criança voltasse a respirar. Cerca de três dias depois ela, junto com o bebê, foi até a sede dos bombeiros voluntários para conhecer e agradecer o Bombeiro Matheus Cardoso, que a ajudou. "Quando acontece contigo, tu dá um valor muito maior. É essencial o trabalho deles", disse Jussara, em entrevista a uma emissora local.
',
        './src/img-bcd/ligacao-para-uma-salvacao.png'
    ),
    (
        ' Festa Surpresa',
        'Raquel Moro de Farias passou por momentos difíceis depois de sofrer um acidente grave. Por um acaso, dois socorristas passavam pelo local no momento da tragédia e a ajudaram. Eram eles Gustavo Weber e Luan Flores, que integram o Grupo de Resgate e Apoio Voluntário de Emergência (Grave). Eles haviam acabado de sair de um evento, aquele não era o caminho habitual dos dois, mas acabaram cara a cara com a situação. Não pensaram duas vezes e ajudaram no socorro da vítima.
Ela ficou 20 dias internada e os planos de comemorar o aniversário de 15 anos em março de 2019 ficaram para trás, por conta dos gastos. No entanto, Raquel acabou sendo surpreendida por pessoas que quiseram colaborar com seu sonho e lhes proporcionaram uma festa surpresa, em novembro do ano passado.
Os pais de Raquel, em um gesto de gratidão, convidaram os socorristas que fizeram o resgate da filha e eles a buscaram em casa de ambulância, a acompanharam na entrada e ainda dançaram a valsa com ela. A mãe Eliane Farias, afirma que para ela o fato todo foi um milagre. “Eles foram anjos na nossa vida. Como ela tem muito carinho e gratidão por eles, nós resolvemos fazer uma surpresa. Agradecemos a Deus por ter colocado eles no nosso caminho”, afirmou em entrevista à imprensa.
',
        './src/img-bcd/festa-surpresa.png'
    );