# Teste da vaga de Desenvolvedor frontend na BIGCORE

[Link do projeto na vercel](https://bigcore-test.vercel.app/).

## Setup inicial

Instale todas as dependências utilizando o seu gerenciador de pacotes favorito. Recomendo, para este projeto, usar bun (que é muito rápido e ótimo na gestão de cache).

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Rodando o ambiente de desenvolvimento

Inicie o ambiente de desenvolvimento `http://localhost:5173`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Produção

Montando os pacotes para produção:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Para visualizar o projeto montado (buildado):

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Composition API

Este projeto roda utilizando-se de composition API. A escolha se dá pela facilidade de incluir módulos em diversas partes do projeto e pela facilidade de se testar funções. Eu recomendo este "approach" para facilitar o trabalho em projetos grandes.

## Testes

```bash
# npm
npm run test

# pnpm
pnpm run test

# yarn
yarn test

# bun
bun run test
```

O vitest é um aliado incrível para projetos feitos em vite. O vuetify é viável ser testado também, a partir de importação global dos seus componentes. Entretanto, devido a uma falha de testes relativos à modelValue reportado [neste link](https://github.com/vuejs/test-utils/issues/2468)

Com mais tempo, o foco seria uma cobertura maior de testes na ferramenta.
