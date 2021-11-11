# O que é React Native?



![img](https://proxy.organicadigital.com/img-8184e6bc6aa121d4.png?thumb=150x150%23)

------

Por [Lauro Becker](https://www.organicadigital.com/blog/autor/lauro-becker) *13/05/2021* *[Aplicativos](https://www.organicadigital.com/blog/programacao-aplicativos)*



Atuando desde 2005 com tecnologia e internet, concebendo e desenvolvendo processos de inovação.

Nesse artigo você apredenderá o que é, suas vantagens, algumas funcionalidades importantes, curiosidades a respeito da sua sintaxe e estilos.

Leia até o final e compreenda o presente e o **FUTURO** dessa tecnologia, e como ela será um divisor de águas para **garantir que o seu seja ótimo**.

 

![img](https://proxy.organicadigital.com/img-6019dda37f88924a.png?thumb=730x)



Índice: [O que é React Native?](https://www.organicadigital.com/blog/o-que-e-react-native/#o-que-e) | **[Conhecimento Avançado](https://www.organicadigital.com/blog/o-que-e-react-native/#avancado)** | [Vantagens](https://www.organicadigital.com/blog/o-que-e-react-native/#vantagens) | [Funcionalidades](https://www.organicadigital.com/blog/o-que-e-react-native/#funcionalidades) | [Sintaxe](https://www.organicadigital.com/blog/o-que-e-react-native/#sintaxe) | [Estilos](https://www.organicadigital.com/blog/o-que-e-react-native/#estilos) | [Futuro do React Native](https://www.organicadigital.com/blog/o-que-e-react-native/#futuro-react) | **[O seu Futuro como Desenvolvedor](https://www.organicadigital.com/blog/o-que-e-react-native/#seu-futuro)**

## O que é React Native? 

> O [React Native](https://github.com/facebook/react-native) é um framework baseado no já aclamado [React](https://facebook.github.io/react/), desenvolvido pela equipe do **Facebook**, que possibilita o desenvolvimento de aplicações mobile, tanto para **Android**, como para **iOS**, utilizando apenas [**Javascript**](https://www.organicadigital.com/seeds/google-maps-api-sem-dor-com-gmapsjs/). 

Olhando por esse lado, não parece ser nada surpreendente, nem inovador, pois já existem inúmeros frameworks que empacotam aplicações web em uma espécie de “browser”, como o [Cordova](https://cordova.apache.org/), ou o [Manifold.js](http://manifoldjs.com/), porém o React Native é diferente, pois todo o código desenvolvido é convertido para a linguagem nativa do sistema operacional.

## Conhecimento avançado

**Antes de mais nada, se você está buscando conhecimento avançado sobre React Native, utilize o botão verde a seguir:**

[Quero aprender mais!](https://go.hotmart.com/O28802880O)

 

## Vantagens

As principais vantagens de uma aplicação nativa sobre uma aplicação web mobile são:

- Experiência do usuário fluída;
- Carregamentos em geral mais rápidos;
- Melhor integração entre funções do celular como câmera, giroscópio, etc;
- Segurança superior;
- Melhor performance em geral.

Antes do surgimento do React Native, desenvolver para Android e iOS era algo relativamente complexo, pois além de ter que aprender as linguagens **Objective-C** (iOS) e **Java** (Android), o desenvolvedor não aproveitava praticamente nada do código de uma plataforma para outra, fazendo assim com que as empresas contratassem um time de desenvolvimento para cada sistema operacional, tornando o projeto muito lento e caro. Porém, com o **React Native**, o código pode ser reaproveitado em até 100% entre as plataformas, podendo fazer com que o custo e a duração do projeto caiam pela metade.

## Funcionalidades

O React Native possui diversas funcionalidades muito interessantes que aumentam a praticidade e a produtividade do desenvolvimento. Uma delas é o **Hot Reloading**, que faz com que o programa fique rodando em desenvolvimento, e a cada atualização no código uma versão nova do arquivo modificado é injetado na aplicação, levando menos de 1 segundo para atualizar (mesmo com aplicações grandes e complexas). Para o desenvolvimento mobile isso é um grande passo, pois em outros frameworks nativos, a cada mudança no código, a aplicação precisava ser recompilada por completo, levando muito mais tempo.

Existe também a possibilidade de depurar a aplicação via **Google Chrome**, como se fosse uma aplicação web padrão, o que ajuda muito os desenvolvedores web que já estão acostumados a utilizar o **Dev Tools**. Outra feature interessante do React Native é a possibilidade de combinar seu código Javascript com algum código nativo em Objective-C, Java ou Swift, caso você queira utilizar componentes já prontos, ou otimizar alguns aspectos da sua aplicação.

## Sintaxe

Diferente do React ‘clássico’, os elementos não são escritos com as tags **[HTML](http://organicadigital.com/seeds/o-que-e-amp/):**

```
<div>, <span>, <ul>
```

Mas sim com elementos que convertem diretamente para linguagem nativa, na tabela abaixo estão alguns exemplos de **tags no React Native**:

![Tabela Elementos](https://www.organicadigital.com/blog/imgs/img-0fed8ca33262e837)



Além disso existem elementos específicos para cada plataforma (que normalmente contém o sufixo do sistema operacional), como:

```
<DatePickerIOS/>, <NavigationIOS/>, <SwitchIOS> e <SwitchAndroid>
```

## Estilos de interface dos aplicativos

Na maioria dos frameworks, costumamos utilizar arquivos de estilos separadamente, e podem ser escritos em **CSS**, **SASS** ou **LESS**, porém o **React Native** traz uma abordagem muito diferente, com estilos inline e utilizando **Javascript**. Isso pode parecer estranho e feio no início, porém existem várias abordagens que fazem com que você não precise estilizar item por item, por exemplo criar um objeto de estilo que você pode reutilizar em diversos elementos, como mostra no exemplo abaixo:

```
var styles = Stylesheet.create({
    button:    {
        borderRadius: '5px',
        backgroundColor:  '#B420FF’,
        flex: 1
     },
     accentText:    {
        fontSize: 18,
        fontWeight: 'bold'
     }
});
var MainButton = React.createClass({
    render: function() {
        return (
            <Text style={[styles.button, styles.accentText]}>
                “Olá Mundo”
            </Text>
        )
   }
})
```



Utilizando os estilos dessa forma, podemos criar um modelo de “cascata”, assim como no **CSS**, trazendo diversas possibilidades. Outra vantagem gigante do React Native é a customização de layouts, que é feita inteiramente por meio do **Flexbox**, utilizado da mesma maneira que no [CSS](http://organicadigital.com/seeds/erros-comuns-cometidos-por-iniciantes-em-css/) padrão.

## Futuro do React Native

Após o anúncio do React Native, feito na ReactConf 2015 (maior conferência de React do mundo, que ocorre no escritório do Facebook, na Califórnia), o código do framework foi colocado no Github, com isso milhares de desenvolvedores se engajaram para contribuir com a ferramenta, que já ultrapassa 10.000 commits.

[Diversos aplicativos](https://www.organicadigital.com/servicos/software-sob-medida/?utm_source=post-o-que-e-react-native&utm_medium=link#desenvolvimento-de-aplicativos) de empresas gigantes já foram desenvolvidos com React Native como o **Uber**, **AirBnB**, **Instagram**, **Baidu Mobile**, **Vogue App**, **Facebook Ads Manager** e diversos outros, sendo o **Facebook Groups** o primeiro app feito 100% com o framework.



Mesmo ainda não sendo uma plataforma totalmente estável e ‘madura’, o React Native é sem dúvidas uma das maiores promessas para o desenvolvimento mobile em um futuro próximo, pois o número de desenvolvedores web é cada vez maior e é muito mais prático para esse desenvolvedores utilizar uma linguagem que já estão familiarizadas do que aprender linguagens e paradigmas de programação novos para criar um [aplicativo mobile](https://www.organicadigital.com/blog/confira-as-tendencias-de-tecnologia-mobile?utm_source=post-o-que-e-react-native&utm_medium=link).

## O seu Futuro como Desenvolvedor

Não há dúvidas: todos os dispositivos eletrônicos estão se tornando inteligentes.

Smart**phone**, Smart**TV**, **Geladeira** Inteligente, **Carro** Inteligente, **Casa** Inteligente...

Isso não é o futuro. É o presente!

Esse mercado **não** tem a menor possibilidade de entrar em crise nos próximos 100 anos, **além de pagar MUITO bem**.

Criar aplicativos é como dar vida para os dispositivos que facilitam a vida da humanidade.

**Dê o próximo passo em direção ao seu futuro [clicando aqui](https://go.hotmart.com/O28802880O)** e saiba como aprender a criar aplicativos nativos para Android e iOS utilizando a biblioteca React Native, a mesma usada em apps como Facebook, Instagram, Uber, Tesla, Skype e AirBnB.

 

[Quero aprender agora!](https://go.hotmart.com/O28802880O)

 

 

## Documentação do React Native

A documentação do React está disponível em [inglês](https://reactjs.org/) e [português do Brasil](https://pt-br.reactjs.org/)!

## GitHub

Os [códigos-fonte do React Native](https://github.com/facebook/react-native) estão no GitHub disponíveis para você iniciar sua utilização.

## Perguntas Frequentes

### 📗 O que é React Native?

O React Native é um framework baseado no já aclamado React, desenvolvido pela equipe do Facebook, que possibilita o desenvolvimento de aplicações mobile, tanto para Android, como para iOS, utilizando apenas Javascript.

### 🔴 Quais são as principais vantagens do React Native?

\1) Todo o código desenvolvido é convertido para a linguagem nativa do sistema operacional.

\2) Melhor integração entre funções do celular como câmera, giroscópio, etc.

\3) Segurança superior.

\4) Melhor performance em geral.

### 📗 Quais as principais funcionalidades do React Native?

São diversas funcionalidades muito interessantes que aumentam a praticidade e a produtividade do desenvolvimento, mas vale enfatizar uma delas. O Hot Reloading, que faz com que o programa fique rodando em desenvolvimento, e a cada atualização no código uma versão nova do arquivo modificado é injetado na aplicação, levando menos de 1 segundo para atualizar (mesmo com aplicações grandes e complexas).

### 🔴 Como funciona a sintaxe do React Native?

Diferente do React clássico, os elementos não são escritos com as tags HTML, mas sim com tags específicas que convertem diretamente para linguagem nativa.

### 🔴 Como definir o estilo das aplicações desenvolvidas em React Native?

Na maioria dos frameworks, costumamos utilizar arquivos de estilos separadamente, e podem ser escritos em CSS, SASS ou LESS, porém o React Native traz uma abordagem muito diferente, com estilos inline e utilizando Javascript.

 

*- Versão inicial escrita por Fernando Kupka e atualmente mantida e atualizada por Lauro Becker.*