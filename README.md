# Luizalabs Frontend Challenge

### Objetivo
Desenvolver uma aplicação de listagem e detalhe de personagens de quadrinhos.

#### Requisitos
- Deve ser uma SPA “single page application” (dar preferencia ao React);
- Não utilizar bibliotecas de UI como: bootstrap, semantic-ui, antdesign e etc;
- Utilizar API da Marvel (https://developer.marvel.com/docs);
- Disponibilizar em uma URL pública do projeto rodando para avaliação;
- Disponibilizar código em repositório Git de sua preferência, commitando cada fase do seu processo de desenvolvimento;
- Seguir layout da pasta `./assets`, respeitando as páginas, features e componentes (não será avaliado “pixel perfect”).

#### Requisitos funcionais
- Página de listagem de personagens (home):
  - Exibir os 20 primeiros resultados da API;
  - Permitir ordenação por nome do personagem;
  - Permitir filtrar por nome, pelo campo de busca;
  - Permitir mostrar apenas os personagens favoritos;
  - Permitir o usuário favoritar/desfavoritar até 5 personagens;
- Página de detalhe do personagem:
  - Exibir dados do personagem;
  - Exibir últimos 10 quadrinhos lançados deste personagem (onSaleDate);
  - Permitir o usuário favoritar/desfavoritar (dentro do limite de 5).
  
### Configurações

Copiar arquivo de variáveis de ambiente:
```
cp -r .env.example .env
```

e adicionar as chaves que podem ser encontradas aqui (https://developer.marvel.com/docs)

### Scripts do projeto

No diretório do projeto você pode correr:

## `yarn start`
Abre um servidor de desenvolvimento da aplicação.

### `yarn start:e2e`
Roda os testes e2e com Cypress.

### `yarn deploy`
Faz deploy para a aplicação na página do git hub pages.

### Live Site
Você pode conferir a aplicação rodando aqui: https://ronaiza-cardoso.github.io/hero-labs/
