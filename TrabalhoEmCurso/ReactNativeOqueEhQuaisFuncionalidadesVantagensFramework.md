# React Native: o que é, quais as funcionalidades e as vantagens desse framework

O React Native é um framework para desenvolvimento de aplicativos multiplataforma criado, em 2015, pela equipe do Facebook. Quer saber mais sobre ele, suas principais funcionalidades e vantagens operacionais? Leia o conteúdo completo que preparamos sobre o tema.

![Adil Calomeno Junior](https://media.graphcms.com/mbxf1yHTfSyqRW4l1YZP)

[Adil Calomeno Junior](https://ateliware.com/blog/authors/adil-calomeno-junior)

03 de setembro de 2020 | leitura de 10 minutos

[dev](https://ateliware.com/blog/categories/dev)

Se você já ouviu falar sobre o React, um framework para desenvolvimento de interfaces web, saiba que o **React Native** tem sim uma conexão com ele --- e que vai além do nome. O código produzido pelo React Native é semelhante ao React para web, já que o React serviu de base para a criação do React Native, framework para desenvolvimento de aplicativos multiplataforma criado, em 2015, pela equipe do Facebook sobre a licença MIT.

Hoje empresas de grande porte e com soluções focadas na melhor experiência possível para o usuário, como o Instagram, o Airbnb e a Uber também utilizam desenvolvimento em React Native para criação dos seus aplicativos mobile.

A opção é muito interessante para quem quer desenvolver aplicações que precisam rodar tanto em iOS quanto em Android: a criação é simplificada, apesar de algumas adaptações, qualquer sistema operacional pode ser utilizado para a construção (Windows, macOS ou Linux) e a performance dos produtos criados é acima da média. 

Quer saber mais sobre o que é React Native, quais são as principais funcionalidades e vantagens operacionais dessa ferramenta? Neste post te contamos quais características estão levando à ampla adoção desse framework quando o assunto é **aplicativo híbrido**.

Leia o conteúdo completo que preparamos sobre o tema.

## O que é React Native?

O React Native funciona como uma biblioteca e facilitador de recursos de JavaScript que possibilita o desenvolvimento de aplicações mobile, tanto para Android como para iOS.

Antes do React Native já existiam algumas soluções híbridas tais como o Apache Cordova (open source), o Adobe PhoneGap (que utiliza o Cordova também) e o MobileFirst Platform Foundation da IBM. 

Para soluções nativas, o profissional de desenvolvimento que precisava rodar uma aplicação para os dois sistemas operacionais tinha em mãos um projeto muito mais complexo, já que utilizava as linguagens específicas (Java para Android e Objective-C para iOS), além de não conseguir aproveitar quase nada entre os dois códigos.

Essa sempre foi uma questão na hora de empresas aplicarem projetos de apps mobile, já que aumentavam o número de profissionais envolvidos e também os custos dos projetos. Também, muitas vezes, era preciso de uma equipe especializada em JavaScript e outra em Objective-C, fazendo com que aplicações fossem criadas em paralelo, já que os códigos não tinham correspondência. Nesse aspecto, o React Native veio para facilitar (e muito!) o desenvolvimento de aplicativos que devem rodar nos dois sistemas operacionais.

### Framework híbrido para desenvolvimento de apps mobile

Com o desafio de desenvolver um framework para aplicativos móveis multiplataforma (Android e iOS) em mãos, em 2015 a equipe interna do Facebook criou o React Native sobre a licença MIT. 

Com a nova ferramenta, a criação de aplicativos mobile com utilização para iOS e Android foi facilitada, tempo foi poupado e recursos foram otimizados. E é assim que o framework se comporta no desenvolvimento e aplicação. 

Com o tempo, além do uso interno nos aplicativos do guarda-chuva de marcas do Facebook, outras empresas aderiram ao framework e hoje ele vem ganhando a atenção de muitos desenvolvedores. 

Não é à toa! Como todo o código desenvolvido em React Native utiliza apenas JavaScritpt, a curva de aprendizado dele é mais curta para profissionais que já estão acostumados a programar em JS para aplicações web. 

Além disso, o código é convertido para linguagem nativa para os diferentes sistemas operacionais, o que torna os aplicativos desenvolvidos em React Native mais fluidos, rápidos, seguros e com integrações mais completas com outros aplicativos e funcionalidade dos aparelhos celulares.

E a opção realmente oferece muitos recursos e funcionalidades interessantes: 

- Geração de código nativo;
- Desenvolvimento utilizando componentes;
- Utilização de plugins;
- Live reload / Hot reloading.

Vamos conhecer mais a fundo cada uma dessas características do React Native?

## Principais funcionalidades do framework

O framework aumenta a produtividade e praticidade no desenvolvimento de aplicações mobile híbridas através de funcionalidades muito interessantes e que se diferem de outras opções para desenvolvimento mobile. 

Confira as principais características que tornam o React Native tão difundido entre os profissionais de desenvolvimento.

### Geração de código nativo

Como já comentamos, o React Native é um framework híbrido e que permite que o desenvolvedor programe em um só código, que pode ser aproveitado para Android e iOS. 

Algumas ferramentas híbridas geram um código que roda em um navegador encapsulado dentro do aplicativo. Esse tipo de construção acaba resultando em aplicativos mais lentos e com desempenho inferior aos criados diretamente em código nativo.

Já no caso do React Native, quando o framework gera os aplicativos, ele converte o código híbrido para o código nativo, utilizando JavaScript através do React e linguagem XML equivalente ao HTML.

Isso torna os produtos criados com React Native mais fluidos e com agilidade no funcionamento, já que fazem correspondência direta com o sistema operacional do celular do usuário.

### Desenvolvimento utilizando componentes

Sim, o React Native foi criado com base no React. Apesar disso, o framework não utiliza tags HTML para criar seus elementos do código (como acontece nas aplicações web construídas com React), mas sim tags nativas com componentes.

O React Native constrói as aplicações já com o foco e estrutura no layout. Para facilitar o desenvolvimento das interfaces, o framework trabalha com componentes e subcomponentes exibidos nas telas através do método *render()*.

Também existem elementos específicos para cada sistema operacional que podem ser incluídos e é possível criar componentes próprios com campo de texto otimizado ou com funções mais específicas e inteligentes.

Você pode conferir mais detalhes sobre os quais são e como utilizar esses componentes na [documentação oficial do React Native](https://reactnative.dev/docs/next/components-and-apis).

### Utilização de plugins

A utilização do React Native também permite adicionar componentes prontos criados por usuários através de plugins. As funcionalidades podem ser estendidas com plugins customizados e os desenvolvedores que criam os plugins podem compartilhá-los com outros profissionais.

Alguns exemplos são plugins como o conector com Reactotron, app desktop para inspecionar projetos; plugins de compilação das informações dos projetos, como Babel, para permitir imports e requires em caminhos baseados em uma raiz (root) ou para remoção dos consoles da aplicação em React Native. 

Outro plugin bastante utilizado para desenvolvimento em React Native é a configuração de ESLint. Essa ferramenta é um analisador estático de código e permite o uso de regras de style guides de maneira mais simplificada e personalizada.

### Live reload / Hot reloading

O React Native utiliza uma abordagem chamada de "Live reload" para resolver a lentidão no teste e compilação dos dados dos aplicativos.

Através de uma ferramenta chamada "Expo", que roda sob o React Native, toda a alteração de código é realizada automaticamente, enviada para o servidor em tempo real e o aplicativo é atualizado on time, sem que seja necessário compilar o projeto e enviar o app para um simulador ou dispositivo antes da atualização acontecer.

O Expo facilita a vida do desenvolvedor, disponibilizando diversas funcionalidades e também auxiliando na codificação.

Esse é um grande ponto positivo, já que a funcionalidade faz com que o React Native continue rodando mesmo enquanto está em desenvolvimento. Até em aplicações maiores e mais complexas, a atualização no código acontece em menos de um segundo, já que as atualizações geram novas versões do arquivo que são injetadas automaticamente na aplicação.

## Vantagens do React Native

A principal vantagem em utilizar o React Native no desenvolvimento de aplicativos é que os projetos se tornam muito mais rápidos, já que o código é totalmente aproveitado entre as plataformas Android e iOS.

Além disso, para o próprio programador que irá trabalhar no desenvolvimento, codar em React Native é relativamente simples, já que a base de código é em JavaScript. Mesmo para profissionais que não estão familiarizados com aplicações web em JS, a curva de aprendizado do React Native é considerada rápida.

Outra diferença significativa que o React Native oferece em relação às opções é que todo o código desenvolvido no framework é convertido para a linguagem nativa dos dois sistemas operacionais, não sendo necessário nenhum retrabalho nesse sentido.

Ainda vale citar algumas outras vantagens consideráveis que o framework oferece para desenvolvedores e usuários:

- **Torna a experiência do usuário mais fluida** - Hoje um aplicativo que não é orientado pelo design é um produto obsoleto e que não atende às necessidades do mercado. Como o React Native foi criado já com foco e estrutura voltados para layout, além de ser extremamente ágil, ele apresenta uma experiência para o usuário mais rápida, otimizada e com menos erros;
- **Oferece uma melhor integração com outras funções do celular** - O framework consegue acessar interface e recursos nativos de Android e iOS utilizando JavaScript, o que facilita as integrações com funções nativas do aparelho (como a câmera e base de dados) e também com outros aplicativos instalados;  
- **Tem melhor performance e carregamentos mais rápidos** - O React Native sai na frente de outras frameworks para aplicações híbridas já que é capaz de gerar aplicativos com desempenho similar àqueles construídos com código nativo.

## Empresas que adotaram o React Native em suas aplicações

Por apresentar todas essas vantagens, o React Native se tornou um framework muito utilizado no desenvolvimento de aplicativos mobile. Trouxemos como exemplo algumas empresas de destaque que possuem aplicações em React Native:

- **Facebook** - É claro que o Facebook é uma das empresas que utiliza o framework, uma vez que ele foi criado internamente pela equipe de desenvolvimento da plataforma. Outras empresas do mesmo grupo, como é o caso do **Instagram** e do **Facebook Ads Manager** também utilizam o React Native para os aplicativos mobile;
- **Airbnb** - O Airbnb é uma das empresas que chama mais atenção quando falamos em experiência centrada no usuário. A maior plataforma do mundo de hospedagem utiliza React Native no seu app mobile;
- **Uber** - Com uma operação gigantesca em todo o mundo, a empresa também construiu o aplicativo mobile em React Native para oferecer a melhor experiência para os usuários;
- **Tesla** - Quer falar sobre excelência e inovação? A Tesla, referência em crescimento no mercado de montadoras de carros elétricos, oferece aplicativos que utilizam a tecnologia React Native;
- **Wix** - A Wix é uma plataforma de site facilitada e pensada para que o usuário final consiga criar páginas personalizadas. A versão mobile do aplicativo também é oferecida com configuração em React Native.

Aqui na ateliware também cocriamos soluções digitais utilizando React Native. Mas, como sempre gostamos de dizer, não temos ferramentas e nem linguagens "de estimação". Por isso, apesar de utilizarmos o framework em diversos projetos, sugerimos que você também conheça outros frameworks que funcionam para aplicações mobile, como o Cordova, Manifold.js ou Flutter.

##### Você também pode se interessar: [Por que você também deveria aprender Flutter?](https://ateliware.com/blog/por-que-voce-tambem-deveria-aprender-flutter)

Mesmo sendo uma ferramenta em que ainda está amadurecendo, o React Native é uma das principais promessas para o desenvolvimento mobile. Hoje temos uma crescente demanda por aplicativos e soluções mobiles. Essa é uma necessidade dos usuários e, por consequência, das empresas que os atendem.

Com a adoção do React Native por grandes empresa é normal que a fama do framework se potencialize e que plugins e atualizações também aumentem em número e qualidade. A tendência é que React Native se torne assim uma opção ainda mais completa e mais utilizada por desenvolvedores em seus projetos mobile híbridos.

Gostou do conteúdo que preparamos?

Agora você já sabe o que é React Native e tem todas as informações que precisa para se aprofundar neste framework que oferece tantas funcionalidades e vantagens.