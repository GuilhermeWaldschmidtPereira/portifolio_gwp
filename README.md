# Portfólio Profissional e Acadêmico

Projeto de site pessoal/profissional para **Guilherme Waldschmidt Pereira**, pensado para reunir apresentação institucional, áreas de pesquisa, conhecimentos técnicos, projetos e um repositório inicial de materiais didáticos.

## Objetivo do projeto

Criar uma página moderna, responsiva e elegante que funcione ao mesmo tempo como:

- apresentação profissional;
- página acadêmica;
- catálogo de projetos;
- repositório inicial de aulas, listas, códigos e materiais de apoio.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Font Awesome
- Devicon
- Google Fonts

## Como executar localmente

1. Entre na pasta do projeto.
2. Abra o arquivo `index.html` diretamente no navegador.

Se preferir rodar com um servidor local simples:

```bash
python3 -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Como adicionar novos materiais acadêmicos

Os materiais são renderizados dinamicamente a partir do array `materialsData`, localizado em `assets/js/script.js`.

Para adicionar um novo item:

1. Abra `assets/js/script.js`.
2. Localize o array `materialsData`.
3. Adicione um novo objeto seguindo o padrão abaixo:

```js
{
  title: "Título do material",
  category: "Categoria",
  description: "Descrição breve",
  tags: ["Tag 1", "Tag 2"],
  accessLink: "assets/files/material-modelo.txt",
  downloadLink: "assets/files/material-modelo.txt"
}
```

Categorias já utilizadas no projeto:

- Estatística
- Probabilidade
- Programação
- Banco de Dados
- Ciência de Dados
- Listas de Exercícios
- Slides
- Códigos

Os botões de filtro são gerados automaticamente com base nas categorias existentes no array.

## Como adicionar ou editar projetos

Os projetos ficam no array `projectsData`, também em `assets/js/script.js`.

Cada projeto segue esta estrutura:

```js
{
  title: "Nome do projeto",
  description: "Resumo do projeto",
  techs: ["Tecnologia 1", "Tecnologia 2"],
  repositoryLink: "https://github.com/...",
  projectLink: "https://github.com/...",
  label: "Profissional"
}
```

## Estrutura de pastas

```text
projeto_site_pessoal/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── files/
│   │   └── material-modelo.txt
│   ├── img/
│   └── js/
│       └── script.js
└── README.md
```

## Funcionalidades implementadas em JavaScript

- rolagem suave entre seções;
- validação simples do formulário de contato;
- botão para copiar e-mail;
- atualização automática do ano no rodapé;
- filtro de materiais por categoria;
- animação das barras de conhecimento ao aparecerem na tela;
- renderização dinâmica das seções de conhecimentos, materiais e projetos.

## Observações importantes

- Os materiais usam um arquivo demonstrativo em `assets/files/material-modelo.txt`.
- O e-mail, o GitHub e o Currículo Lattes já estão configurados com os dados informados.
- O LinkedIn está configurado com a URL fornecida e pode ser substituído futuramente pelo link direto do perfil pessoal, se desejar.
- O formulário está pronto visualmente, mas ainda não envia mensagens para um backend.

## Possíveis melhorias futuras

- integração do formulário com serviço de envio de e-mails;
- área administrativa para cadastrar materiais sem editar código;
- página individual para cada projeto;
- busca textual no repositório de materiais;
- integração do formulário com backend, API ou serviço de automação;
- inclusão de publicações, orientações e eventos acadêmicos.
# portifolio_gwp
