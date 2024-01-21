# Tecnologias utilizadas

## Gulp

Ferramenta de automação de tarefas em JavaScript

- Permite automatizar tarefas repetitivas, como minificação, otimização e compilação de arquivos
- É uma ótima opção para melhorar a produtividade no desenvolvimento web

## Sass

Pré-processador de CSS

- Permite adicionar funcionalidades e recursos avançados ao CSS
- Pode simplificar e organizar o processo de desenvolvimento

## gulp-imagemin

Plugin do Gulp para minificar imagens

- Permite reduzir o tamanho das imagens sem perda de qualidade
- Pode melhorar o desempenho do site

## gulp-uglify

Plugin do Gulp para minificar arquivos JavaScript

- Permite reduzir o tamanho dos arquivos JavaScript sem perda de funcionalidades
- Contribui para um carregamento mais rápido das páginas web

# Vantagens de usar essas ferramentas

- **Maior produtividade:** Automatizar tarefas repetitivas pode economizar muito tempo e esforço
- **Melhor desempenho:** Minificar imagens e código pode melhorar o desempenho do site
- **Simplificação do processo de desenvolvimento:** Sass e gulp-imagemin podem simplificar e organizar o processo de desenvolvimento, tornando-o mais eficiente

# Como usar essas ferramentas

## Gulp

- Para usar o Gulp, você precisa instalá-lo globalmente e localmente no seu projeto. Em seguida, você pode criar um arquivo `gulpfile.js` para definir as tarefas que deseja automatizar.

## Sass

- Para usar o Sass, você precisa instalá-lo globalmente e localmente no seu projeto. Em seguida, você pode criar um arquivo `.scss` para escrever o código Sass.

## gulp-imagemin

- Para usar o `gulp-imagemin`, você precisa instalá-lo globalmente e localmente no seu projeto. Em seguida, você pode adicionar a tarefa `imagemin` ao seu arquivo `gulpfile.js`.

## Como executar o projeto

Para executar este projeto localmente em sua máquina, siga estas etapas:

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Clone este repositório em sua máquina local usando o comando `git clone`.

3. Instale as dependências do projeto executando `npm install` no diretório do projeto.

4. Para realizar a build do projeto, execute o comando `npm run build`. Isso iniciará o comando `gulp` que executará as funções styles e images em paralelo para compilar os arquivos .scss em .css e otimizar as imagens.

5. Para executar o projeto em modo de desenvolvimento, execute o comando `npm run dev`. Isso iniciará o comando `gulp watch` que observará as alterações nos arquivos .scss e executará a função styles para compilar os arquivos .scss em .css.

6. As funções dentro do arquivo `gulpfile.js` podem ser executadas individualmente com o comando `gulp <nome-da-função>`, por exemplo, para executar apenas a função styles, execute o comando `gulp styles`.
