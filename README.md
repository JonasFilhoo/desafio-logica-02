# Desafio Lógica 02

Este projeto tem como objetivo exercitar conceitos de lógica de programação utilizando JavaScript, com foco em funções matemáticas simples e testes automatizados.

## Sumário

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Testar](#como-testar)
- [Observações](#observações)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

O projeto implementa funções matemáticas básicas, como soma de dois números, e utiliza testes automatizados para garantir o funcionamento correto dessas funções. É ideal para quem está começando a aprender lógica de programação e deseja praticar testes unitários.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Mocha**: Framework de testes para JavaScript.
- **Chai**: Biblioteca de asserções para testes.
- **JavaScript**: Linguagem principal do projeto.

## Estrutura do Projeto

```
desafio-logica-02/
├── src/
│   └── calculadora.js      # Funções matemáticas
├── test/
│   └── calculadora.test.js # Testes automatizados
├── package.json            # Configurações e dependências
├── README.md               # Documentação do projeto
└── .gitignore              # Arquivos/pastas ignorados pelo Git
```

## Como Testar

1. **Instale o Node.js**  
   Certifique-se de ter o Node.js instalado. [Download Node.js](https://nodejs.org/)

2. **Instale as dependências**  
   No terminal, dentro da pasta do projeto, execute:
   ```sh
   npm install
   ```

3. **Execute os testes**  
   Para rodar todos os testes automatizados:
   ```sh
   npm test
   ```

   Os resultados dos testes aparecerão no terminal, indicando se as funções estão funcionando corretamente.

## Observações

- Os testes atuais cobrem a função de soma de dois números. Para adicionar mais funcionalidades, crie novas funções em `src/calculadora.js` e seus respectivos testes em `test/calculadora.test.js`.
- O projeto é focado em lógica básica, sendo ideal para iniciantes.
- Caso queira rodar os testes em outro ambiente, verifique se as dependências estão corretamente instaladas.

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias, correções ou novas funções matemáticas.

## Licença

Este projeto está licenciado sob
